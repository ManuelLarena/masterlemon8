<template>
  <div>
    <v-app-bar app dark color="amber">
      <v-toolbar-title>Recipe App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ getUsername }}</v-toolbar-title>
      <v-btn icon large @click="logout">
        <v-icon large>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { baseRoutes } from '../../router';

export default Vue.extend({
  name: 'AppLayout',
  data() {
    return {
      getUsername: localStorage.getItem('username'),
    };
  },
  methods: {
    logout(): void {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.$router.push(baseRoutes.login);
    },
  },
});
</script>
