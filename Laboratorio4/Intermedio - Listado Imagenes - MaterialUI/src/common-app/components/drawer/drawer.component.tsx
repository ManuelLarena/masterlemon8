import React from 'react';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './drawer.styles';

interface Props extends DrawerProps {
  open: boolean,
  close: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const DrawerComponent: React.FunctionComponent<Props> = ({
  children,
  open,
  close,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Drawer
      open={open}
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      classes={{
        paper: classes.drawerPaper,
      }}
      {...otherProps}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={close}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      {children}
    </Drawer>
  );
};
