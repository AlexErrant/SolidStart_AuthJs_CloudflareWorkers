This repo demos how to get [Auth.js](https://authjs.dev/) working with SolidStart via [Create JD App](https://github.com/OrJDev/create-jd-app) on Cloudflare Workers. Things are a bit different with Cloudflare because they don't use the `process.env` to inject environment variables. Commits to this repo were more or less "atomic", so feel free to step through them.

## Start Dev Server

Run `cp .env.example .env` then update the values after visiting https://discord.com/developers/applications > Oauth2 to get the clientId & clientSecret. Generate `AUTH_SECRET` with `openssl rand -hex 32`

```bash
npm run dev
```

This will start a dev server on port `3000` and will watch for changes.

Go to https://discord.com/developers/applications > Oauth2 then add `http://127.0.0.1:3000/api/auth/callback/discord` to Redirects. You should be able to sign in at http://127.0.0.1:3000

## Testing Production Build

### Build

```bash
npm run build
```

### Start

```bash
npm run start
```

This will start a production server on port `3000`.

### Deploy

- Install Wrangler https://developers.cloudflare.com/workers/wrangler/install-and-update/
- Replace the `account_id` in `wrangler.toml` with your Cloudflare account id found at https://dash.cloudflare.com/ > Workers
- Run `./workerSecrets.sh && npm run build && wrangler publish`
- Update https://discord.com/developers/applications > Oauth2 > Redirects to `https://jdapp.cloudflareusernamehere.workers.dev/api/auth/callback/discord`
- You should be able to sign in at https://jdapp.cloudflareusernamehere.workers.dev
  
[Sponsor Create JD App](https://github.com/sponsors/OrJDev)
