import BackApi, {actionTypes} from "./BackApi";

export default {
    getAllVisits(student_id) {
        return BackApi.performAction(actionTypes.get, `student_visits/${student_id}`)
    }
}