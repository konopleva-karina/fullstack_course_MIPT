// import React, { useCallback, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import GlobalActions from "../../../actions";
// // import Toast from 'react-bootstrap/Toast';
// // import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';
// import { Input, Form, Select, Button, Modal } from 'antd';
// import moment from "moment";

// import "./styles.css"


// export const ModalWindow = ({ visible, setVisible = () => { }, eventId = undefined }) => {
//     const [form] = Form.useForm();
//     const dispatch = useDispatch();

//     const onFinish = useCallback(
//         ({ subject_id, data, student_id, teacher_id }) => {
//             console.log({ subject_id, data, student_id, teacher_id });
//             dispatch(GlobalActions.addVisit({ subject_id, data, student_id, teacher_id }));
//             setVisible(false);
//         },
//         [dispatch, setVisible],
//     );


//     return (
//         <div>
//         <Modal
//             style={{ minWidth: '20vw', zIndex: '10' }}
//             bodyStyle={{ minHeight: '45vh', overflowY: 'auto' }}
//             title="Ввод данных"
            
//             visible={visible}
//             onCancel={() => setVisible(false)}>
//                 footer={null}

//             <Form className="add-visit-form"
//                 onFinish={onFinish}
//                 form={form}
//                 preserve={false}
//                 initialValues={{
//                     subject_id: undefined,
//                     data: moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"),
//                     student_id: undefined,
//                     teacher_id: undefined
//                 }}

//             >
//                 <Button variant="primary" className="teacher_button" >Проставить посещение</Button>

//                 <div>
//                     <Form.Item name="subject_id" label="Номер предмета">
//                         <Input autoComplete="false" autoFocus />
//                     </Form.Item>
//                     <Form.Item name="data" label="Дата">
//                         <Input autoComplete="false" autoFocus />
//                     </Form.Item>
//                     <Form.Item name="student_id" label="Номер студента">
//                         <Input autoComplete="false" autoFocus />
//                     </Form.Item>
//                     <Form.Item name="teacher_id" label="Номер преподавателя">
//                         <Input autoComplete="false" autoFocus />
//                     </Form.Item>
//                 </div>
//                 {/* <Button variant="secondary" onClick={handleClose}>
//                     Закрыть
//                 </Button> */}
//                 <Button variant="primary" htmlType="submit">
//                     Подтвердить
//                 </Button>
//             </Form>
//         </Modal>
//         </div>
//     );
// } 

import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import GlobalActions from "../../../actions";
// import Toast from 'react-bootstrap/Toast';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Input, Form, Select, Button, Modal } from 'antd';
import moment from "moment";

import "./styles.css"


export const ModalWindow = ({ visible, setVisible = () => { } }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = useCallback(
        (data) => {
            console.log(data);
            dispatch(GlobalActions.addVisit(data)).then( () => setVisible(false));
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
                onFinish={onFinish}
                form={form}
                preserve={false}
                initialValues={{
                    subject_id: undefined,
                    data: moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"),
                    student_id: undefined,
                    teacher_id: undefined
                }}

            >

                    <Form.Item name="subject_id" label="Номер предмета">
                        <Input autoComplete="false" autoFocus />
                    </Form.Item>
                    <Form.Item name="data" label="Дата">
                        <Input autoComplete="false" autoFocus />
                    </Form.Item>
                    <Form.Item name="student_id" label="Номер студента">
                        <Input autoComplete="false" autoFocus />
                    </Form.Item>
                    <Form.Item name="teacher_id" label="Номер преподавателя">
                        <Input autoComplete="false" autoFocus />
                    </Form.Item>
            
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Готово
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
} 