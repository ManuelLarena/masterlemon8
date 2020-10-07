<template>
  <tr>
    <td class="name">
      {{ recipe.name }}
    </td>
    <td class="description">
      <span>{{ recipe.description }}</span>
    </td>
    <td class="edit-button">
      <v-btn text icon :to="routeEdit">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn text icon @click="() => onRemoveRecipe(recipe.id)">
        <v-icon>delete</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { baseRoutes } from '../../../../router';
import { Recipe } from '../viewModel';

export default Vue.extend({
  name: 'RowComponent',
  props: {
    recipe: { required: true } as PropOptions<Recipe>,
    onRemoveRecipe: { required: true } as PropOptions<(value: number) => void>,
  },
  computed: {
    routeEdit(): string {
      return `${baseRoutes.recipe}/${this.recipe.id}`;
    },
  },
});
</script>

<style scoped>
.name {
  width: 25%;
}

.description {
  max-width: 480px;
}

.description span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 100%;
}

.edit-button {
  text-align: end;
}
</style>
