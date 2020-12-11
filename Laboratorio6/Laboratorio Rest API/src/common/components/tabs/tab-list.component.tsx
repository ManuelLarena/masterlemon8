import React from 'react';
import Tabs, { TabsProps } from '@material-ui/core/Tabs';

interface Props extends Omit<TabsProps, 'onChange'> {
  value: number;
  onChange: (value: number) => void;
}

export const TabListComponent: React.FunctionComponent<Props> = ({
  value,
  onChange,
  ...otherProps
}) => {
  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    onChange(value);
  };

  return <Tabs {...otherProps} onChange={handleChange} value={value} />;
};
