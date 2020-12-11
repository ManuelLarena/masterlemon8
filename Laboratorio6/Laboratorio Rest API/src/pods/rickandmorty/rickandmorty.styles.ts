import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: ${theme.palette.background.paper};
`;

export const tabButton = css`
  padding: 1rem 2rem;
`;

export const appBar = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const content = css`
  flex-grow: 1;
  padding: calc(2rem + 56px) 2rem 2rem;
`;
