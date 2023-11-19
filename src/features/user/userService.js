import axios from 'axios';
import { base_url} from '../../Utils/base_url';

const register = async(userData) => {
    const response = await axios.post(`${base_url}user/signup`, userData);
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};


const authService = {
    register,
};
export default authService;