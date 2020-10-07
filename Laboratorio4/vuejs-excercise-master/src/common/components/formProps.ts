import { PropOptions } from 'vue';

export interface SnackbarProps {
  snackbar: PropOptions<boolean>;
  snackbarColor?: PropOptions<string>;
  snackbarText: PropOptions<string>;
  onClose: PropOptions<() => void>;
  isVisible?: PropOptions<boolean>;
  timeout?: PropOptions<number>;
}
