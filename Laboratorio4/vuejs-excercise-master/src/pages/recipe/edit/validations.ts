import {
  createFormValidation,
  Validators,
  ValidationSchema,
} from '@lemoncode/fonk';
import { hasItems } from 'common/validations/hasItems';

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
        message: 'You can not add empty ingredients',
      },
    ],
  },
};

export const validations = createFormValidation(validationSchema);
export const validationsIngredient = createFormValidation(
  validationIngredientSchema
);
