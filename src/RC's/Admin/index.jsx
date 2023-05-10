import { useEffect, useState } from "react";

export default function Admin() {
    var attendanceArr = ["Present", "Absent", "Leave"];
    const [date, setDate] = useState("");
    const [semester, setSemester] = useState(1);
    const [subject, setSubject] = useState();
    const [allStudentData, setAllStudentData] = useState();

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("https://api-student-attendance-managment-system.onrender.com/students/all", requestOptions)
            .then(response => response.json())
            .then(result => setAllStudentData(result.data))
            .catch(error => console.log('error', error));
    }, []);

    const ListStudents = (info)=> {
        const [attendance, setAttendance] = useState(0);
        const [posted, setPosted] = useState();
        const updateAttendance = (info)=> {
            var requestOptions = {
                method: 'PATCH',
                redirect: 'follow'
              };
              
              fetch(`https://api-student-attendance-managment-system.onrender.com/students/cse/${semester}/${subject}/${info[0]}/${date}/${attendanceArr[info[1]]}`, requestOptions)
                .then(response => response.json())
                .then(result => setPosted(result))
                .catch(error => console.log('error', error));
        }
        return (
            <div className="attendance-card" style={info.semester===parseInt(semester) ? {display: ""} : {display: "none"}}>
                <div className="left-section">
                    <div className="info"><b>Name: </b>{info.name}</div>
                    <div className="info"><b>Branch: </b>{info.stream} <b>Semester: {info.semester}</b></div>                
                    <div className="info"><b>Roll Number: </b>{info.roll_number}</div>
                </div>
                <div className="status">
                    {
                        posted ? 
                            posted.data.acknowledged ? 
                                <h4 className="ok">OK</h4>
                            :
                            <h4 className="error">Error!</h4>
                        :
                            null
                    }
                </div>
                <div className="options">
                    <div className="option">
                        <b>Present</b>
                        <input type="checkbox" onClick={(e)=>{setAttendance(1); updateAttendance([info.roll_number, attendance])}} disabled={attendance===1 || attendance===2 || attendance===3 ? true : false} />
                    </div>
                    <div className="option">
                        <b>Absent</b>
                        <input type="checkbox" onClick={(e)=>{setAttendance(2); updateAttendance([info.roll_number, attendance])}} disabled={attendance===1 || attendance===2 || attendance===3 ? true : false} />
                    </div>
                    <div className="option">
                        <b>Leave</b>
                        <input type="checkbox" onClick={(e)=>{setAttendance(3); updateAttendance([info.roll_number, attendance])}} disabled={attendance===1 || attendance===2 || attendance===3 ? true : false} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="admin">
            <h3>Branch: Computer Science Engineering</h3>
            <br />
            <div className="nav">
                <div className="part">
                    <h4>Select Subject:</h4>
                    <select name="subject-selection" onChange={(e)=>setSubject(e.target.value)}>
                        <option value="Cloud_Computing">Cloud Computing</option>
                        <option value="Compiler_Design">Compiler Design</option>
                        <option value="Computer_Graphics">Computer Graphics</option>
                        <option value="Data_Analytics">Data Analytics</option>
                        <option value="Micro_Processor">Micro Processor</option>
                    </select>
                </div>
                <div className="part">
                    <h4>Select Date:</h4>
                    <input type="date" onChange={(e)=>setDate(e.target.value)} />
                </div>
                <div className="part">
                    <h4>Semester: </h4>
                    <select name="semester" onChange={(e)=>setSemester(e.target.value)}>
                        <option value={1}>1st Sem</option>
                        <option value={2}>2nd Sem</option>
                        <option value={3}>3rd Sem</option>
                        <option value={4}>4th Sem</option>
                        <option value={5}>5th Sem</option>
                        <option value={6}>6th Sem</option>
                        <option value={7}>7th Sem</option>
                        <option value={8}>8th Sem</option>
                    </select>
                </div>
            </div>
            <div className="attendance-section">
                {
                    allStudentData && date && semester && subject ?
                    allStudentData.map((data, i)=>{
                        return (<ListStudents key={i} name={data.name} roll_number={data.roll_number} stream={data.stream} semester={data.semester}/>)
                    })
                    : null
                }
            </div>
        </div>
    )
}