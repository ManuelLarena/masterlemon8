import { FieldValidationFunctionSync } from '@lemoncode/fonk';

const newIngedientValidator: FieldValidationFunctionSync = ({
  value,
  values,
}) => {
  const isValid = values.every((item: string): boolean => item !== value);
  return {
    type: 'DONT_REPEAT_VALUE',
    succeeded: isValid,
    message: isValid
      ? ''
      : 'Please enter a different ingredient, do not repeat',
  };
};

export { newIngedientValidator };
