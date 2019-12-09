import { combineReducers } from "redux";
import base from "./base";
import chat, * as fromChat from "./chat/index";
import wsClient from "./wsClient";

const root = combineReducers({
  base,
  chat,
  websocket: wsClient
});

export default root;

/* ----------------
 *    Selectors
 * ---------------- */

export const selectDocument = (state, id) =>
  fromChat.selectDocument(state.chat, id);

export const selectClient = (state, id) =>
  fromChat.selectClient(state.chat, id);

export const selectUser = (state, id) => fromChat.selectUser(state.chat, id);

export const selectScQuery = (state, id) =>
  fromChat.selectScQuery(state.chat, id);
