import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material'
import CatalogComponent from '../components/CatalogComponent';
import ShoppingCartComponent from '../components/ShoppingCartComponent';
import OrderComponent from '../components/OrderComponent';
import CatalogService from '../services/ecommerce/CatalogService';
import CartService from '../services/ecommerce/CartService';
import OrderService from '../services/ecommerce/OrderService';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function ECommercePage() {
    const [sessionID, setSessionID] = useState('');
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [openAlert, setOpenAlert] = useState(false);
    const [latestAlert, setLatestAlert] = useState({});

    const newAlert = (sev, msg) => {
        setLatestAlert({ severity: sev, message: msg })
        setOpenAlert(true);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    const fetchProducts = () => {
        CatalogService.getProducts()
            .then(response => setProducts(response.data.products))
            .catch(error => console.error('Error fetching products:', error));
    }

    const fetchCartItems = () => {
        CartService.getCart(sessionID)
            .then(response => setCartItems(response.data.items))
            .catch(error => console.error('Error fetching cart:', error));
    }

    const fetchOrders = () => {
        OrderService.getOrders(sessionID)
            .then(response => setOrders(response.data.orders))
            .catch(error => console.error('Error fetching orders:', error));
    }

    const addToCart = (product) => {
        CartService.addToCart(sessionID, product)
            .then(() => {
                fetchCartItems();
            })
            .catch(error => console.error('Error adding to cart:', error));
    }

    const checkout = (address, country) => {
        OrderService.checkout(sessionID, address, country)
            .then((response) => {
                console.log('Order placed successfully');
                console.log(response.data.shipping_tracking_id);
                newAlert("success", `Order successfully created with Shipping Tracking ID: ${response.data.shipping_tracking_id}`)
                fetchCartItems();
                fetchOrders();
            })
            .catch(error => {
                console.error('Error during checkout:', error);
            });
    };

    useEffect(() => {
        // Check if a session ID is stored in cookies
        const storedSessionID = document.cookie.replace(
            /(?:(?:^|.*;\s*)sessionID\s*=\s*([^;]*).*$)|^.*$/,
            '$1'
        );
        if (!storedSessionID) {
            // Generate a new session ID on the server and set it in cookies
            CartService.newSession()
                .then(response => {
                    setSessionID(response.headers['x-session-id']);
                    document.cookie = `sessionID=${response.headers['x-session-id']}`;
                })
                .catch(error => console.error('Error generating session ID:', error));
        } else {
            setSessionID(storedSessionID);
        }

        if (storedSessionID) {
            setSessionID(storedSessionID);
        }

        fetchProducts();
        fetchCartItems();
        fetchOrders();
    }, []);

    return (
        <Grid container spacing={2} style={{ marginTop: '5px', height: '100%' }} justifyContent="center">
            <Grid item xs={4}>
                <Paper style={{ borderRadius: '20px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', padding: 20, height: '100%' }}>
                    <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                        Catalog
                    </Typography>
                    <CatalogComponent products={products} handler={addToCart}></CatalogComponent>
                </Paper>
            </Grid>

            <Grid item xs={2}>
                <Paper style={{ borderRadius: '20px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                        Cart
                    </Typography>
                    <ShoppingCartComponent cart={cartItems} handler={checkout}></ShoppingCartComponent>
                </Paper>
            </Grid>


            <Grid item xs={4}>
                <Paper style={{ borderRadius: '20px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                        My Orders
                    </Typography>
                    <OrderComponent orders={orders}></OrderComponent>

                </Paper>
            </Grid>
            <Snackbar open={openAlert} autoHideDuration={10000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={latestAlert.severity} sx={{ width: '100%' }}>
                    {latestAlert.message}
                </Alert>
            </Snackbar>
        </Grid>

    )
}

export default ECommercePage;