import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GlobalActions from "../../../actions";
import Avatar from "../../Avatar";
import "./styles.css"
import { Link } from 'react-router-dom';


export const TeacherProfile = () => {
    const dispatch = useDispatch();
    const teacherInfo = useSelector((state) => state.global.currentStudent);
    const { id } = useParams('/teacher_profile/:id');

    useEffect(() => {
        dispatch(GlobalActions.getTeacherProfile(id));
    }, [id])

    return (
        <div>
            <Avatar />
            <div className="contentBox">
                <div className="studentInfoBox">
                    <div className="userInfo">{teacherInfo?.fio}</div>
                </div>
            </div>
            <Link to="/start_page"><button className="exitButton" id="teacherExitButton">Выйти</button></Link>
        </div>
    );
}
