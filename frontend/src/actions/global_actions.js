import globalActionConstants from "../constants/global_constants";
import userActionConstants from "../constants/user_action_constants";
import StudentApi from "../services/StudentApi";
import StudentProfile from "../services/StudentFrofileApi";
import TeacherProfile from "../services/TeacherFrofileApi";
import AllVisits from "../services/AllVisits";
import VisitApi from "../services/VisitApi";
import { message } from 'antd';


export function getStudentInfo(id) {
    return (dispatch) => new Promise((resolve, reject) => {
        dispatch({ type: globalActionConstants.STUDENT_INFO_LOADING })
        StudentApi
            .getStudentInfo(id)
            .then((res) => {
                dispatch({ type: globalActionConstants.STUDENT_INFO_RECEIVED, payload: res.data });
                resolve(res);
            })
            .catch((error) => {
                dispatch({ type: globalActionConstants.STUDENT_INFO_RECEIVED, payload: [] });
                reject(error);
            });
    });
}

export function getStudentProfile(id) {
    return (dispatch) => new Promise((resolve, reject) => {
        dispatch({ type: globalActionConstants.STUDENT_INFO_LOADING });
        StudentProfile
            .getStudentProfile(id)
            .then((res) => {
                dispatch({ type: globalActionConstants.STUDENT_INFO_RECEIVED, payload: res.data });
                resolve(res);
            })
            .catch((error) => {
                dispatch({ type: globalActionConstants.STUDENT_INFO_RECEIVED, payload: [] });
                reject(error);
            });
    });
}

export function getTeacherProfile(id) {
    return (dispatch) => new Promise((resolve, reject) => {
        dispatch({ type: globalActionConstants.STUDENT_INFO_LOADING });
        TeacherProfile
            .getTeacherProfile(id)
            .then((res) => {
                dispatch({ type: globalActionConstants.STUDENT_INFO_RECEIVED, payload: res.data });
                resolve(res);
            })
            .catch((error) => {
                dispatch({ type: globalActionConstants.STUDENT_INFO_RECEIVED, payload: [] });
                reject(error);
            });
    });
}

export function getAllVisits(id) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            dispatch({ type: globalActionConstants.VISITS_INFO_LOADING });
            AllVisits
                .getAllVisits(id)
                .then((res) => {
                    dispatch({ type: globalActionConstants.VISITS_INFO_RECEIVED, payload: res.data });
                    resolve(res);
                })
                .catch((error) => {
                    dispatch({ type: globalActionConstants.VISITS_INFO_RECEIVED, payload: [] });
                    reject(error);
                });
        });
}

export function addVisit(data) {
    console.log(data)
    return () =>
        VisitApi
            .addVisit(data)
            .then(() => {
                message.success({ content: 'Посещение добавлено!', duration: 2 });
            })
            .catch(() => {
                message.error({ content: 'Не удалось добавить', duration: 2 });
            });
}


// export function get_current_user_info() {
//     return (dispatch) =>
//         new Promise((resolve, reject) => {
//             userApi
//                 .manageCurrentUserInfo(actionTypes.get)
//                 .then((response) => {
//                     if (response.data.username === 'AnonymousUser') {
//                         dispatch({ type: globalActionConstants.CLEAR_STATE });
//                     }
//                     dispatch({ type: userActionConstants.USER_INFO_SUCCESS, payload: response.data });
//                     dispatch({ type: userActionConstants.CURRENT_USER_INFO_SUCCESS, user: response.data });
//                     resolve(response);
//                 })
//                 .catch((error) => {
//                     dispatch({ type: userActionConstants.USER_INFO_ERROR, payload: error });
//                     reject(error);
//                 });
//         });
// }

// export function login(username, password) {
//     return (dispatch) => {
//         dispatch({ type: userActionConstants.LOGIN_REQUEST });

//         return userApi
//             .login(username, password)
//             .then((response) => {
//                 const user = response.data;
//                 dispatch({ type: userActionConstants.LOGIN_FINISHED });
//                 dispatch({ type: userActionConstants.CURRENT_USER_INFO_SUCCESS, user });
//                 dispatch({ type: userActionConstants.USER_INFO_SUCCESS, payload: user });
//                 message.success({
//                     content: user.first_name && user.last_name ? `Добро пожаловать, ${user.first_name} ${user.last_name}!` : 'Добро пожаловать!',
//                     duration: 1,
//                 });
//             })
//             .catch((error) => {
//                 const err_text =
//                     error.response && error.response.status === 400
//                         ? 'Невозможно войти с предоставленными учетными данными.'
//                         : 'Ошибка соединения с сервером, пожалуйста, перезагрузите страницу или повторите позднее';
//                 dispatch({ type: userActionConstants.LOGIN_FINISHED });
//                 message.error({ content: err_text, duration: 1 });
//             });
//     };
// }

// export function logout(showLogoutMessage = false, current_user = {}) {
//     return (dispatch) => {
//         const { first_name = 'дорогой Пользователь' } = current_user;
//         if (showLogoutMessage) {
//             message.loading({ content: 'Выходим из системы...', duration: 0, key: 'logout_message' });
//         }

//         resetState();

//         return userApi
//             .logout()
//             .then(() => dispatch(get_current_user_info()))
//             .then(() => {
//                 if (showLogoutMessage) {
//                     setTimeout(() => message.info({ content: `До новых встреч, ${first_name}!`, key: 'logout_message', duration: 1 }), 750);
//                 }
//             })
//             .catch(() => {
//                 if (showLogoutMessage) {
//                     setTimeout(
//                         () => message.error({ content: `Что-то пошло не так. Пожалуйста, обновите страницу...`, key: 'logout_message', duration: 0 }),
//                         750,
//                     );
//                 }
//             });
//     };
// }

// export function register(data) {
//     return (dispatch) => {
//         dispatch({ type: userActionConstants.REGISTER_REQUEST });

//         return new Promise((resolve, reject) => {
//             userApi
//                 .register(data)
//                 .then((response) => {
//                     login(
//                         data.username,
//                         data.password,
//                     )(dispatch).then(() => {
//                         // Automatically logging in after success registration
//                         dispatch({ type: userActionConstants.REGISTER_SUCCESS });
//                         resolve(response);
//                     });
//                 })
//                 .catch((error) => {
//                     const err_text = error.toString();
//                     dispatch({ type: userActionConstants.REGISTER_FAILURE, err_text });
//                     reject(error);
//                 });
//         });
//     };
// }

// export function addVisit(subject_id, data, student_id, teacher_id) {
//     return (dispatch) => {
//         const requested_data = {
//             subject_id,
//             data,
//             student_id,
//             teacher_id
//         };
//         dispatch({ type: globalActionConstants.CREATE_VISIT_LOADING});
//         return new Promise((resolve, reject) => {
//             VisitApi
//                 .addVisit(requested_data)
//                 .then((response) => {
//                     dispatch({type: globalActionConstants.CREATE_VISIT_SECCESS});
//                     message.success({ content: 'Посещение успешно добавлено!', duration: 2 });
//                     resolve(response);
//                 })
//                 .catch((error) => {
//                     const { response = {} } = error;
//                     const { data = {} } = response;
//                     const err_msg = data.message;

//                     let error_message = 'Не удалось добавить посещение';
//                     if (err_msg) {
//                         error_message += ` Причина: ${err_msg}`;
//                     }
//                     dispatch({type: globalActionConstants.CREATE_VISIT_ERROR});
//                     message.error({ content: error_message, duration: 2 });
//                     reject(error);
//                 });
//         });
//     };
// }
