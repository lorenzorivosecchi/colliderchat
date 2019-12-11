export const actionTypes = {
  DIGEST_APP_CREDITS: "DIGEST_APP_CREDITS",

  // ====================================================
  //    Actions generated by the Server
  // ====================================================

  S_MESSAGE: "S::MESSAGE",
  S_TRANSMIT: "S::TRANSMIT",
  S_BROADCAST: "S::BROADCAST",

  // request responses
  S_LOGIN_SUCCESS: "S::LOGIN_SUCCESS",
  S_LOGIN_ERROR: "S::LOGIN_ERROR",

  S_LOGOUT_SUCCESS: "S::LOGOUT_SUCCESS",
  S_LOGOUT_ERROR: "S::LOGOUT_ERROR",

  S_GET_USER_LIST_SUCCESS: "S::GET_USER_LIST_SUCCESS",
  S_GET_USER_LIST_ERROR: "S::GET_USER_LIST_ERROR",

  S_UPDATE_USER_DATA_SUCCESS: "S::UPDATE_USER_DATA_SUCCESS",
  S_UPDATE_USER_DATA_ERROR: "S::UPDATE_USER_DATA_ERROR",

  S_CREATE_DOCUMENT_SUCCESS: "S::CREATE_DOCUMENT_SUCCESS",
  S_CREATE_DOCUMENT_ERROR: "S::CREATE_DOCUMENT_ERROR",

  S_UPDATE_DOCUMENT_DATA_SUCCESS: "S::UPDATE_DOCUMENT_DATA_SUCCESS",
  S_UPDATE_DOCUMENT_DATA_ERROR: "S::UPDATE_DOCUMENT_DATA_ERROR",

  S_DELETE_DOCUMENT_SUCCESS: "S::DELETE_DOCUMENT_SUCCESS",
  S_DELETE_DOCUMENT_ERROR: "S::DELETE_DOCUMENT_ERROR",

  S_CLIENT_CONNECTED: "S::CLIENT_CONNECTED",
  S_CLIENT_DISCONNECTED: "S::CLIENT_DISCONNECTED",

  // clients reducer
  S_CREATE_CLIENT: "S::CREATE_CLIENT",
  S_UPDATE_CLIENT: "S::UPDATE_CLIENT",
  S_DELETE_CLIENT: "S::DELETE_CLIENT",
  S_DESTROY_CLIENT: "S::DESTROY_CLIENT",

  // ====================================================
  //    Actions broadcasted by the Server
  // ====================================================

  B_USER_JOINED: "B::USER_JOINED",
  B_USER_LEFT: "B::USER_LEFT",
  B_USER_UPDATE: "B::USER_UPDATE",

  // todo: add other broadcast action types

  // ====================================================
  //    Actions generated by the Client
  // ====================================================

  // Server request
  C_LOGIN_REQUEST: "C::LOGIN_REQUEST",
  C_LOGIN_SUCCESS: "C::LOGIN_SUCCESS",
  C_LOGIN_ERROR: "C::LOGIN_ERROR",
  C_LOGIN_TIMEOUT: "C::LOGIN_TIMEOUT",

  C_LOGOUT_REQUEST: "C::LOGOUT_REQUEST",
  C_LOGOUT_SUCCESS: "C::LOGOUT_SUCCESS",
  C_LOGOUT_ERROR: "C::LOGOUT_ERROR",
  C_LOGOUT_TIMEOUT: "C::LOGOUT_TIMEOUT",

  C_GET_USER_LIST_REQUEST: "C::GET_USER_LIST_REQUEST",
  C_GET_USER_LIST_SUCCESS: "C::GET_USER_LIST_SUCCESS",
  C_GET_USER_LIST_ERROR: "C::GET_USER_LIST_ERROR",
  C_GET_USER_LIST_TIMEOUT: "C::GET_USER_LIST_TIMEOUT",

  C_UPDATE_USER_DATA_REQUEST: "C::UPDATE_USER_DATA_REQUEST",
  C_UPDATE_USER_DATA_SUCCESS: "C::UPDATE_USER_DATA_SUCCESS",
  C_UPDATE_USER_DATA_ERROR: "C::UPDATE_USER_DATA_ERROR",
  C_UPDATE_USER_DATA_TIMEOUT: "C::UPDATE_USER_DATA_TIMEOUT",

  C_CREATE_DOCUMENT_REQUEST: "C::CREATE_DOCUMENT_REQUEST",
  C_CREATE_DOCUMENT_SUCCESS: "C::CREATE_DOCUMENT_SUCCESS",
  C_CREATE_DOCUMENT_ERROR: "C::CREATE_DOCUMENT_ERROR",
  C_CREATE_DOCUMENT_TIMEOUT: "C::CREATE_DOCUMENT_TIMEOUT",

  C_UPDATE_DOCUMENT_DATA_REQUEST: "C::UPDATE_DOCUMENT_DATA_REQUEST",
  C_UPDATE_DOCUMENT_DATA_SUCCESS: "C::UPDATE_DOCUMENT_DATA_SUCCESS",
  C_UPDATE_DOCUMENT_DATA_ERROR: "C::UPDATE_DOCUMENT_DATA_ERROR",
  C_UPDATE_DOCUMENT_DATA_TIMEOUT: "C::UPDATE_DOCUMENT_DATA_TIMEOUT",

  C_DELETE_DOCUMENT_REQUEST: "C::DELETE_DOCUMENT_REQUEST",
  C_DELETE_DOCUMENT_SUCCESS: "C::DELETE_DOCUMENT_SUCCESS",
  C_DELETE_DOCUMENT_ERROR: "C::DELETE_DOCUMENT_ERROR",
  C_DELETE_DOCUMENT_TIMEOUT: "C::DELETE_DOCUMENT_TIMEOUT",

  // Internal operations
  C_UPDATE_MY_USER_ID: "UPDATE_MY_USER_ID",

  // Users scaffold
  C_CREATE_USER: "C::CREATE_USER",
  C_UPDATE_USER: "C::UPDATE_USER",
  C_DELETE_USER: "C::DELETE_USER",
  C_DESTROY_USER: "C::DESTROY_USER",
  C_REPLACE_USER_LIST: "C::REPLACE_USER_LIST",

  // Documents scaffold
  C_CREATE_DOCUMENT: "C::CREATE_DOCUMENT",
  C_UPDATE_DOCUMENT: "C::UPDATE_DOCUMENT",
  C_DELETE_DOCUMENT: "C::DELETE_DOCUMENT",

  // SC Queries scaffold
  C_CREATE_SC_QUERY: "C::CREATE_SC_QUERY",
  C_UPDATE_SC_QUERY: "C::UPDATE_SC_QUERY",
  C_DELETE_SC_QUERY: "C::DELETE_SC_QUERY",

  // redux-websocket client actions
  C_BEGIN_RECONNECT: "REDUX_WEBSOCKET::BEGIN_RECONNECT",
  C_RECONNECT_ATTEMPT: "REDUX_WEBSOCKET::RECONNECT_ATTEMPT",
  C_RECONNECTED: "REDUX_WEBSOCKET::RECONNECTED",
  C_BROKEN: "REDUX_WEBSOCKET::BROKEN",
  C_CLOSED: "REDUX_WEBSOCKET::CLOSED",
  C_ERROR: "REDUX_WEBSOCKET::ERROR",
  C_MESSAGE: "REDUX_WEBSOCKET::MESSAGE",
  C_OPEN: "REDUX_WEBSOCKET::OPEN",
  C_CONNECT: "REDUX_WEBSOCKET::CONNECT"
};
