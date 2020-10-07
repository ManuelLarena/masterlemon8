import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  image: "",
  description: "",
  ingredients: [],
});

export interface RecipeError {
  name: ValidationResult;
  description: ValidationResult;
  ingredient: ValidationResult;
  ingredients: ValidationResult;
}

export type ResultRecipeError = Record<keyof RecipeError, boolean | string>;

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
  ingredient: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
});
