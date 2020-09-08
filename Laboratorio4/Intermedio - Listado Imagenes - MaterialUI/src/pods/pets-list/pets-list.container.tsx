import React from 'react';
import { PetsListComponent } from './pets-list.component';

export const PetsListContainer: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setOpen(true);
  };
  const handleDrawerClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setOpen(false);
  };

  return (
    <>
      <PetsListComponent
        isOpen={open}
        drawerOpen={handleDrawerOpen}
        drawerClose={handleDrawerClose}
      />
    </>
  );
};
