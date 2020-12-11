import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import * as classes from './location-search.styles';

interface Props {
  onSearch: () => void;
}

export const LocationSearch: React.FC<Props> = (props) => {
  const { onSearch } = props;

  return (
    <div className={classes.serachContainer}>
      <Paper component="form" className={classes.root}>
        <InputBase
          id="search-input"
          className={classes.input}
          placeholder="Search Location"
          inputProps={{ 'aria-label': 'search location' }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          onClick={onSearch}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};
