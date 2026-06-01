const RESEND_API_URL = "https://api.resend.com/emails";
const MAX_FIELD_LENGTH = 1000;
const MAX_MESSAGE_LENGTH = 8000;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = getCorsHeaders(origin, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/api/support") {
      return jsonResponse({ error: "Not found" }, 404, corsHeaders);
    }

    if (!isAllowedOrigin(origin, env)) {
      return jsonResponse({ error: "Origin not allowed" }, 403, corsHeaders);
    }

    if (!env.RESEND_API_KEY) {
      return jsonResponse({ error: "Support mail is not configured" }, 500, corsHeaders);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid request body" }, 400, corsHeaders);
    }

    const cleaned = sanitizePayload(payload);
    const validationError = validatePayload(cleaned);
    if (validationError) {
      return jsonResponse({ error: validationError }, 400, corsHeaders);
    }

    if (cleaned.website) {
      return jsonResponse({ ok: true }, 200, corsHeaders);
    }

    const subject = `[WordWildWest] [${cleaned.topic}] ${cleaned.subject}`;
    const text = buildTextEmail(cleaned, request);
    const html = buildHtmlEmail(cleaned, request);

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: env.SUPPORT_FROM_EMAIL,
        to: [env.SUPPORT_TO_EMAIL],
        reply_to: cleaned.email,
        subject,
        text,
        html
      })
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend error", resendResponse.status, detail);
      return jsonResponse({ error: "Could not send support request" }, 502, corsHeaders);
    }

    return jsonResponse({ ok: true }, 200, corsHeaders);
  }
};

function sanitizePayload(payload) {
  return {
    topic: clean(payload.topic),
    email: clean(payload.email),
    name: clean(payload.name),
    platform: clean(payload.platform),
    identifier: clean(payload.identifier),
    version: clean(payload.version),
    subject: clean(payload.subject),
    message: clean(payload.message, MAX_MESSAGE_LENGTH),
    language: clean(payload.language),
    website: clean(payload.website)
  };
}

function clean(value, maxLength = MAX_FIELD_LENGTH) {
  return String(value || "").trim().slice(0, maxLength);
}

function validatePayload(payload) {
  if (!payload.topic) return "Topic is required";
  if (!isValidEmail(payload.email)) return "A valid email is required";
  if (!payload.subject) return "Subject is required";
  if (!payload.message) return "Message is required";
  return null;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildTextEmail(payload, request) {
  const country = request.headers.get("CF-IPCountry") || "Unknown";

  return [
    `Topic: ${payload.topic}`,
    `Reply email: ${payload.email}`,
    `Name/player name: ${payload.name || "Not provided"}`,
    `Platform: ${payload.platform || "Not provided"}`,
    `Account identifier: ${payload.identifier || "Not provided"}`,
    `App version, device and country/region: ${payload.version || "Not provided"}`,
    `Form language: ${payload.language || "Not provided"}`,
    `Cloudflare country: ${country}`,
    "",
    "Message:",
    payload.message
  ].join("\n");
}

function buildHtmlEmail(payload, request) {
  return `<h2>WordWildWest support request</h2>
<table>
  <tr><th align="left">Topic</th><td>${escapeHtml(payload.topic)}</td></tr>
  <tr><th align="left">Reply email</th><td>${escapeHtml(payload.email)}</td></tr>
  <tr><th align="left">Name/player name</th><td>${escapeHtml(payload.name || "Not provided")}</td></tr>
  <tr><th align="left">Platform</th><td>${escapeHtml(payload.platform || "Not provided")}</td></tr>
  <tr><th align="left">Account identifier</th><td>${escapeHtml(payload.identifier || "Not provided")}</td></tr>
  <tr><th align="left">App/device/region</th><td>${escapeHtml(payload.version || "Not provided")}</td></tr>
  <tr><th align="left">Form language</th><td>${escapeHtml(payload.language || "Not provided")}</td></tr>
  <tr><th align="left">Cloudflare country</th><td>${escapeHtml(request.headers.get("CF-IPCountry") || "Unknown")}</td></tr>
</table>
<h3>Message</h3>
<p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getCorsHeaders(origin, env) {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };

  if (isAllowedOrigin(origin, env)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

function isAllowedOrigin(origin, env) {
  if (!origin) return false;
  return getAllowedOrigins(env).includes(origin);
}

function getAllowedOrigins(env) {
  return String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function jsonResponse(body, status, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  });
}
