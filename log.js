import { DateTime } from "https://js.sabae.cc/DateTime.js";

let allowlog = true;
try {
  await Deno.mkdir("log", { recursive: true });
} catch (e) {
  allowlog = false;
}

export const log = async (data) => {
  const dt = new DateTime();
  if (allowlog) {
    await Deno.writeTextFile("log/" + dt.day.toString() + ".jsonl", JSON.stringify({ dt, data }) + "\n", { append: true });
  }
};
