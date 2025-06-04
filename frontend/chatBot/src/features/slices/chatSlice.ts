import {createSlice, nanoid} from '@reduxjs/toolkit';
import {ChatState, Message} from '../__utils/types';

const initialState: ChatState = {
    messages: [],
    isLoading: false,
    isDisabled: false,
    error: null,
    currentChatId: null,
    currentConversationId: null
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage:(state: any,action: { payload: { text: string; role: string; }; }) =>{
            const newMessage: Message = {
                id: nanoid(),
                message: action.payload.text,
                role: action.payload.role,
                timestamp: new Date().toISOString()

            }
            state.messages.push(newMessage);

        },
        deleteAllMessages: (state)=>{
            state.messages = [];
        }
    }
})