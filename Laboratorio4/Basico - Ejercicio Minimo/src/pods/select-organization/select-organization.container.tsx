import React from 'react';
import { SelectOrganizationComponent } from './select-organization.component';

interface Props {
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectOrganizationContainer: React.FC<Props> = ({ setOrganization }) => {
  const [filter, setFilter] = React.useState('lemoncode');

  return (
    <>
      <SelectOrganizationComponent
        filter={filter}
        setFilter={setFilter}
        setOrganization={setOrganization}
      />
    </>
  );
};
