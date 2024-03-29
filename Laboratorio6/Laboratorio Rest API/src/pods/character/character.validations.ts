import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    gender: [Validators.required],
    species: [Validators.required],
    status: [Validators.required],
    // comment: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
