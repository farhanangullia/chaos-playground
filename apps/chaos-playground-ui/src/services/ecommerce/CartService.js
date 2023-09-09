import axios from "axios";
import { CART_API_BASE_URL } from "../../config";

class CartService {

    newSession(){
        return axios.post(`${CART_API_BASE_URL}/cart/session`);
    }

    getCart(sessionID){
        return axios.get(`${CART_API_BASE_URL}/cart`, {
            headers: { 'X-Session-ID': { sessionID } }
          });
    }
    
    addToCart(sessionID, product){
        return axios.put(`${CART_API_BASE_URL}/cart`, product, {
            headers: { 'X-Session-ID': { sessionID } }
          });
    }
}

export default new CartService()