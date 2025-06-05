export enum apiConstants {
  // Base URL for the API
  BASE_URL = 'http://localhost:8080/api/v1',
  // Endpoint for getting the list of chats for a specific user
  USER_CHAT_LIST = 'users/{userId}/chats',
   // Endpoint for creating a new chat
  CREATE_CHAT = 'users/{userId}/chats',
  // Endpoint for getting all the conversation in one specific chat
  USER_CHAT = 'users/{userId}/chats/{chatId}',
  // Endpoint for updating a chat         
  UPDATE_USER_CHAT = 'users/{userId}/chats/{chatId}',
  // Endpoint for deleting an entire user chat
  DELETE_USER_CHAT = 'users/{userId}/chats/{chatId}',
  //under each chat, there are multiple user, ai messages, so each is a conversation. 
  // Endpoint for creating a new conversation in a specific chat
  CHAT_CREATE_NEW_CONVERSATION = 'users/{userId}/chats/{chatId}/conversations',
  //to get list of conversations, we can get it from chatlist itslef, so no need to pass chatId in the URL
  //Endpoint for updating last conversation only in a chat
  CHAT_UPDATE_LAST_CONVERSATION = 'users/{userId}/chats/{chatId}/conversations/{conversationId}',
  
  // CHAT_CONVERSATION_DETAILS = 'users/{userId}/chats/{chatId}/conversations/{conversationId}',
  // Endpoint for sending a message in a specific conversation
  // CHAT_SEND_MESSAGE = 'users/{userId}/chats/{chatId}/conversations/{conversationId}/message',
  // Endpoint for getting the list of conversations for a specific user. will each user have unique chatid? 
    // If yes, then this endpoint will return conversations for that user, but no need to pass userId in the URL
  // If no, then this endpoint will return conversations for all users "'/chats/{chatId}/conversations'", and userId will be used to filter the results
  
  
  //what is difference between chats and conversations here? 
  // Endpoint for getting the list of users
  USERS = '/users',
  // Endpoint for getting the details of a specific user
  USER_DETAILS = '/users/{userId}',
  // Endpoint for creating a new user
  CREATE_USER = '/users',
  // Endpoint for updating a user
  UPDATE_USER = '/users/{userId}',
  // Endpoint for deleting a user
  DELETE_USER = '/users/{userId}',
  // Endpoint for getting the list of roles
  ROLES = '/roles',
  // Endpoint for getting the details of a specific role
  ROLE_DETAILS = '/roles/{roleId}',
  // Endpoint for creating a new role
  CREATE_ROLE = '/roles',
  // Endpoint for updating a role
  UPDATE_ROLE = '/roles/{roleId}',
  // Endpoint for deleting a role
  DELETE_ROLE = '/roles/{roleId}',
  // Endpoint for getting the list of permissions
  PERMISSIONS = '/permissions',
  // Endpoint for getting the details of a specific permission
  PERMISSION_DETAILS = '/permissions/{permissionId}',
  // Endpoint for creating a new permission
  CREATE_PERMISSION = '/permissions',
  // Endpoint for updating a permission
  UPDATE_PERMISSION = '/permissions/{permissionId}',
  // Endpoint for deleting a permission
  DELETE_PERMISSION = '/permissions/{permissionId}',
  // Endpoint for getting the list of settings
  SETTINGS = '/settings',
  // Endpoint for getting the details of a specific setting
  SETTING_DETAILS = '/settings/{settingId}',
  // Endpoint for updating a setting
  UPDATE_SETTING = '/settings/{settingId}',
  // Endpoint for getting the list of logs
  LOGS = '/logs',
  // Endpoint for getting the details of a specific log
  LOG_DETAILS = '/logs/{logId}',
  // Endpoint for getting the list of analytics
  ANALYTICS = '/analytics',
  // Endpoint for getting the details of a specific analytics report
  ANALYTICS_REPORT = '/analytics/{reportId}',
  // Endpoint for generating a new analytics report
  GENERATE_ANALYTICS_REPORT = '/analytics/generate',
  // Endpoint for getting the list of notifications
  NOTIFICATIONS = '/notifications',
  // Endpoint for getting the details of a specific notification
  NOTIFICATION_DETAILS = '/notifications/{notificationId}',
  // Endpoint for creating a new notification
  CREATE_NOTIFICATION = '/notifications',
  // Endpoint for updating a notification
  UPDATE_NOTIFICATION = '/notifications/{notificationId}',
  // Endpoint for deleting a notification
  DELETE_NOTIFICATION = '/notifications/{notificationId}',
  // Endpoint for getting the list of integrations
  INTEGRATIONS = '/integrations',
  // Endpoint for getting the details of a specific integration
  INTEGRATION_DETAILS = '/integrations/{integrationId}',
  // Endpoint for creating a new integration
  CREATE_INTEGRATION = '/integrations',
  // Endpoint for updating an integration
  UPDATE_INTEGRATION = '/integrations/{integrationId}',
  // Endpoint for deleting an integration
  DELETE_INTEGRATION = '/integrations/{integrationId}',
  // Endpoint for getting the list of feedback
  FEEDBACK = '/feedback',
  // Endpoint for getting the details of a specific feedback
  FEEDBACK_DETAILS = '/feedback/{feedbackId}',
  // Endpoint for creating new feedback
  CREATE_FEEDBACK = '/feedback',
  // Endpoint for updating feedback
  UPDATE_FEEDBACK = '/feedback/{feedbackId}',
  // Endpoint for deleting feedback
  DELETE_FEEDBACK = '/feedback/{feedbackId}'
 }