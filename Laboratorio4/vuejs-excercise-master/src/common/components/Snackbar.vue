<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor" absolute top>
    {{ snackbarText }}
    <template v-slot:action="{ attrs }">
      <template v-if="isVisible">
        <v-btn color="color" text v-bind="attrs" @click.prevent="onClose">
          Close
        </v-btn>
      </template>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { SnackbarProps } from './formProps';

export default Vue.extend({
  name: 'Snackbar',
  props: {
    snackbar: { required: true },
    snackbarColor: { required: false },
    snackbarText: { required: true },
    onClose: { requiere: true },
    isVisible: { required: false },
  } as SnackbarProps,
  data() {
    return {
      timeout: -1,
    };
  },
});
</script>
