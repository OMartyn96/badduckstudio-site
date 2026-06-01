# Support form worker

The support pages (`support.html` and `suporte.html`) submit requests to:

```text
/api/support
```

That route should be handled by the Cloudflare Worker in `worker/support-worker.js`.
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

5. Configure a Worker route for the production site:

```text
badduckstudio.com/api/support
www.badduckstudio.com/api/support
```

## Configuration

Non-secret values are in `wrangler.toml`:

```toml
SUPPORT_TO_EMAIL = "contact@badduckstudio.com"
SUPPORT_FROM_EMAIL = "WordWildWest Support <support@badduckstudio.com>"
ALLOWED_ORIGINS = "https://badduckstudio.com,https://www.badduckstudio.com"
```

`SUPPORT_FROM_EMAIL` must use a domain verified in Resend.

For local development, put secrets in `.dev.vars`; it is ignored by git.
