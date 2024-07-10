import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const fetchBasic = async (url, body, id, pass) => {
  if (body) {
    if (typeof body == "string") {
      body = new TextEncoder().encode(body);
    } else if (typeof body == "object") {
      body = new TextEncoder().encode(JSON.stringify(body));
    }
  }
  const res = await fetch(url, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: "Basic " + Base64.encode(new TextEncoder().encode(id + ":" + pass)),
      "Content-Type": "application/json",
    },
    body,
  });
  return res;
};

export const fetchTextBasic = async (url, body, id, pass) => {
  return await (await fetchBasic(url, body, id, pass)).text();
};
export const fetchJSONBasic = async (url, body, id, pass) => {
  return await (await fetchBasic(url, body, id, pass)).json();
};
