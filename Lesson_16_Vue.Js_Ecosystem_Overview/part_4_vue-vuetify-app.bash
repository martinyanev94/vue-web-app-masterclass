npm install vuetify
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(),
}).$mount('#app');
<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>My Vue App</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-btn @click="increment">Increment</v-btn>
      <p>Count: {{ count }}</p>
    </v-container>
  </v-app>
</template>
