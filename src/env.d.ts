/// <reference types="@cloudflare/workers-types" />

export interface EnvVars {
  AUTH_SECRET: string
  DISCORD_ID: string
  DISCORD_SECRET: string
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Env extends EnvVars {}
}
