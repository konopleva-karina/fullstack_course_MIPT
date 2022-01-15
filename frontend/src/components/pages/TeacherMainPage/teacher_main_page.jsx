// import React, { useCallback, useState } from "react";
// import { useDispatch } from 'react-redux';
// import GlobalActions from "./../../../actions";
// import { ReactComponent as StatusPic } from "./status.svg"
// import { ReactComponent as AddVisitPic } from "./addVisit.svg"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import moment from "moment";
// // import ModalWindow from "../ModalWindow"

// import "./styles.css"


// export const TeacherMainPage = () => {
//     // const [showCreateEvent, setShowCreateEvent] = useState(false);
//     // const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


//     const dispatch = useDispatch();

//     const onFinish = useCallback(
//         ({ subject_id, data, student_id, teacher_id }) => {
//             console.log({ subject_id, data, student_id, teacher_id });
//             dispatch(GlobalActions.addVisit({ subject_id, data, student_id, teacher_id }));
//         },
//         [dispatch],
//     );

//     // state = {
//     //     subject_id: "",
//     //     data: "",
//     //     student_id: "",
//     //     teacher_id: ""
//     // };

//     return (
//         <div id="teacherAPI">
//             <div className="item status">
//                 <AddVisitPic />
//                 <button className="teacher_button">Проверить статус студента</button>
//             </div>

//             <div className="item addVisit">
//                 <StatusPic />
//                 <Button variant="primary" onClick={handleShow}>
//                     Launch demo modal
//                 </Button>
//                 <Modal show={show} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Ввод данных</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <div>
//                             <Form onSubmit={onFinish}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Номер предмета</Form.Label>
//                                     <Form.Control
//                                         // value={this.state.subject_id}
//                                         // onChange={e => this.setState({ val: e.target.value })} 
//                                         />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" >
//                                     <Form.Label>Дата</Form.Label>
//                                     <Form.Control 
//                                     placeholder={moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")} 
//                                     // value={this.state.data}
//                                     // onChange={e => this.setState({ val: e.target.value })}
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" >
//                                     <Form.Label>Номер студента</Form.Label>
//                                     <Form.Control 
//                                     // value={this.state.student_id}
//                                     // onChange={e => this.setState({ val: e.target.value })}
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" >
//                                     <Form.Label>Номер преподавателя</Form.Label>
//                                     <Form.Control 
//                                     // value={this.state.teacher_id}
//                                     // onChange={e => this.setState({ val: e.target.value })}
//                                     />
//                                 </Form.Group>

//                                 <Button variant="primary" type="submit">
//                                     Подтвердить
//                                 </Button>
//                             </Form>
//                         </div>
//                     </Modal.Body>
//                 </Modal>
//                 {/* <ModalWindow visible={showCreateEvent} setVisible={setShowCreateEvent}/> */}
//             </div>
//         </div>
//     );
// } 

import React, { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import GlobalActions from "./../../../actions";
import { ReactComponent as StatusPic } from "./status.svg"
import { ReactComponent as AddVisitPic } from "./addVisit.svg";
// import ModalWindow from "../ModalWindow"

import "./styles.css"
import ModalWindow from "../ModalWindow";


export const TeacherMainPage = () => {

    const dispatch = useDispatch();
    const [showCreateEvent, setShowCreateEvent] = useState(false);


    return (
        <>
        <ModalWindow visible={showCreateEvent} setVisible={setShowCreateEvent} />
            
        <div id="teacherAPI">
            <div className="item status">
                <AddVisitPic />
                <button className="teacher_button">Проверить статус студента</button>
            </div>

            <div className="item addVisit">
            
                <StatusPic />
                
                <button className="teacher_button" onClick={setShowCreateEvent}>Проверить статус студента</button>

        </div>
        </div >
        </>
    );
} 