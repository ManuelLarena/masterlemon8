<template>
  <v-form ref="form" v-model="valid">
    <template v-if="!this.isEditMode">
      <v-file-input accept="image/*" label="Select a image"></v-file-input>
    </template>
    <v-text-field
      filled
      label="Name"
      :value="recipe.name"
      :rules="[resultRecipeError.name]"
      @blur="(name) => onUpdateRecipe('name', recipe.name)"
      @input="(name) => onUpdateRecipe('name', name)"
    />

    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      v-model="ingredient"
      :clearable="true"
      :rules="[resultRecipeError.ingredient]"
      @keyup="(ingredient) => onUpdateRecipe('ingredient', ingredient)"
      @blur="(ingredient) => onUpdateRecipe('ingredient', ingredient)"
      @click:append.prevent="onAddIngredient(ingredient)"
    />

    <ingredient-list-component
      :ingredients="recipe.ingredients"
      :on-remove-ingredient="onRemoveIngredient"
    />

    <!-- <v-alert
      :value="!recipeError.ingredients.succeeded"
      color="error"
      outlined
      >{{ recipeError.ingredients.message }}</v-alert
    > -->
    <snackbar
      :snackbar="!recipeError.ingredients.succeeded"
      :snackbarColor="snackbarColor"
      :snackbarText="recipeError.ingredients.message"
      :isVisible="false"
    ></snackbar>

    <v-textarea
      label="Description"
      filled
      placeholder="Description...."
      rows="10"
      :value="recipe.description"
      :no-resize="true"
      :rules="[resultRecipeError.description]"
      @blur="(value) => onUpdateRecipe('description', recipe.description)"
      @input="(value) => onUpdateRecipe('description', value)"
    ></v-textarea>

    <v-btn type="button" color="success" @click.prevent="handleOnSave()"
      >Save</v-btn
    >
    <template v-if="!this.isEditMode">
      <v-btn type="button" color="warning" @click.prevent="handleOnCancel()">
        Cancel
      </v-btn>
    </template>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropOptions, VueConstructor } from 'vue';
import IngredientListComponent from './IngredientList.vue';
import { FormProps } from '../formProps';
import { ResultRecipeError } from '../viewModel';
import { Snackbar } from 'common/components';

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: 'FormComponent',
  components: { IngredientListComponent, Snackbar },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
    snackbar: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
    isVisible: { required: true },
    isEditMode: { required: true },
  } as FormProps,
  data() {
    return {
      ingredient: '',
      valid: true,
    };
  },
  computed: {
    resultRecipeError(): ResultRecipeError {
      return Object.keys(this.recipeError).reduce(
        (acc, item) => ({
          ...acc,
          [item]:
            this.recipeError[item as keyof ResultRecipeError].succeeded ||
            this.recipeError[item as keyof ResultRecipeError].message,
        }),
        {} as ResultRecipeError
      );
    },
  },
  methods: {
    handleOnSave() {
      if (this.$refs.form.validate()) {
        this.onSave();
      }
    },
    handleOnCancel() {
      this.$router.back();
    },
  },
});
</script>
