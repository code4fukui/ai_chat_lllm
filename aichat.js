import { serveAPI } from "https://js.sabae.cc/wsutil.js";
//import { fetchReply } from "./fetchReply.js";
import { fetchReplyWithCache } from "./fetchReplyWithCache.js";

serveAPI("/api", async (param, req, path) => {
  if (path == "/api/reply") {
    //return await fetchReply(param);
    return await fetchReplyWithCache(param);
  }
  return null;
});
