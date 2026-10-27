import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "Multi-Page",
            keycloakVersionTargets: {
                "21-and-below": false,
                "23": false,
                "24": false,
                "25": false,
                "26.0-to-26.1": false,
                "26.2-and-above": "ceda-keycloak-theme.jar"
            }
        })
    ]
});
