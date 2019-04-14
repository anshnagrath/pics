import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:"Client-ID ca83915ba196aa851cbd9d9e54b777093176d2c9c49ae40640d5ffb39388aa38"
        }
    


})

