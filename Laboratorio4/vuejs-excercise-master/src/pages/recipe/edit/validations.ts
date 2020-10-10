import {
  createFormValidation,
  Validators,
  ValidationSchema,
} from '@lemoncode/fonk';
import { hasItems, newIngedientValidator } from 'common/validations/index';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    description: [Validators.required],
    ingredients: [hasItems],
  },
};

const validationIngredientSchema: ValidationSchema = {
  field: {
    // ingredient: [Validators.required],
    ingredient: [
      {
        validator: Validators.required,
        message: 'Please fill in this field, no empty field',
      },
      {
        validator: newIngedientValidator
      },
    ],
  },
};

export const validations = createFormValidation(validationSchema);
export const validationsIngredient = createFormValidation(
  validationIngredientSchema
);
