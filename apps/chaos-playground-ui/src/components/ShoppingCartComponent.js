import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button, Card, CardContent, CardMedia } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function ShoppingCartComponent(props) {

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
            props.handler();
          }}>
            Checkout
          </Button>
        </div>
      )}
    </>
  );
}

export default ShoppingCartComponent;
