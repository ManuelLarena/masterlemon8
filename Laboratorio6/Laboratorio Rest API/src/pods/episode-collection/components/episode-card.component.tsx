import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import { EpisodeEntityVm } from '../episode-collection.vm';
import * as classes from './episode-card.styles';

interface Props {
  episode: EpisodeEntityVm;
  onReview: (id: string) => void;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode, onReview } = props;

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
            {episode.charactersUrl.map((characterUrl) => {
              const characterNum: string[] = characterUrl.split('/').reverse();
              const [number, ...restElements] = characterNum;
              return (
                <ListItem key={number}>
                  <Link component="button" variant="body2" onClick={() => onReview(number)}>
                    Personaje-{number}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </div>
      </CardContent>
    </Card>
  );
};
