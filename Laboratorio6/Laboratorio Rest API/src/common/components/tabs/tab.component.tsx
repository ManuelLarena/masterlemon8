import * as React from 'react';
import Tab, { TabProps } from '@material-ui/core/Tab';

interface Props extends TabProps {
  index: number;
}

export const TabComponent: React.FunctionComponent<Props> = ({
  index,
  ...otherProps
}) => {
  return (
    <Tab
      id={`tab-${index}`}
      aria-controls={`tabpanel-${index}`}
      {...otherProps}
    />
  );
};
