import { useEffect, useState } from "react"

export default function OtherStudent() {
    const [allStudentData, setAllStudentData] = useState();
    
    useEffect(()=>{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://api-student-attendance-managment-system.onrender.com/students/all", requestOptions)
          .then(response => response.json())
          .then(result => setAllStudentData(result))
          .catch(error => console.log('error', error));
    }, []);

    const OtherStudentCard = (info)=>{
        return (
            <div className="oth-student-card" style={localStorage.getItem("token")===info.id ? {display: "none"} : {display: ""}}>
                <div className="oth-student-card-data"><b>Name: </b>{info.name}</div>
                <div className="oth-student-card-data"><b>Roll Number: </b>{info.roll}</div>
                <div className="oth-student-card-data"><b>Branch: </b>{info.branch}</div>
                <div className="oth-student-card-data"><b>Semester: </b>{info.sem} Semester</div>
            </div>
        )
    }

    return (
        <div className="oth-students-section">
            <h1>Other Students</h1>
            <div className="oth-students">
                {
                    allStudentData ? 
                    allStudentData.data.map((data, i)=>{
                        return <OtherStudentCard key={i} id={data._id} name={data.name} roll={data.roll_number} branch={data.stream} sem={data.semester} />
                    })
                    :
                    <div className="loader"></div>
                }
            </div>
        </div>
    )
}