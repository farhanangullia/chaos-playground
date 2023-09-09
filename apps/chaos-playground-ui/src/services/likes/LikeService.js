import axios from "axios";
import { LIKE_API_BASE_URL } from "../../config";

class LikeService {

    getLikes(){
        return axios.get(`${LIKE_API_BASE_URL}/like`);
    }
    
    addLike(id){
        return axios.post(`${LIKE_API_BASE_URL}/like`, id);
    }
}

export default new LikeService()