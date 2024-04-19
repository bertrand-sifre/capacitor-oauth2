import { registerPlugin } from '@capacitor/core';
const OAuth2Client = registerPlugin('OAuth2Client', {
    web: () => import('./web').then(m => new m.OAuth2ClientPluginWeb()),
});
export * from './definitions';
export { OAuth2Client };
//# sourceMappingURL=index.js.map