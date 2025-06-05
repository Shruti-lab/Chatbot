import axios from 'axios';
import {createAsyncThunk , createSlice, nanoid, type PayloadAction} from '@reduxjs/toolkit';
import type { ChatState, Message, UserChat } from '../../__utils/types';
import { apiConstants } from '../../__utils/apiConstants';
import { resolveURLParams } from '../../services/url-param-resolver';
import { instance } from '../../services/api-service-instance';

const initialState: ChatState = {
    messages: [],
    isLoading: false,
    error: null,
    currentChatId: null,
    currentConversationId: null
}

//fetch single chat history
const fetchChatHistory = createAsyncThunk('chats/fetchChatHistory', async ({userId, chatId}:{userId: string, chatId: string},{rejectWithValue}) =>{
    try{
        const url = resolveURLParams(apiConstants.USER_CHAT, null, {userId,chatId});
        const response = await instance.get(url);
        return response.data;
    }
    catch(error: any){
        console.log("Error fetching chat history:", error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch chat history');

    }
});

//send the user message and get AI response
const sendMessage = createAsyncThunk('chats/sendMessage', 
    async({
        message,
        userId,
        chatId
    }:{
        message: string,
        userId: string,
        chatId: string
    },
        {rejectWithValue})=>{
    try{

        //create user message object
        const userMessage: Message = {
            id: nanoid(),
            message: message,
            role: 'user',
            timestamp: new Date().toISOString()
        };

        //Send the user message to backend then ai
        const sendUrl = resolveURLParams(apiConstants.CHAT_CREATE_NEW_CONVERSATION, null, {userId,chatId});
        const response = await instance.post(sendUrl, userMessage);

        // Call backend endpoint that will handle OpenAI interaction
        const aiMessage : Message = {
            id: nanoid(),
            message: response.data.message,
            role: 'ai',
            timestamp: new Date().toISOString()
        }

        // Return both messages to update state
        return {aiMessage};
        

    } catch(error: any){
            console.log("Error sending message:",error);
            return rejectWithValue(error.response?.data?.message || 'Failed to send message');
        }

})

export const createNewChat = createAsyncThunk('chats/createNewChat', 
    async (userId: string, {rejectWithValue}) => {
        try {
            const url = resolveURLParams(apiConstants.CREATE_CHAT, null, {userId});

            const payload: UserChat = {
                id: nanoid(),
                userId: userId,
                title: 'New Conversation',
                createdAt: new Date().toISOString()
            }

            const response = await instance.post(url, payload);
            return response.data;

        }catch(error: any){
            console.log("Error creating new chat:", error);
            return rejectWithValue(error.response?.data?.message || 'Failed to create new chat');
        }
    }
);


//delete chat
export const deleteChat = createAsyncThunk('chats/deleteChat',
    async ({userId, chatId}: {userId: string, chatId: string}, {rejectWithValue}) => {
        try {
            const url = resolveURLParams(apiConstants.DELETE_USER_CHAT, null, {userId, chatId});
            await instance.delete(url);
            return chatId; // Return chatId to remove it from state
        } catch (error: any) {
            console.log("Error deleting chat:", error);
            return rejectWithValue(error.response?.data?.message || 'Failed to delete chat');
        }
    }   
);

// Update the last conversation in a chat
// export const updateLastConversation = createAsyncThunk('chats/updateLastConversation',
//     async ({userId, chatId, conversationId, text}: {userId: string, chatId: string, conversationId: string, text: string}, {rejectWithValue}) => {
//         try {
//             const url = resolveURLParams(apiConstants.CHAT_UPDATE_LAST_CONVERSATION, null, {userId, chatId, conversationId});
//             const payload = {    ----TODO LATER       


export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        // Add a message locally (without API call)
        addOneConversation:(state: any,action: PayloadAction<{text: string, role: "ai" | "user"}>) =>{
            const newMessage: Message = {
                id: nanoid(),
                message: action.payload.text,
                role: action.payload.role,
                timestamp: new Date().toISOString()

            }
            state.messages.push(newMessage);

        },
        // Clear all messages
        deleteAllMessages: (state)=>{
            state.messages = [];
        },
        //set current/active chat id
        setActiveChatId: (state,action)={
            state.currentConversationId = action.payload;
        },
    },
        extraReducers: (builder) =>{
            builder
                .addCase(fetchChatHistory.pending, (state)=> {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(fetchChatHistory.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.messages = action.payload.messages || [];
                    state.currentChatId = action.payload.id;
                })
                .addCase(fetchChatHistory.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string || 'Failed to fetch chat history';
                })
                .addCase(sendMessage.pending, (state)=>{
                    state.isLoading = true;
                    state.error = null;

                })
                .addCase(sendMessage.fulfilled, (state,action)=>{
                    state.isLoading = false;
                    // Add both user and AI messages to the state
                    if(action.payload?.aiMessage){
                        state.messages.push(action.payload.aiMessage);
                    }
                })
                .addCase(sendMessage.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload as string || 'Failed to send message';
                })
                .addCase(createNewChat.pending, (state)=>{
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(createNewChat.fulfilled, (state,action)=>{
                    state.isLoading = true;
                    // Add the new chat to the state
                    c
                })
                .addCase(createNewChat.rejected, (state,action)=>{
                    state.isLoading = false;
                    state.error  = action.payload as string || 'Failed to create new chat';
                })
            
        }


    
})


export const {addOneConversation,deleteAllMessages} = chatSlice.actions;
export default chatSlice.reducer;

/*
addMessage:(state: any,action:{ payload: { text: string; role: 'ai' | 'user'; }; })
*/