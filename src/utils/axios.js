import axios from 'axios';

const instance = axios.create({
    // base URL from firebase emulators:start express test server
    baseURL: 'http://localhost:5001/sc-clone-343d1/us-central1/api',
});


export default instance;