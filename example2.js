import { fetchReply } from "./fetchReply.js";

const param = "ネコは何本足？";
const txt = await fetchReply(param);
console.log(txt);
