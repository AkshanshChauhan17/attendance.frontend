import { Link } from "react-router-dom"
import Calendar from "./Calendar"
import OtherStudent from "./OtherStudent"
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [studentData, setStudentData] = useState({});
    useEffect(()=>{
            var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("https://api-student-attendance-managment-system.onrender.com/students/login/" + localStorage.getItem("token"), requestOptions)
            .then(response => response.json())
            .then(result => setStudentData(result.data[0]))
            .catch(error => console.log('error', error));
    }, []);
    return (
        <div className="dashboard">
            <div className="db-nav">
                <div className="search-section">
                <div className="search-icon"></div>
                <input className="search" type="search" placeholder="Search"/>
            </div>
            <div className="db-info">
                <div className="notification-icon"></div>
                <Link to={"/user/"} className="user-dp-icon"></Link>
                <p>{studentData.name}</p>
            </div>
            </div>    
            <div className="dash-main">
                <div className="left-section">
                    <div className="notice-board">
                        <div className="greet">Hello, {studentData.name}!</div>
                        <p className="sub">Welcome Back! The Attendance is Above the 75% criteria, <br/>all good you attend 10 days form remaining days.</p>
                        <div className="statical">
                            <div className="total">+{studentData.roll_number}% <span>is Maintain</span></div>
                        </div>
                        <p className="note">Total number of Days Remaining 40 Days</p>
                    </div>
                    <Calendar />
                </div>
                <div className="right-section">
                    <OtherStudent />
                </div>
            </div>
        </div>
    )
}