import React,{useState} from 'react';
import './myStyles.css';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstraps/dist/css/bootstrap.css';
import logo from './Images/logo.png';
import person from './Images/person.png';
import statsperson from './Images/stats-person.png';
import calendarimage from './Images/calendar.png';
import clock from './Images/Vector.png';
import waiting from './Images/waiting.png';
import dashboard from './Images/dashboard.png';
import schedule from './Images/schedule.png';
import patients from './Images/patients.png';
import notes from './Images/notes.png';
import chats from './Images/chats.png';
import threedots from './Images/three-dots.png'
import notification from './Images/notification.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


function Dashboard() {
    const [value, onChange] = useState(new Date());

    return(
        <div className='body'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={2} className="dashboard-navigation">
                        <div className=''></div>
                        <div className='logo-div'><img src={logo} alt="Logo"></img><span className='logo-text'>Health Lite</span></div>
                        <div className='navigation-links'>
                            <div className='navigation-link active'>
                                <div className='navigation-link-inner'>
                                    <img src={dashboard} alt="User" className='nav-image'></img><span>Dashboard</span>
                                </div>
                            </div>
                            <div className='navigation-link'>
                                <div className='navigation-link-inner'>
                                    <img src={waiting} alt="User" className='nav-image'></img><span>Waiting Room</span>
                                </div>
                            </div>
                            <div className='navigation-link'>
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
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={10} className="dashboard-body">
                        <div className='header'>
                            <img src={notification} alt="User" className='header-notification'></img>
                            <img src={person} alt="User" className='header-image'></img>
                        </div>
                        <Row className='dashboard-row'>
                            <Col md={12} lg={8} className="dashboard-col">
                                <div className="welcome">
                                    <Row>
                                        <Col lg={8} md={8} className="welcome-col">
                                            <h3>Welcome, Dr. Fayemi David</h3>
                                            <p>You have 16 new appointments and there are currently 23,445 patients in the waiting room. Have a nice day at work!</p>
                                            <Row>
                                                <Col lg={6}>
                                                    <button className="welcome-col-button">View your appointments</button>
                                                </Col>
                                                <Col lg={6}>
                                                    <button className="welcome-col-button">Go to waiting room</button>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={4} md={4}>
                                            <img src={person} alt="Person Vector" className='person-vector'></img>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='stats-div'>
                                    <Row>
                                        <Col md={4} lg={4} xs={12}>
                                            <div className='one'>
                                                <Row>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <img src={statsperson} alt="Person" className='schedule-image'></img>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <p className='all-time'>All time</p>
                                                    </Col>
                                                </Row>
                                                <p className='number'>12,345</p>
                                                <p className='patients'>Total Patients</p>
                                                <p className='last-month'>5% less than last month</p>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={4} xs={12}>
                                            <div className='one'>
                                                <Row>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <img src={calendarimage} alt="Person" className='appointment-image'></img>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <p className='all-time'>Today</p>
                                                    </Col>
                                                </Row>
                                                <p className='number'>25</p>
                                                <p className='patients'>Appointments</p>
                                                <p className='last-month'>15% more than yesterday</p>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={4} xs={12} className="stats-col">
                                            <div className='one'>
                                                <Row>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <img src={clock} alt="Person" className='waiting-image'></img>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <p className='all-time'>Today</p>
                                                    </Col>
                                                </Row>
                                                <p className='number'>21,045</p>
                                                <p className='patients'>Waiting Room</p>
                                                <p className='last-month'>35% less than yesterday</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='next-patients-div'>
                                    <Row>
                                        <Col lg={8} md={8} xs={8}>
                                            <p className='patients-by-gender'><span className='border-bottom-blue'>Your</span> next patients</p>
                                        </Col>
                                        <Col lg={4} md={4} xs={4}>
                                            <p className='patients-this'>This <span className='patients-month'>month</span></p>
                                        </Col>
                                    </Row>
                                    <Row className='patients-row first-row'>
                                        <Col xs={1} md={1} lg={1} className='patients-time'>
                                            <span>09:00AM</span>
                                        </Col>
                                        <Col xs={11} md={11} lg={11} className='patients-info'>
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
                                        <Col xs={1} md={1} lg={1} className='patients-time'>
                                            <span>09:00AM</span>
                                        </Col>
                                        <Col xs={11} md={11} lg={11} className='patients-info'>
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
                                        <Col xs={1} md={1} lg={1} className='patients-time'>
                                            <span>09:00AM</span>
                                        </Col>
                                        <Col xs={11} md={11} lg={11} className='patients-info'>
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
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='calendar-col'>
                                <div className='calendar-div'>
                                    <Calendar onChange={onChange} value={value} className='react-calendar'/>
                                    <p>Today's date is <b>{moment(value).format('MMMM Do YYYY')}</b></p>
                                </div>
                                <div className="gender-stats">
                                    <Row>
                                        <Col lg={7} md={7} xs={7}>
                                            <p className='patients-by-gender'><span className='border-bottom-blue'>Patie</span>nts  by Gender</p>
                                            
                                        </Col>
                                        <Col lg={5} md={5} xs={5} className='this-col'>
                                            <p className='patients-this'>This <span className='patients-month'>month</span></p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} md={6} xs={6} className='patients-col'>
                                            <div className='patients-div'>
                                                <p className='patients-number'>212,345</p>
                                                <p className='patients-para'>Patients</p>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} xs={6} className='patients-col'>
                                            <div className='genders-list'>
                                                <p>Male</p>
                                                <p>Female</p>
                                                <p>Transgender</p>
                                                <p>Other</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Dashboard;