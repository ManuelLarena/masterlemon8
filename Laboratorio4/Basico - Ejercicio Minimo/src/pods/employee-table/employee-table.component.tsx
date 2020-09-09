import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { EmployeeTableHeader } from './components/employee-table-header.component';
import { EmployeeTableBody } from './components/employee-table-body.component';
import { useStyles } from './employee-table.styles';
import { Members } from './employee-table.vm';

interface Props {
  emptyRows: number;
  rowsPerPage: number;
  page: number;
  handleChangePage: (event: any, newPage: any) => void;
  handleChangeRowsPerPage: (event: any) => void;
  members: Members[];
}

export const EmployeeTableComponent: React.FC<Props> = ({
  emptyRows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  members,
}) => {
  const classes = useStyles();

  if (!members.length) {
    members = [];
    page = 0;
    // console.log(members, page);
  }

  return (
    <>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <EmployeeTableHeader />
          </TableHead>
          <TableBody>
            <EmployeeTableBody
              members={members}
              page={page}
              rowsPerPage={rowsPerPage}
            />
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
    </>
  );
};
