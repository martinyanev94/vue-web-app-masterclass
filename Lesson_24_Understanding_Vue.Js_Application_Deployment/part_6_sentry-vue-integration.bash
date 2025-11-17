npm install @sentry/vue
import * as Sentry from '@sentry/vue';

Sentry.init({
  Vue: app,
  dsn: 'your_sentry_dsn',
  integrations: [
    new Sentry.Integrations.BrowserTracing({
      tracePropagationTargets: ['localhost', /^\//],
    }),
  ],
  tracesSampleRate: 1.0, // Adjust this value in production
});
