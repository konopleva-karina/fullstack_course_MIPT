import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GlobalActions from "../../../actions";
import Avatar from "../../Avatar";
import "./styles.css"
import { Link } from 'react-router-dom';

export const StudentProfile = () => {
    const dispatch = useDispatch();
    const studentInfo = useSelector((state) => state.global.currentStudent);
    const { id } = useParams('/student_profile/:id');

    useEffect(() => {
        dispatch(GlobalActions.getStudentProfile(id));
    }, [id])

    return (
        <div>
            <Avatar />
                <div className="studentInfoBox">
                    <div className="userInfo">{studentInfo?.fio}</div>
                    <div className="additionalInfo">{studentInfo?.group}</div>
                    <div className="additionalInfo">{studentInfo?.subject_name}</div>
                </div>
            <Link to="/start_page"><button className="exitButton">Выйти</button></Link>
        </div>
    );
}
