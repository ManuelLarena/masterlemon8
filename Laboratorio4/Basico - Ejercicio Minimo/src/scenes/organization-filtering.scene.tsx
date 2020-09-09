import React from 'react';
import { SelectOrganizationContainer } from '../pods/select-organization';
import { EmployeeTableContainer } from '../pods/employee-table';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
}));

export const OrganizationFilteringScene: React.FC = () => {
  const classes = useStyles();
  const [organization, setOrganization] = React.useState('lemoncode');

  return (
    <div className={classes.root}>
      <SelectOrganizationContainer setOrganization={setOrganization} />
      <EmployeeTableContainer organization={organization} />
    </div>
  );
};
