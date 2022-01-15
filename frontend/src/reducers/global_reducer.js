import globalActionConstants from "../constants/global_constants";

const initialState = {
    currentStudentLoading: false,
    currentStudent: {},

    currentVisitLoading: false,
    visits: [],

    currentTeacherLoading: false,
    currentTeacher: {},


    create_visit_processing: false,
    create_visit_success: true
}

export function global(state = initialState, action) {
    switch (action.type) {
        case globalActionConstants.STUDENT_INFO_LOADING:
            console.log(action.payload, "get");
            return { ...state, currentStudentLoading: true };
        case globalActionConstants.STUDENT_INFO_RECEIVED:
            console.log(action.payload, "get");
            return { ...state, currentStudentLoading: false, currentStudent: action.payload};
        
        case globalActionConstants.VISITS_INFO_LOADING:
            console.log(action.payload, "get");
            return { ...state, currentVisitLoading: true };
        case globalActionConstants.VISITS_INFO_RECEIVED:
            console.log(action.payload, "get");
            return { ...state, currentVisitLoading: false, visits: action.payload};

        case globalActionConstants.CREATE_VISIT_LOADING:
            return { ...state, create_visit_processing: true };
        case globalActionConstants.CREATE_VISIT_SECCESS:
            return { ...state, create_visit_processing: false, create_visit_success: true};
        case globalActionConstants.CREATE_VISIT_ERROR:
            return { ...state, create_visit_processing: false, create_visit_success: false};

        default:
            return state;
    }
}