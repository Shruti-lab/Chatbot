export interface Message {
    id: string;
    message: string;
    role: 'user' | 'ai';
    timestamp: string;
}

export interface ChatState {
    messages: Message[];
    isLoading: boolean;
    error: string | null;
    currentChatId: string | null;
    currentConversationId: string | null;
}

//on the left panel, we have list of chats, each chat has multiple conversations
export interface UserChat {
    id: string,
    userId: string,
    title: string;
    createdAt: string;
}

export interface UserChatList {
    chats: UserChat[];
    totalCount: number;
}


//user details
export interface UserDetails{
    id: string;
    name: string;
    email: string;
}

//user message
export interface UserInput {
    message: string;
}