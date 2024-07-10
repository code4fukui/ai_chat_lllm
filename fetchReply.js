import { getEnv } from "https://code4fukui.github.io/ai_chat/getEnv.js";
import { fetchJSONBasic } from "./fetchBasic.js";

const url = await getEnv("LLM_ENDPOINT");
const id = await getEnv("LLM_BASIC_ID");
const pass = await getEnv("LLM_BASIC_PASS");

export const fetchReply = async (q) => {
  const param = { body: q };
  const txt = await fetchJSONBasic(url, param, id, pass);
  return txt.body.substring(q.length + 1);
};
