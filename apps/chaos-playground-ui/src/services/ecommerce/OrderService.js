import axios from "axios";
import { ORDER_API_BASE_URL } from "../../config";

class OrderService {

    checkout(sessionID, address, country){
        let requestBody = {
            shippingDetails: {
                address: address,
                country: country
            }
        }
        return axios.post(`${ORDER_API_BASE_URL}/checkout`, requestBody, {
            headers: { 'X-Session-ID': { sessionID } }
          });
    }

    getOrders(sessionID){
        return axios.get(`${ORDER_API_BASE_URL}/orders`, {
            headers: { 'X-Session-ID': { sessionID } }
          });
    }
}

export default new OrderService()