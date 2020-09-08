import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { StyledTableCell, StyledTableRow, useStyles } from './checkout.styles';
import { Selection } from 'core/shopping-cart.context';

interface Props {
  shoppingCart: Selection[];
  onBack: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  toBuy: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  subtotal: number;
  TAXRATE: number;
  total: number;
  taxes: number;
}

const ccyFormat = (num: number): string => `${num.toFixed(2)}`;

export const CheckoutComponent: React.FC<Props> = ({
  shoppingCart,
  onBack,
  toBuy,
  subtotal,
  TAXRATE,
  taxes,
  total
}) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={3}>Details</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingCart.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell colSpan={3}>
                  <Avatar
                    alt={`Avatar n°${row.title}`}
                    src={`${row.picUrl}`}
                    className={classes.large}
                  />
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {ccyFormat(row.price)}€
                </StyledTableCell>
              </StyledTableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2} className={classes.tableFooter}>
                Subtotal
              </TableCell>
              <TableCell align="right">{ccyFormat(subtotal)}€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableFooter}>Tax</TableCell>
              <TableCell align="right">{`${(TAXRATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(taxes)}€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className={classes.tableFooter}>
                Total
              </TableCell>
              <TableCell align="right">{ccyFormat(total)}€</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className={classes.btnWrapper}>
          <Button
            variant="contained"
            disableElevation
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
            color="primary"
            className={classes.btn}
          >
            Return
          </Button>
          <Button
            variant="contained"
            disableElevation
            endIcon={<AssignmentTurnedInIcon />}
            onClick={toBuy}
            color="primary"
            className={classes.btn}
          >
            Purchase
          </Button>
        </div>
      </Paper>
    </>
  );
};
