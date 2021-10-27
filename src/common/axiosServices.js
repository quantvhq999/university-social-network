import axios from "axios";
import Cookies from "js-cookie";
class AxiosServices {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }
    authHeader() {
        const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null
        if (user && user.access_token) {
            return { 'x-access-token' : `${user.access_token}` }
        } else {
            return {}
        }
    }
    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }
    get(url) {
        return this.instance.get(url, { headers: this.authHeader() });
    }

    post(url, body) {
        return this.instance.post(url, body, { headers: this.authHeader() });
    }
    patch(url, body) {
        return this.instance.patch(url, body);
    }

    delete(url) {
        return this.instance.delete(url);
    }
}

export default new AxiosServices