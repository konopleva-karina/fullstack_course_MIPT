import BackApi, {actionTypes} from "./BackApi";

export default {
    addVisit(data) {
        return BackApi.performAction(actionTypes.post, `add_visit`, data)
    }
}