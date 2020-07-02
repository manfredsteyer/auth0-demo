import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    issuer: 'https://dev-g-61sdfs.eu.auth0.com/',

    clientId: 'opHt1Tkt9E9fVQTZPBVF1tHVhjrxvyVX',
    redirectUri: window.location.origin,

    scope: 'openid profile email offline_access', 

    responseType: 'code',

    logoutUrl: 'https://dev-g-61sdfs.eu.auth0.com/v2/logout',

    customQueryParams: {
        audience: 'http://www.angular.at/api'
    },

    // timeoutFactor: 0.0001
};
