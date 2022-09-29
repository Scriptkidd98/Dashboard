import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstraps/dist/css/bootstrap.css';
import waiting from './Images/waiting.png';
import dashboard from './Images/dashboard.png';
import schedule from './Images/schedule.png';
import patients from './Images/patients.png';
import notes from './Images/notes.png';
import chats from './Images/chats.png';
import logo from './Images/logo.png';
import person from './Images/pana.png';
import settings from './Images/settings.png';
import notification from './Images/notification.png';
import eye from './Images/eye.png';
import calendarimage from './Images/calendar.png';
import bluebell from './Images/blue-bell.png';
import threedots from './Images/three-dots.png';
import arrowdownblue from './Images/arrow-down-blue.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


function Schedule() {
    const [value, onChange] = useState(new Date());
    return(
        <div className='body'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={2} className="dashboard-navigation">
                        <div className=''></div>
                        <div className='logo-div'><img src={logo} alt="Logo"></img><span className='logo-text'>Health Lite</span></div>
                        <div className='navigation-links'>
                            <div className='navigation-link'>
                                <div className='navigation-link-inner'>
                                    <img src={dashboard} alt="User" className='nav-image'></img><span>Dashboard</span>
                                </div>
                            </div>
                            <div className='navigation-link'>
                                <div className='navigation-link-inner'>
                                    <img src={waiting} alt="User" className='nav-image'></img><span>Waiting Room</span>
                                </div>
                            </div>
                            <div className='navigation-link active'>
                                <div className='navigation-link-inner'>
                                    <img src={schedule} alt="User" className='nav-image'></img><span>Schedule</span>
                                </div>
                            </div>
                            <div className='navigation-link'>
                                <div className='navigation-link-inner'>
                                    <img src={patients} alt="User" className='nav-image'></img><span>My Patients</span>
                                </div>
                            </div>
                            <div className='navigation-link'>
                                <div className='navigation-link-inner'>
                                    <img src={notes} alt="User" className='nav-image'></img><span>Notes</span>
                                </div>
                            </div>
                            <div className='navigation-link'>
                                <div className='navigation-link-inner'>
                                    <img src={chats} alt="User" className='nav-image'></img><span>Chats</span>
                                </div>
                            </div>
                            <div className='navigation-link navigation-link-div'>
                                <div className='navigation-link-inner '>
                                    <img src={person} alt="User" className='nav-image-profile'></img><span>My Profile</span>
                                </div>
                            </div>
                            <div className='navigation-link'>
                                <div className='navigation-link-inner'>
                                    <img src={settings} alt="User" className='nav-image'></img><span>Settings</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={10} className="dashboard-body">
                        <div className='header'>
                            <img src={notification} alt="Notification Icon" className='header-notification'></img>
                            <img src={person} alt="User" className='header-image'></img>
                        </div>
                        <div className="welcome-schedule">
                            <Row>
                                <Col lg={8} md={7} className="welcome-col">
                                    <h3>Your Schedule</h3>
                                    <p>All client consultations are available here. You can intiate <br></br>consultations for each client's procedure.</p>
                                    <div className='schedule-button-div'>
                                        <button className="welcome-col-button"><img src={eye} alt='Eye Icon' className='eye'></img>View your appointments</button>
                                    </div>
                                </Col>
                                <Col lg={4} md={5}>
                                    <div className='person-div'>
                                        <img src={person} alt="Person Vector" className='person-vector-schedule'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='body-div'>
                            <Row>
                                <Col xs={12} md={12} lg={4} className='calendar-activities-col'>
                                    <Row>
                                        <Col xs={12} md={6} lg={12}>
                                        <div className='calendar-div schedule-calendar-div'>
                                            <Calendar onChange={onChange} value={value} className='react-calendar'/>
                                            <p>Today's date is <b>{moment(value).format('MMMM Do YYYY')}</b></p>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={6} lg={12}>
                                            <div className='activities-div schedule-activities-div'>
                                                <Row>
                                                    <Col md={10} lg={10} xs={10}>
                                                        <p className='patients-by-gender'><span className='border-bottom-blue'>Rece</span>nt Activity</p>
                                                    </Col>
                                                    <Col md={2} lg={2} xs={2} className='notification-bell-col'>
                                                        <img src={bluebell} alt="User" className='notification-bell-image'></img>
                                                    </Col>
                                                </Row>
                                                <Row className='notification-each'>
                                                    <Col md={2} lg={2} xs={2}>
                                                        <img src={calendarimage} alt="Person" className='activities-icon'></img>
                                                    </Col>
                                                    <Col md={10} lg={10} xs={10}>
                                                        <span className='notification-span'>There are 3 new ready reports for <span className='notification-name'>Tosin Odubela</span></span>
                                                    </Col>
                                                </Row>
                                                <Row className='notification-each'>
                                                    <Col md={2} lg={2} xs={2}>
                                                        <img src={calendarimage} alt="Person" className='activities-icon'></img>
                                                    </Col>
                                                    <Col md={10} lg={10} xs={10}>
                                                        <span className='notification-span'>There are 3 new ready reports for <span className='notification-name'>Tosin Odubela</span></span>
                                                    </Col>
                                                </Row>
                                                <Row className='notification-each'>
                                                    <Col md={2} lg={2} xs={2}>
                                                        <img src={calendarimage} alt="Person" className='activities-icon'></img>
                                                    </Col>
                                                    <Col md={10} lg={10} xs={10}>
                                                        <span className='notification-span'>There are 3 new ready reports for <span className='notification-name'>Tosin Odubela</span></span>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={12} lg={8} className='appointment-col'>
                                    <div className='next-patients-div schedule-patient-div'>
                                        <Row>
                                            <Col lg={8} md={8} xs={8} className='schedule-patients-date-col'>
                                                <p className='patients-by-gender schedule-patients-by-gender'><span className='border-bottom-blue'>Thurs</span>day - 18th February, <span className='schedule-year'>2021</span></p>
                                            </Col>
                                            <Col lg={4} md={4} xs={4} className='schedule-patients-show-col'>
                                                <p className='patients-this schedule-patients-this'>Show by <span className='patients-month'>Day</span> <img src={arrowdownblue} alt="Arrow" className='arrow-down'></img></p>
                                            </Col>
                                        </Row>
                                        <div className='appointment-list-div'>
                                            <div className='appointment-list-image-div'>
                                                <img src={person} alt="User" className='appointment-list-image'></img>
                                                <img src={person} alt="User" className='appointment-list-image list-image-two'></img>
                                                <img src={person} alt="User" className='appointment-list-image list-image-three'></img>
                                                <img src={person} alt="User" className='appointment-list-image list-image-four'></img>
                                            </div>
                                            <span>You have 4 new appointments scheduled</span>
                                        </div>
                                        <Row className='patients-row first-row schedule-appointment-patients-first-row'>
                                            <Col xs={2} md={1} lg={1} className='patients-time'>
                                                <span>09:00AM</span>
                                            </Col>
                                            <Col xs={10} md={11} lg={11} className='patients-info'>
                                                <div className='patients-info-div'>
                                                    <div>
                                                        <img src={person} alt="User" className='patients-image'></img><span className='patients-name'>Guy Hawkins</span>
                                                    </div>
                                                    <div className='threedots-div'>
                                                        <img src={threedots} alt='Menu' className='threedots'></img>    
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='patients-row'>
                                            <Col xs={2} md={1} lg={1} className='patients-time'>
                                                <span>09:00AM</span>
                                            </Col>
                                            <Col xs={10} md={11} lg={11} className='patients-info'>
                                                <div className='patients-info-div'>
                                                    <div>
                                                        <img src={person} alt="User" className='patients-image'></img><span className='patients-name'>Guy Hawkins</span>
                                                    </div>
                                                    <div className='threedots-div'>
                                                        <img src={threedots} alt='Menu' className='threedots'></img>    
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='patients-row'>
                                            <Col xs={2} md={1} lg={1} className='patients-time'>
                                                <span>09:00AM</span>
                                            </Col>
                                            <Col xs={10} md={11} lg={11} className='patients-info'>
                                                <div className='patients-info-div'>
                                                    <div>
                                                        <img src={person} alt="User" className='patients-image'></img><span className='patients-name'>Guy Hawkins</span>
                                                    </div>
                                                    <div className='threedots-div'>
                                                        <img src={threedots} alt='Menu' className='threedots'></img>    
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className='time-list-div'>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>02:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>03:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>04:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>07:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>08:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>09:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Schedule;