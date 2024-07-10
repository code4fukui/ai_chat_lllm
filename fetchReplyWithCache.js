import { fetchReply } from "./fetchReply.js";

const cache = {};

export const fetchReplyWithCache = async (q) => {
  const res = cache[q];
  if (res) return res;
  const res2 = await fetchReply(q);
  cache[q] = res2;
  return res2;
};
