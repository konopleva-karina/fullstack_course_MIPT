import BackApi, {actionTypes} from "./BackApi";

export default {
    getTeacherProfile(id) {
        return BackApi.performAction(actionTypes.get, `teacher_profile/${id}`)
    }
}