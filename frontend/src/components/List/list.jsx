import React from "react";
import ListItem from "../ListItem";
import "./styles.css"

export const List = ({ visits }) => {

    return (
        <div>
            <table className="visitsInfo">
                <caption>Информация о посещениях</caption>
                <thead className="caption">
                    <tr>
                        <th>Дата</th>
                        <th>ФИО Преподавателя</th>
                        <th>Телефон для связи</th>
                        <th>Почта для связи</th>
                    </tr>
                </thead>
                <tbody>
                {visits.map(visit => (
                    <ListItem key={visit.id} visit={visit} />))}
                </tbody>
            </table>
        </div>
    );
}