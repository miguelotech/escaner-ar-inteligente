import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: true, // Listen on all addresses
        allowedHosts: true // Allow all hosts (required for localtunnel)
    }
});
