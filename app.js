// app.js
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { loginUser } from "./routes/login.js"; // Import login logic
import { registerUser } from "./routes/register.js"; // Import register logic
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";

// Create the Hono app
const app = new Hono();

// Middleware to set security headers globally
app.use('*', (c, next) => {
    // Set the Content-Type header (automatically set by Hono for HTML, CSS, JS)
    c.header('Content-Type', 'text/html'); // This will change based on your content type (text/css, application/javascript, etc.)

    // Set Content-Security-Policy header
    c.header('Content-Security-Policy',
        "default-src 'self';" +
        "script-src 'self';" +
        "style-src 'self';" +
        "img-src 'self';" +
        "object-src 'none';" + // Prevent use of <object>, <embed>, etc.
        "base-uri 'self';" +  // Restrict base tag
        "frame-ancestors 'none';" +
        "form-action 'self';"); // Allow form submissions only to your own domain

    // Set X-Content-Type-Options header to 'nosniff'
    c.header('X-Content-Type-Options', 'nosniff');
    return next();
});

// Serve static files from the /static directory
app.use('/static/*', serveStatic({ root: '.' }));

// Serve the index page
app.get('/', async (c) => {
    return c.html(await Deno.readTextFile('./views/index.html'));
});

// Validate and sanitize user inputs middleware
app.use('*', async (c, next) => {
    const sanitizeInput = (input) => input.replace(/[^\w\s@.-]/g, ''); // Allow alphanumeric, spaces, @, ., -

    if (c.req.method === 'POST') {
        const body = await c.req.json();
        for (const key in body) {
            body[key] = sanitizeInput(body[key]);
        }
        c.req.parsedBody = body; // Attach sanitized body
    }
    return next();
});

// Serve pages
app.get('/', async (c) => c.html(await Deno.readTextFile('./views/index.html')));
app.get('/register', async (c) => c.html(await Deno.readTextFile('./views/register.html')));
app.post('/register', registerUser);
app.get('/login', async (c) => c.html(await Deno.readTextFile('./views/login.html')));
app.post('/login', loginUser);

// Error handling
app.onError((err, c) => {
    console.error('Error:', err.message);
    return c.text('Internal Server Error', 500);
});

Deno.serve(app.fetch);

// Run the app using the command:
// deno run --allow-net --allow-env --allow-read --watch app.js 