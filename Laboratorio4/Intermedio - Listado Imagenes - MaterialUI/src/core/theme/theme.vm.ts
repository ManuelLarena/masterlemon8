import { Theme as DefaultTheme } from '@material-ui/core/styles';
import { Palette as DefaultPalette } from '@material-ui/core/styles/createPalette';

export interface Theme extends DefaultTheme {
  palette: DefaultPalette;
}
