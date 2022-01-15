import BackApi, {actionTypes} from "./BackApi";

export default {
    getStudentProfile(id) {
        return BackApi.performAction(actionTypes.get, `student_profile/${id}`)
    }
}