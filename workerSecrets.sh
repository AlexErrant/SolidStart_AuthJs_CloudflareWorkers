#!/bin/bash

source .env

echo $DISCORD_ID     | wrangler secret put DISCORD_ID
echo $DISCORD_SECRET | wrangler secret put DISCORD_SECRET
echo $AUTH_SECRET    | wrangler secret put AUTH_SECRET
