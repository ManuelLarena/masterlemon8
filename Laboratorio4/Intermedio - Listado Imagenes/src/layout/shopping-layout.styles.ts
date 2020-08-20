import { css } from 'emotion';

export const container = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0;
  grid-template-areas: 'leftColumn rightColumn';

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 0.5rem 0.5rem;
    grid-template-areas: 'leftColumn rightColumn';
  }
`;

export const leftColumn = css``;

export const rightColumn = css``;
