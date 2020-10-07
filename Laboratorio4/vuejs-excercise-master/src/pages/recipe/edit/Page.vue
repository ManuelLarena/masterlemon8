<template>
  <app-layout>
    <div>
      <snackbar
        :snackbar="snackbar"
        :snackbarColor="snackbarColor"
        :snackbarText="snackbarText"
        :onClose="onClose"
        :isVisible="isVisible"
      ></snackbar>
      <template v-if="isEditMode">
        <v-img
          :lazy-src="require(`assets/${this.recipe.image}`)"
          :src="require(`assets/${this.recipe.image}`)"
          width="100%"
          height="90px"
        ></v-img>
      </template>
      <form-component v-bind="$props" />
    </div>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { AppLayout } from 'common/layouts';
import { FormProps } from './formProps';
import { FormComponent } from './components';
import { Snackbar } from 'common/components';

export default Vue.extend({
  name: 'RecipeEditPage',
  components: { AppLayout, FormComponent, Snackbar },
  props: {
    recipe: { require: true },
    recipeError: { required: true },
    onUpdateRecipe: { require: true },
    onSave: { require: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
    snackbar: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
    onClose: { required: true },
    isVisible: { require: true },
    isEditMode: { require: true },
  } as FormProps,
  // data() {
  //   return {
  //     urlImage: require(`assets/${this.recipe.image}`),
  //   };
  // },
  // computed: {
  //   urlImage(): string {
  //     return require(`assets/${this.recipe.image}`);
  //   },
  // },
});
</script>
