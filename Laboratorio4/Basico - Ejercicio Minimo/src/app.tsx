import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
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
    display: 'inline-flex',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export const App = () => {
  const classes = useStyles();
  const [members, setMembers] = React.useState([]);
  const [filter, setFilter] = React.useState('lemoncode');
  const [organization, setOrganization] = React.useState('lemoncode');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [organization]);

  const HeadComponent: React.FC = () => {
    return (
      <div className={classes.filter}>
        <TextField
          id="standard-basic"
          label="Organization"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={classes.formControl}
          autoFocus={true}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => setOrganization(filter)}
          disableElevation
        >
          Search
        </Button>
      </div>
    );
  };

  const EmployeeTableHeader: React.FC = () => {
    return (
      <TableRow>
        <TableCell className={classes.head} align="center">
          Avatar
        </TableCell>
        <TableCell className={classes.head} align="center">
          Id
        </TableCell>
        <TableCell className={classes.head} align="center">
          Name
        </TableCell>
      </TableRow>
    );
  };

  interface Members {
    id: string;
    login: string;
    avatar_url: string;
  }

  interface RowProps {
    member: Members;
  }

  const EmployeeRowComponent: React.FC<RowProps> = ({ member }) => {
    return (
      <TableRow>
        <TableCell align="center">
          <Avatar
            alt={member.login}
            src={member.avatar_url}
            className={classes.large}
          />
          <img />
        </TableCell>
        <TableCell align="center">{member.id}</TableCell>
        <TableCell align="center">{member.login}</TableCell>
      </TableRow>
    );
  };

  interface TableBodyProps {
    members: Members[];
  }

  const EmployeeTableBody: React.FC<TableBodyProps> = ({ members }) => {
    return (
      <>
        {members
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((member) => (
            <EmployeeRowComponent key={member.id} member={member} />
          ))}
      </>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, members.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <HeadComponent />
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <EmployeeTableHeader />
          </TableHead>
          <TableBody>
            <EmployeeTableBody members={members} />
            {emptyRows > 0 && (
              <TableRow style={{ height: 94 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};
