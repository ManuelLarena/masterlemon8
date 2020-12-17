import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { EpisodeEntityVm } from './../episode-collection.vm';
import * as classes from './episode-card.styles';

interface Props {
  episode: EpisodeEntityVm;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode } = props;

  return (
    <Card className={classes.card}>
      <CardHeader title={episode.name} subheader={episode.episode} />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="subtitle2" align="left" color="textSecondary">
            {episode.created}
          </Typography>
          <Typography variant="subtitle1" align="left" color="textPrimary">
            {episode.airDate}
          </Typography>
          <Typography variant="h6" align="left" color="textPrimary">
            Characters:
          </Typography>
          <List dense>
            {episode.characters.map((character) => {
              return (
                <ListItem key={character.id}>
                  <ListItemAvatar>
                    <Avatar alt={character.name} src={character.picture} />
                  </ListItemAvatar>
                  <ListItemText id={character.id} primary={character.name} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </CardContent>
    </Card>
  );
};
