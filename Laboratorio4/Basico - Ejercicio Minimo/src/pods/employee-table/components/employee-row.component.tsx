import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import { Members } from '../employee-table.vm';
import { useStyles } from '../employee-table.styles';

interface Props {
    member: Members;
  }

export const EmployeeRowComponent: React.FC<Props> = ({ member }) => {
  const classes = useStyles();

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
