import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 700,
    marginBottom: theme.spacing(2),
    borderRadius: '4px 4px 0 0',
  },
  large: {
    display: 'inline-flex',
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
    verticalAlign: 'middle',
  },
  tableFooter: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    flex: '0 1 auto',
    width: 'auto',
  },
}));

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    fontSize: 16,
    fontWeight: 'bold',
    padding: theme.spacing(3, 2),
  },
  body: {
    fontSize: 14,
    padding: theme.spacing(2),
  },
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
