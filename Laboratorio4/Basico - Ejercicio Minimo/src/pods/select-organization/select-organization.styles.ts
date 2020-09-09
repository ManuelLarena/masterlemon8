import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  filter: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  formControl: {
    flex: '0 1 100%',
    marginRight: theme.spacing(2),
  },
}));
