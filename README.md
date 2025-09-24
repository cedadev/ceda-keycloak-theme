# CEDA Keycloak Theme

## Building the theme

Install with yarn:

```bash
yarn install
```

You need to have [Maven](https://maven.apache.org/) installed to build the theme (Maven >= 3.1.1, Java >= 7).  
The `mvn` command must be in the $PATH.

-   On macOS: `brew install maven`
-   On Debian/Ubuntu: `sudo apt-get install maven`
-   On Windows: `choco install openjdk` and `choco install maven` (Or download from [here](https://maven.apache.org/download.cgi))

Build the theme with the following command (creates in `dist_keycloak/ceda-keycloak-theme.jar`):

```bash
npm run build-keycloak-theme
```

## Testing the theme

[Documentation](https://docs.keycloakify.dev/testing-your-theme)

For development, use the storybook view (no build needed):

```bash
npx keycloakify add-story
npm run storybook
```

Run a Keycloak test server to check it's all working (build needed):

```bash
npx keycloakify start-keycloak --keycloak-version 26
```

# More links

[Keycloakify GitHub](https://github.com/keycloakify/keycloakify)

[Keycloakify-starter GitHub](https://github.com/keycloakify/keycloakify-starter)

[Customising the theme](https://docs.keycloakify.dev/customization-strategies)

## License

This work is licenced under BSD License 2.0 (Copyright 2025 United Kingdom Research and Innovation).
However, it includes code and files from [keycloakify](https://github.com/keycloakify/keycloakify) and [keycloakify-starter](https://github.com/keycloakify/keycloakify-starter), which both use the MIT license. A full copy of the relevant MIT Licencse text can be found in [LICENSE.keycloakify](LICENSE.keycloakify) (included in this project).

`ceda-keycloak-theme: BSD License 2.0`
`keycloakify: MIT License`
`keycloakify-starter: MIT License`
