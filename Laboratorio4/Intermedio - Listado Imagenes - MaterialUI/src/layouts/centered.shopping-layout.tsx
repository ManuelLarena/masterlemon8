import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    maxWidth: '100%',
    padding: theme.spacing(4, 0, 4, 0),
  },
}));

export const CenteredShoppingLayout: React.FunctionComponent = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {children}
      </Grid>
    </>
  );
};
