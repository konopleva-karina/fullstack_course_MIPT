import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import GlobalActions from "../../../actions";
import { Input, Form, Button, Modal } from 'antd';


import "./styles.css"


export const SearchStudentForm = ({ visible, setVisible = () => { }}) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const studentInfo = useSelector((state) => state.global.currentStudent);

    const onFinishAddVisit = useCallback(
        (data) => {
            console.log(data)
            dispatch(GlobalActions.getStudentInfo(data["student_fio"]));
            dispatch(GlobalActions.getAllVisits(data));
        },
        [dispatch, setVisible],
    );

    return (
        <Modal
            style={{ minWidth: '20vw', zIndex: '10' }}
            bodyStyle={{ minHeight: '45vh', overflowY: 'auto' }}
            title="Ввод данных"
            
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={null}>

            <Form className="add-visit-form"
                onFinish={onFinishAddVisit}
                form={form}
                preserve={false}
                initialValues={{
                    student_fio: undefined,
                }}

            >
                    <Form.Item name="student_fio" label="ФИО студента">
                        <Input autoComplete="false" autoFocus />
                    </Form.Item>
            
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Готово
                    </Button>

                    <div style={{top: "5vh", left:"0", position: "relative"}}><i>Количество посещений: {studentInfo?.visits_count}</i></div>
                </Form.Item>
            </Form>
        </Modal>
    );
} 