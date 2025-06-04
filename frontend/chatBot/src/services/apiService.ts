import axios, { type AxiosResponse } from 'axios';
import { apiConstants } from '../__utils/apiConstants';
import {instance} from './api-service-instance';
import { UserChat, UserChatList, UserDetails, UserInput, UserMessage } from '../__utils/types';
    
const sendRequest = async (
  url: any,
  method: any = "GET",
  payload: any = null
) => {
  const response = await instance.request({
    url,
    method,
    data: payload,
  });

  return response;
};

export const getBaseURL = () => {
  return instance.defaults.baseURL;
};

export const getuserChatList = (userId:string): Promise<UserChatList> => {
    const url = apiConstants.USER_CHAT_LIST.replace('{userId}', userId);
    return sendRequest(url,'GET');
}

export const createUserChat = (userId:string, payload: UserChat): Promise<UserChat> => {
    const url = apiConstants.CREATE_CHAT.replace('{userId}', userId);
    return sendRequest(url,'POST', payload);
}

export const getUserChat = (userId: string, chatId: string): Promise<UserChat> => {
    const url = apiConstants.USER_CHAT.replace('{userId}',userId).replace('{chatId}', chatId);
    return sendRequest(url,'GET');
}

export const deleteUserChat = (userId: string, chatId: string):Promise<AxiosResponse<any, any>> =>{
    const url = apiConstants.DELETE_USER_CHAT.replace('{userId}',userId).replace('{chatId}',chatId);
    return sendRequest(url,'DELETE');
}