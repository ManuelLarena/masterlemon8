import React from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  index: number;
  value: any;
}

export const TabPanelComponent: React.FunctionComponent<Props> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && children}
    </Typography>
  );
};
