import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentMainPage from "./pages/StudentMainPage";
import StudentProfile from "./pages/StudentProfile";
import TeacherProfile from "./pages/TeacherProfile";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import NavBar from "./NavBar";
import Home from "./pages/Home"
import BackgroundAuthorization from "./BackgroundAuthorization";
import TeacherMainPage from "./pages/TeacherMainPage";
import 'bootstrap/dist/css/bootstrap.css'

import 'antd/dist/antd.css';

const loggerMiddleware = createLogger();

const reduxMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware);

const store = createStore(rootReducer, reduxMiddleware);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/start_page" element={<BackgroundAuthorization />} />
            <Route path="/student/:id" element={<StudentMainPage />} />
            <Route path="/teacher/:id" element={<TeacherMainPage />} />
            <Route path="/student_profile/:id" element={<StudentProfile />} />
            <Route path="/teacher_profile/:id" element={<TeacherProfile />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
