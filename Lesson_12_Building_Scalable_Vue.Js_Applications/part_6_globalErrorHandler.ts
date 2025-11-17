const app = createApp(App);

app.config.errorHandler = (err, instance, info) => {
  console.error('Global Error Handler:', err);
  // Perform additional logging or error tracking
};

app.use(store).use(router).mount('#app');
