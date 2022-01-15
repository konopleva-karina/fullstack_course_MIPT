import BackApi, {actionTypes} from "./BackApi";

export default {

login(username, password) {
    return BackApi.performAction(actionTypes.post, `accounts/login`, { username, password });
},

logout() {
    return BackApi.performAction(actionTypes.get, `accounts/logout`);
},

register(data) {
    return BackApi.performAction(actionTypes.post, `accounts/profile/add`, data);
}
}
