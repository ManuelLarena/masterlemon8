import { PropOptions } from 'vue';
import { Recipe, RecipeError } from './viewModel';

export interface FormProps {
  recipe: PropOptions<Recipe>;
  recipeError: PropOptions<RecipeError>;
  onUpdateRecipe: PropOptions<(field: String, value: String) => void>;
  onSave: PropOptions<() => void>;
  onRemoveIngredient: PropOptions<(ingredient: String) => void>;
  onAddIngredient: PropOptions<(ingredient: String, ingredients: String[]) => void>;
  snackbar: PropOptions<Boolean>;
  snackbarColor?: PropOptions<String>;
  snackbarText: PropOptions<String>;
  onClose?: PropOptions<() => void>;
  isVisible?: PropOptions<Boolean>;
  isEditMode: PropOptions<Boolean>;
}
