import React from 'react';
import { EmployeeRowComponent } from './employee-row.component';
import { Members } from '../employee-table.vm';

interface Props {
  members: Members[];
  page: number;
  rowsPerPage: number;
}

export const EmployeeTableBody: React.FC<Props> = ({
  members,
  page,
  rowsPerPage,
}) => {
  return (
    <>
      {members
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((member: Members) => (
          <EmployeeRowComponent key={member.id} member={member} />
        ))}
    </>
  );
};
