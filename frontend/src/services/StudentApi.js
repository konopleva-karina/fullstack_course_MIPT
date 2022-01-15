import BackApi, {actionTypes} from "./BackApi";

export default {
    getStudentInfo(id) {
        return BackApi.performAction(actionTypes.get, `student/${id}`)
    }
}