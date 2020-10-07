<template>
  <app-layout>
    <v-card>
      <v-card-title class="text-h4">
        Recipes
        <v-spacer></v-spacer>
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
      </v-card-title>
      <v-card-text>
        <v-fab-transition>
          <v-btn
            :to="routeAdd"
            v-show="!hidden"
            color="orange"
            dark
            absolute
            bottom
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
        <table-component
          :search-text="searchText"
          :recipes="recipes"
          :onRemoveRecipe="onRemoveRecipe"
        />
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { AppLayout } from '../../../common/layouts';
import { Recipe } from './viewModel';
import { TableComponent, SearchBarComponent } from './components';
import { Prop } from 'vue/types/options';
import { baseRoutes } from '../../../router';

export default Vue.extend({
  name: 'RecipeListPage',
  components: { AppLayout, TableComponent, SearchBarComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onRemoveRecipe: { required: true } as PropOptions<(value: number) => void>,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
  },
  data: () => ({
    hidden: false,
  }),
  computed: {
    routeAdd(): string {
      return (`${baseRoutes.add}`);
    },
  },
});
</script>
