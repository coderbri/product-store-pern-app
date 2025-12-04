import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

/* --- Middleware --- */
/* Allows us to parse incoming JSON data
    (i.e., product's name, price, image) */
app.use(express.json());
/* Handles CORS errors in the client. */
app.use(cors());
/* Helmet is a security middleware that helps you protect
    your app by setting various HTTP headers. */
app.use(helmet());
/* Output:
[Object: null prototype] {
  'content-security-policy': "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
  'cross-origin-opener-policy': 'same-origin',
  'cross-origin-resource-policy': 'same-origin',
  'origin-agent-cluster': '?1',
  'referrer-policy': 'no-referrer',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-dns-prefetch-control': 'off',
  'x-download-options': 'noopen',
  'x-frame-options': 'SAMEORIGIN',
  'x-permitted-cross-domain-policies': 'none',
  'x-xss-protection': '0'
}
*/

app.use(morgan("dev")); /* Logs requests to the console. */
// Output: GET /test 200 3.828 ms - 13

app.get("/test", (req, res) => {
    console.log(res.getHeaders());
    // Output: [Object: null prototype] { 'x-powered-by': 'Express' }
    
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(` > Server is up and running on PORT: ${PORT}.`);
});
