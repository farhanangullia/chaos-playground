import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, Card, CardContent, CardMedia } from '@mui/material'

function OrderComponent(props) {
  return (
    <>
      {props.orders.length === 0 ? (
        <Typography variant="body2">You have no orders.</Typography>
      ) : (
      <div style={{ overflowY: 'auto', maxHeight: '85vh', width: '100%' }}>
        {props.orders.map((order) => (
          <Paper elevation={3} style={{ padding: 10, marginBottom: 10 }} key={order.id}>
            <Typography variant="subtitle1">Order ID: {order.id}</Typography>
            <Typography variant="body2">Date Created: {order.created_on}</Typography>
            <Typography variant="body2">Total Cost: ${order.total_amount.toFixed(2)}</Typography>
          </Paper>
        ))}
      </div>
    )}
    </>
  );
}

export default OrderComponent;
