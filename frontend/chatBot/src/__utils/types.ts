export interface Message {
    id: string;
    message: string;
    role: 'user' | 'ai';
    timestamp: string;
}

export interface ChatState {
    messages: Message[];
    isLoading: boolean;
    isDisabled: boolean;
    error: string | null;
    currentChatId: string | null;
    currentConversationId: string | null;
}