<template>
  <v-text-field
    placeholder="Search for ingredients comma separated..."
    :value="searchText"
    @input="onSearch"
    append-icon="search"
    label="Search"
    single-line
    hide-details
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'SearchBarComponent',
  props: {
    searchText: String,
    onSearch: {} as PropOptions<(value: string) => void>,
  },
});
</script>
