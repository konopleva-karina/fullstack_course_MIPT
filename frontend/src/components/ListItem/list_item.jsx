import React, { useEffect } from "react";
import "./styles.css"
import moment from "moment";
export const ListItem = ({visit}) => {
    const {student_id, data, teacher_name, teacher_phone, teacher_mail} = visit;

    return (
        <tr>
            <td>{moment({data}).format("YYYY-MM-DD")}</td>
            <td>{teacher_name}</td>
            <td>{teacher_phone}</td>
            <td>{teacher_mail}</td>
        </tr>
    );
}