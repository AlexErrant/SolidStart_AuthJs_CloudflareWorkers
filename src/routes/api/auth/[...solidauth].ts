import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start";
import Discord from "@auth/core/providers/discord";
import type { PageEvent } from "solid-start";
import type { EnvVars } from "~/env";

export function authOpts(env: EnvVars): SolidAuthConfig {
  return {
  secret: env.AUTH_SECRET,
  trustHost: true,
  callbacks: {
    session({ session, user }) {
      console.log("user", user)
      return session;
    },
  },
  providers: [
    // @ts-expect-error Types Issue
    Discord({
      clientId: env.DISCORD_ID,
      clientSecret: env.DISCORD_SECRET,
    }),
  ],
  debug: false,
};
}

// We could validate that `x.env` is the right shape via Zod... but I don't bother to do that here. Validation would occur on every request... which IMO is overkill.

export const GET = (x: PageEvent) => SolidAuth(authOpts(x.env)).GET(x)

export const POST = (x: PageEvent) => SolidAuth(authOpts(x.env)).POST(x)
