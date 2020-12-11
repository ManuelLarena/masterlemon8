import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { CharacterCollectionContainer } from './../character-collection/character-collection.container';
import { EpisodeCollectionContainer } from './../episode-collection/episode-collection.container';
import { LocationCollectionContainer } from './../location-collection/location-collection.container';
import AppBar from '@material-ui/core/AppBar';
import * as classes from './rickandmorty.styles';

export const RickAndMortyComponent: React.FC = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <TabListComponent
          value={tab}
          onChange={setTab}
          aria-label="Rick and Morty"
          centered
        >
          <TabComponent
            label="Characters"
            index={0}
            className={classes.tabButton}
          />
          <TabComponent
            label="Locations"
            index={1}
            aria-controls="tabpanel-1"
            className={classes.tabButton}
          />
          <TabComponent
            label="Episodes"
            index={1}
            aria-controls="tabpanel-2"
            className={classes.tabButton}
          />
        </TabListComponent>
      </AppBar>
      <main className={classes.content}>
        <TabPanelComponent value={tab} index={0}>
          <CharacterCollectionContainer />
        </TabPanelComponent>
        <TabPanelComponent value={tab} index={1}>
          <LocationCollectionContainer />
        </TabPanelComponent>
        <TabPanelComponent value={tab} index={2}>
          <EpisodeCollectionContainer />
        </TabPanelComponent>
      </main>
    </div>
  );
};
