import React from 'react';
import { Kitties } from './kitties-list.vm';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(3),
  },
}));

interface Props {
  kitties: Kitties[];
  onChangeSelection: (kitty: Kitties) => void;
}

export const KittiesListComponent: React.FC<Props> = ({
  kitties,
  onChangeSelection: setKitties,
}) => {
  const classes = useStyles();

  const handleToggle = (kitty: Kitties) => (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setKitties(kitty);
  };

  return (
    <List className={classes.root}>
      {kitties.map(kitty => {
        const labelId = `checkbox-list-secondary-label-${kitty.id}`;
        return (
          <ListItem key={kitty.id} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${kitty.title}`}
                src={`${kitty.picUrl}`}
                className={classes.large}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${kitty.title}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(kitty)}
                checked={kitty.selected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
