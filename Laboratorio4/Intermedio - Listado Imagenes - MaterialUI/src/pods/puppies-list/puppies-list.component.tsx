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

interface Props {
  puppies: Puppies[];
  onChangeSelection: (puppy: Puppies) => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(3),
  },
}));

export const PuppiesListComponent: React.FC<Props> = ({
  puppies,
  onChangeSelection: setPuppies,
}) => {
  const classes = useStyles();

  const handleToggle = (puppy: Puppies) => (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setPuppies(puppy);
  };

  return (
    <List className={classes.root}>
      {puppies.map(puppy => {
        const labelId = `checkbox-list-secondary-label-${puppy.id}`;
        return (
          <ListItem
            key={puppy.id}
            role={undefined}
            button
            onClick={handleToggle(puppy)}
          >
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
                checked={puppy.selected}
                tabIndex={-1}
                disableRipple
                color="primary"
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
