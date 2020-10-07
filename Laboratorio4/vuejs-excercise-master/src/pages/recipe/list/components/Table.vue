<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="recipes"
      :items-per-page="5"
      :search="searchText"
      sort-by="name"
      class="table"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <template v-for="item in items">
            <row-component :key="item.id" :recipe="item" :onRemoveRecipe="onRemoveRecipe" />
          </template>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Recipe } from '../viewModel';
import { baseRoutes } from '../../../../router';
import HeaderComponent from './Header.vue';
import RowComponent from './Row.vue';

export default Vue.extend({
  name: 'TableComponent',
  components: { HeaderComponent, RowComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    onRemoveRecipe: { required: true } as PropOptions<(value: number) => void>,
    searchText: String,
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Name',
        align: 'start',
        value: 'name',
      },
      {
        text: 'Description',
        align: 'start',
        value: 'description',
      },
      {
        text: 'Actions',
        align: 'end',
        value: 'actions',
        filterable: false,
        sortable: false,
      },
    ],
  }),
});
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
