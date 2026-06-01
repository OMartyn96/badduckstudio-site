# Support form worker

The support pages (`support.html` and `suporte.html`) submit requests to:

```text
https://badduckstudio-support.badduckstudio.workers.dev/api/support
```

That endpoint is handled by the Cloudflare Worker in `worker/support-worker.js`.
The Worker sends the message through Resend.

## Cloudflare setup

1. Verify `badduckstudio.com` in Resend.
2. Create a Resend API key.
3. In Cloudflare, deploy this Worker with Wrangler:

```bash
npx wrangler deploy
```

4. Add the Resend API key as a Worker secret:

```bash
npx wrangler secret put RESEND_API_KEY
```

5. Optional: configure a Worker route for the production site if you want to use `/api/support` instead of the `workers.dev` URL:

```text
badduckstudio.com/api/support
www.badduckstudio.com/api/support
```

The domain must be proxied through Cloudflare for those routes to run.

## Configuration

Non-secret values are in `wrangler.toml`:

```toml
SUPPORT_TO_EMAIL = "support@badduckstudio.com"
SUPPORT_FROM_EMAIL = "WordWildWest Support <support@badduckstudio.com>"
ALLOWED_ORIGINS = "https://badduckstudio.com,https://www.badduckstudio.com"
```

`SUPPORT_FROM_EMAIL` must use a domain verified in Resend.

For local development, put secrets in `.dev.vars`; it is ignored by git.
