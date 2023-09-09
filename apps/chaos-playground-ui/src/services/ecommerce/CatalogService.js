import axios from "axios";
import { CATALOG_API_BASE_URL } from "../../config";

class CatalogService {

    getProducts(){
        return axios.get(`${CATALOG_API_BASE_URL}/products`);
    }
}

export default new CatalogService()