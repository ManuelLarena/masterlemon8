import React from 'react';
import { EmployeeTableComponent } from './employee-table.component';
import { Members } from './employee-table.vm';

interface Props {
  organization: string;
}

export const EmployeeTableContainer: React.FC<Props> = ({ organization }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [members, setMembers] = React.useState<Members[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [organization]);

  const emptyRows: number =
    rowsPerPage - Math.min(rowsPerPage, members.length - page * rowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <EmployeeTableComponent
        emptyRows={emptyRows}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        members={members}
      />
    </>
  );
};
