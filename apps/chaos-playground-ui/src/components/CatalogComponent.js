import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button, Card, CardContent, CardMedia } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

function CatalogComponent(props) {
  
  return (

    <Grid container spacing={2}>
      {props.products.map((product) => (
        <Grid item key={product.id} xs={6}>
          <Card style={{ height: '100%' }}>
            <CardMedia
              style={{ height: 250, width: '100%', objectFit: 'contain' }}
              image={product.image}
              title={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6">${product.price.toFixed(2)}</Typography>
              <Button variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />} color="primary"  onClick={() => {
                props.handler(product);
              }}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

  );
}

export default CatalogComponent;