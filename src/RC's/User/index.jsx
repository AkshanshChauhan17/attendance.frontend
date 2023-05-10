import { useEffect, useState } from "react";

export default function User() {
    const [myInfo, setMyInfo] = useState({});
    const getMyInfo = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api-student-attendance-managment-system.onrender.com/students/login/" + localStorage.getItem("token"), requestOptions)
            .then(response => response.json())
            .then(result => setMyInfo(result.data[0]))
            .catch(error => console.log('error', error)); 
    }

    useEffect(()=>{
        getMyInfo();
    }, []);

    const deleteAccount = ()=> {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
          
        fetch("https://api-student-attendance-managment-system.onrender.com/students/" + localStorage.getItem("token"), requestOptions)
            .then(response => response.json())
            .then( async (result) => {
                alert(result.message); 
                await localStorage.removeItem("token");
                window.location.href = "/";
            })
            .catch(error => console.log('error', error));
    }
    const logoutAccount = async ()=> {
        await localStorage.removeItem("token");
        window.location.href = "/";
    }
    return (
        <div className="user">
            <h3>User Information:</h3>
            <div className="user-info">
                <div className="name"><b>Name: </b>{myInfo.name}</div>
                <div className="name"><b>Roll Number: </b>{myInfo.roll_number}</div>
                <div className="name"><b>Branch: </b>{myInfo.stream}</div>
                <div className="name"><b>Semester: </b>{myInfo.semester}</div>
                <div className="name"><b>Mobile Number: </b> +91 {myInfo.mobile_number}</div>
                <div className="name"><b>Register On: </b>{myInfo.registration_date}</div>
            </div>
            <div className="user-account-delete-section">
                Delete Your Account -id: <b>{localStorage.getItem("token")}</b><button className="delete-button" onClick={()=>deleteAccount()}>Delete</button>
            </div>
            <button className="logout-button" onClick={()=>logoutAccount()}>Logout</button>
        </div>
    )
}