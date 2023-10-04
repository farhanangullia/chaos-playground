import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button, Card, CardContent, CardMedia } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ShoppingCartComponent(props) {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckout = () => {
    handleClose();
    props.handler(address, country);
  };

  return (
    <>
      {props.cart.length === 0 ? (
        <Typography variant="body2">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {props.cart.map((cartItem) => (
            <Grid item key={cartItem.id} xs={12}>
              <Paper elevation={3} style={{ padding: 10, display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="subtitle1">{cartItem.name}</Typography>
                  <Typography variant="body2">Quantity: {cartItem.count}</Typography>
                  <Typography variant="body2">Price: ${cartItem.price.toFixed(2)}</Typography>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
      {props.cart.length > 0 && (

        <div style={{ marginBottom: 'auto', textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>Total: ${props.cart.reduce((total, cartItem) => total + cartItem.price * cartItem.count, 0).toFixed(2)}</Typography>
          <Button variant="outlined" color="primary" startIcon={<ShoppingCartCheckoutIcon />} onClick={() => {
            handleClickOpen()
          }}>
            Checkout
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirm Checkout</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your shipping details.
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="normal"
                id="address"
                label="Address"
                helperText="Your shipping address"
                onChange={e => {
                  setAddress(e.target.value)
                }}
                variant="standard"
              />
              <TextField
                required
                margin="normal"
                id="country"
                label="Country"
                helperText="Your country"
                onChange={e => {
                  setCountry(e.target.value)
                }}
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleCheckout}>Checkout</Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
}

export default ShoppingCartComponent;
