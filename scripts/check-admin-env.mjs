import { readFileSync } from "node:fs";

function loadEnv(path) {
  try {
    for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (!match) continue;
      const key = match[1].trim();
      let value = match[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // optional file
  }
}

loadEnv(".env");
loadEnv(".env.local");

const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || "";

let role = "";
try {
  role = JSON.parse(Buffer.from(key.split(".")[1] || "", "base64url").toString("utf8")).role || "";
} catch {
  role = "";
}

console.log("url_ok", url.includes("supabase.co") && !url.includes("your-project"));
console.log("service_role_ok", role === "service_role");
console.log("placeholder", /EXAMPLE|your-project/i.test(`${key}${url}`));
