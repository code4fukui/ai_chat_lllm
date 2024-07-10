import { getEnv } from "https://code4fukui.github.io/ai_chat/getEnv.js";
import { fetchTextBasic } from "./fetchBasic.js";

const url = await getEnv("LLM_ENDPOINT");
const id = await getEnv("LLM_BASIC_ID");
const pass = await getEnv("LLM_BASIC_PASS");
const param = `{"body":"ネコは何本足？"}`;
const txt = await fetchTextBasic(url, param, id, pass);
console.log(txt);
