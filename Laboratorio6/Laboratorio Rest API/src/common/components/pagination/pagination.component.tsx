import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import * as classes from './pagination.styles';

interface Props {
  page: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  onFirstPage: () => void;
  onLastPage: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  isFirstPage,
  isLastPage,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPrevPage,
}) => {

  return (
    <div className={classes.pagination}>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        className={classes.text}
      >
        Page {page} of {totalPages}
      </Typography>
      <ButtonGroup
        variant="outlined"
        color="primary"
        size="medium"
        className={classes.controls}
      >
        <Button
          aria-label="first page"
          disabled={isFirstPage}
          onClick={onFirstPage}
        >
          <FirstPageIcon />
        </Button>
        <Button
          aria-label="previous page"
          disabled={isFirstPage}
          onClick={onPrevPage}
        >
          <NavigateBeforeIcon />
        </Button>
        <Button
          aria-label="next page"
          disabled={isLastPage}
          onClick={onNextPage}
        >
          <NavigateNextIcon />
        </Button>
        <Button
          aria-label="last page"
          disabled={isLastPage}
          onClick={onLastPage}
        >
          <LastPageIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};
