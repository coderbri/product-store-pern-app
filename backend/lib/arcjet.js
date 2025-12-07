import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

/* --- Initialize Arcjet --- */
export const aj = arcjet({
    /* ----- Bot Detection ----- */
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // ? shield protects your app from common attacks e.g. SQL injection, XSS, CSRF attacks
        shield({ mode: "LIVE" }),
        detectBot({                         // ? block all bots except search engines
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE",   // ? see the full list at https://arcjet.com/bot-list
            ],
        }),
        /* ----- Rate Limiting ----- */
        tokenBucket({
            mode: "LIVE",
            refillRate: 30,
            interval: 5,
            capacity: 20,
        }),
    ],
});