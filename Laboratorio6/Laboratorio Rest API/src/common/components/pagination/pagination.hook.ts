import * as React from 'react';

export const usePagination = (totalPages: number) => {
  const firstPage = 1;
  const lastPage = totalPages;
  const [page, setPage] = React.useState<number>(firstPage);
  const [isFirstPage, setFirstPage] = React.useState<boolean>(true);
  const [isLastPage, setLastPage] = React.useState<boolean>(false);

  const handleFirstPage = () => {
    setFirstPage(true);
    setLastPage(false);
    setPage(firstPage);
  };

  const handlePrevPage = () => {
    let numPage: number = page;
    setPage(--numPage);
    console.log(page);
    if (numPage > firstPage) {
      setFirstPage(false);
      setLastPage(false);
    } else {
      setFirstPage(true);
    }
  };

  const handleLastPage = () => {
    setFirstPage(false);
    setLastPage(true);
    setPage(lastPage);
  };

  const handleNextPage = () => {
    let numPage: number = page;
    setPage(++numPage);
    console.log(page);
    if (numPage < lastPage) {
      setLastPage(false);
      setFirstPage(false);
    } else {
      setLastPage(true);
    }
  };

  return {
    page,
    isFirstPage,
    isLastPage,
    setLastPage,
    handleFirstPage,
    handlePrevPage,
    handleLastPage,
    handleNextPage
  };
};
