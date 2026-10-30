import { spawn } from "node:child_process";

const port = process.env.PORT || process.env.APP_PORT || "3000";
const host = process.env.HOST || "0.0.0.0";
const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";

const child = spawn(
  npxCmd,
  ["nitro", "preview", "--dir", ".", "--host", host, "--port", port],
  {
    stdio: "inherit",
    env: process.env,
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

child.on("error", (error) => {
  console.error("Failed to start Nitro preview:", error);
  process.exit(1);
});

