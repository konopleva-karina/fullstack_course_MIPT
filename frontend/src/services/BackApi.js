import axios from 'axios';
import { baseUrl } from '../config';

export const actionTypes = {
    get: 'GET',
    post: 'POST',
    delete: 'DELETE',
    patch: 'PATCH',
}

const getApiUrl = (additionalUrl) => baseUrl + '/api/' + additionalUrl;

export default {
    performAction(action, url, data = {}) {
        return axios({
            method: action,
            url: getApiUrl(url),
            data: data
        })
    }
}


