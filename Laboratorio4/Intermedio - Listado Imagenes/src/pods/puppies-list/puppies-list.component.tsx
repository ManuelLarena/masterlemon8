import React from 'react';
import { Puppies } from './puppies-list.vm';
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
  puppies: Puppies[];
  onChangeSelection: (puppy: Puppies) => void;
}

export const PuppiesListComponent: React.FC<Props> = ({
  puppies,
  onChangeSelection: setPuppies,
}) => {
  const classes = useStyles();

  const handleToggle = (puppy: Puppies) => (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setPuppies(puppy);
  };

  return (
    <List className={classes.root}>
      {puppies.map(puppy => {
        const labelId = `checkbox-list-secondary-label-${puppy.id}`;
        return (
          <ListItem key={puppy.id} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${puppy.title}`}
                src={`${puppy.picUrl}`}
                className={classes.large}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${puppy.title}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(puppy)}
                checked={puppy.selected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
