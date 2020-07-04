import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // Your Auth0 app's domain
    // Important: Don't forget to start with https://
    //  AND the trailing slash!
    issuer: 'https://dev-g-61sdfs.eu.auth0.com/',

    // The app's clientId configured in Auth0
    clientId: 'opHt1Tkt9E9fVQTZPBVF1tHVhjrxvyVX',

    // The app's redirectUri configured in Auth0
    redirectUri: window.location.origin,

    // Scopes ("rights") the Angular application wants get delegated
    scope: 'openid profile email offline_access',

    // Using Authorization Code Flow 
    // (PKCE is activated by default for authorization code flow)
    responseType: 'code',

    // Your Auth0 account's logout url
    // Derive it from your application's domain
    logoutUrl: 'https://dev-g-61sdfs.eu.auth0.com/v2/logout',

    customQueryParams: {
        // API identifier configured in Auth0
        audience: 'http://www.angular.at/api'
    },

};
