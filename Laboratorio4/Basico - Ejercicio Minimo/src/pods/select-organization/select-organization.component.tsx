import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './select-organization.styles';

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectOrganizationComponent: React.FC<Props> = ({
  filter,
  setFilter,
  setOrganization,
}) => {
  const classes = useStyles();

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
