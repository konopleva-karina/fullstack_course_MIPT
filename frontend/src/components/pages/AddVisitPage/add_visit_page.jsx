import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GlobalActions from "../../../actions";
import "./styles.css"
import List from "../../List";

export const AddVisitPage = () => {
    const dispatch = useDispatch();
    const studentInfo = useSelector((state) => state.global.currentStudent);
    const { id } = useParams('/student/:id');

    const visits_json = useSelector((state) => state.global.visits);


    useEffect(() => {
        if (id) {
            dispatch(GlobalActions.getStudentInfo(id));
            dispatch(GlobalActions.getAllVisits(id));
        }
    }, [dispatch, id])

    return (
        <div className="mainStudentBox">
            <div>{studentInfo?.fio}</div>
            <div>
                <span className="text">Количество посещений: &nbsp; {studentInfo?.visits_count}</span>
            </div>

            <div className="visitInfo">
                <div className="table">
                    <List visits={Array.from(visits_json)} />
                </div>
            </div>
        </div>
    );
}