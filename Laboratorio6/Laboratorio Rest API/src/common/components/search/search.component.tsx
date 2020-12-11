import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import * as classes from './search.styles';

interface Props {
  section: string;
  onSearch: () => void;
}

export const SearchComponent: React.FC<Props> = (props) => {
  const { section, onSearch } = props;
  const sectionName = section.toLowerCase()

  return (
    <div className={classes.searchContainer}>
      <Paper component="form" className={classes.root}>
        <InputBase
          id="search-input"
          className={classes.input}
          placeholder={`Search ${sectionName}`}
          inputProps={{ 'aria-label': `search ${sectionName}` }}
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
