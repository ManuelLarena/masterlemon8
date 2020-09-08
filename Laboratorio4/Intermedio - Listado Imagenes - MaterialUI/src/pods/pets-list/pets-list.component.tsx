import React from 'react';
import { PuppiesListContainer } from 'pods/puppies-list';
import { KittiesListContainer } from 'pods/kitties-list';
import { ShoppingCart } from 'pods/shopping-cart';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { DrawerComponent } from 'common-app/components';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import { useStyles } from './pets-list.styles';

interface Props {
  isOpen: boolean;
  drawerOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  drawerClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const PetsListComponent: React.FC<Props> = ({
  isOpen,
  drawerOpen,
  drawerClose
}) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <TabListComponent
          value={tab}
          onChange={setTab}
          aria-label="Pets list"
          centered
        >
          <TabComponent
            label="Kitties"
            index={0}
            className={classes.tabButton}
          />
          <TabComponent
            label="Puppies"
            index={1}
            aria-controls="tabpanel-1"
            className={classes.tabButton}
          />
        </TabListComponent>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={drawerOpen}
          className={clsx(classes.iconBar, { [classes.hide]: isOpen })}
        >
          <ShoppingCartIcon />
        </IconButton>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        <TabPanelComponent value={tab} index={0}>
          <KittiesListContainer />
        </TabPanelComponent>
        <TabPanelComponent value={tab} index={1}>
          <PuppiesListContainer />
        </TabPanelComponent>
      </main>
      <DrawerComponent open={isOpen} close={drawerClose}>
        <ShoppingCart />
      </DrawerComponent>
    </div>
  );
};
