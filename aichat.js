import { serveAPI } from "https://js.sabae.cc/wsutil.js";
//import { fetchReply } from "./fetchReply.js";
import { fetchReplyWithCache } from "./fetchReplyWithCache.js";
import { log } from "./log.js";

serveAPI("/api", async (param, req, path) => {
  if (path == "/api/reply") {
    //return await fetchReply(param);
    const res = await fetchReplyWithCache(param);;
    await log({ q: param, res });
    return res;
  }
  return null;
});
