import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../employee-table.styles';

export const EmployeeTableHeader: React.FC = () => {
  const classes = useStyles();

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
