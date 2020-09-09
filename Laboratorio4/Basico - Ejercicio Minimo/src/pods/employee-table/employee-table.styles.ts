import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    tableLayout: 'fixed',
  },
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  large: {
    display: 'inline-flex !important',
    width: `${theme.spacing(7)}px !important`,
    height: `${theme.spacing(7)}px !important`,
  },
}));
