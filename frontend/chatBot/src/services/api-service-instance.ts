import { message, notification } from 'antd';
import axios from 'axios';
const DEFAULT_LOCALHOST_URL = "http://localhost:";
const CHATBOT_PORT = 5500;


notification.config({
  maxCount: 1,
});

const isLocalhost = () => {
  return window.location.origin.includes(DEFAULT_LOCALHOST_URL);
};

function getCHATBOTBaseURL() {
  if (isLocalhost()) {
    return `${DEFAULT_LOCALHOST_URL}${CHATBOT_PORT}`;
  } else {
    return window.location.origin;
  }
}

export const instance = axios.create({
  baseURL: getCHATBOTBaseURL(),
});