<template>
  <recipe-edit-page
    v-bind="{
      recipe,
      recipeError,
      onUpdateRecipe,
      onAddIngredient,
      onSave,
      onRemoveIngredient,
      snackbar,
      snackbarText,
      snackbarColor,
      onClose,
      isVisible,
      isEditMode,
    }"
  />
</template>

<script lang="ts">
import Vue from 'vue';
// import VueRouter from 'vue-router'
import RecipeEditPage from './Page.vue';
import { fetchRecipeById, save } from '../../../rest-api/api/recipe';
import { mapRecipeModelToVm, mapRecipeVmToModel } from './mapper';
import { createEmptyRecipe, createEmptyRecipeError } from './viewModel';
import { validations, validationsIngredient } from './validations';
// import { baseRoutes, BaseRoutes, router,  } from '../../../router';

export default Vue.extend({
  name: 'RecipeEditPageContainer',
  components: { RecipeEditPage },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
      snackbar: false,
      snackbarText: '',
      snackbarColor: 'error',
      isVisible: true,
      isEditMode: Boolean(this.$route.params.id),
    };
  },
  mounted() {
    console.log(this.isEditMode);
    if (this.isEditMode) {
      const id = Number(this.id || 0);
      fetchRecipeById(id)
        .then((recipe) => {
          this.recipe = mapRecipeModelToVm(recipe);
        })
        .catch((error) => {
          this.snackbar = true;
          this.snackbarColor = 'error';
          this.snackbarText = error;
        });
    } else {
      this.recipe = createEmptyRecipe();
      this.recipeError = createEmptyRecipeError();
      console.log(this.recipe);
    }
  },
  methods: {
    onUpdateRecipe(field: string, value: string) {
      this.recipe = {
        ...this.recipe,
        [field]: value,
      };
      this.validateRecipeField(field, value);
    },
    onSave() {
      validations.validateForm(this.recipe).then((result) => {
        console.log(result);
        if (result.succeeded) {
          const recipe = mapRecipeVmToModel(this.recipe);
          save(recipe)
            .then((message) => {
              console.log(message);
              this.$router.back();
            })
            .catch((error) => {
              this.snackbar = true;
              this.snackbarColor = 'error';
              this.snackbarText = error;
              console.log(error);
            });
        } else {
          this.snackbar = true;
          this.snackbarColor = 'error';
          this.snackbarText = 'Please fill in all the required fields';
          this.recipeError = {
            ...this.recipeError,
            ...result.fieldErrors,
          };
        }
      });
    },
    onAddIngredient(ingredient: string) {
      if (ingredient) {
        console.log('existo');
        this.recipe = {
          ...this.recipe,
          ingredients: [...this.recipe.ingredients, ingredient],
        };
      } else {
        this.validateIngredientField('ingredient', ingredient);
      }
      console.log(this.validateIngredientField('ingredient', ingredient));
      this.validateRecipeField('ingredients', this.recipe.ingredients);
    },
    onRemoveIngredient(ingredient: string) {
      this.recipe = {
        ...this.recipe,
        ingredients: this.recipe.ingredients.filter(
          (item) => item !== ingredient
        ),
      };
      this.validateRecipeField('ingredients', this.recipe.ingredients);
    },
    validateRecipeField(field, value) {
      validations
        .validateField(field, value)
        .then((result) => this.updateRecipeError(field, result));
    },
    validateIngredientField(field, value) {
      validationsIngredient
        .validateField(field, value)
        .then((result) => this.updateRecipeError(field, result));
    },
    updateRecipeError(field, result) {
      this.recipeError = {
        ...this.recipeError,
        [field]: result,
      };
    },
    onClose(): void {
      this.snackbar = false;
    },
  },
});
</script>
