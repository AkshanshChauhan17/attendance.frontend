import { useState } from "react";
import "../../App.scss";
export default function Authenticator() {
    const [firstValueAuth, setFirstValueAuth] = useState();
    const [secondValueAuth, setSecondValueAuth] = useState();
    const [thirdValueAuth, setThirdValueAuth] = useState();
    const [fourthValueAuth, setFourthValueAuth] = useState();
    const [fifthValueAuth, setFifthValueAuth] = useState();
    const sendAuthLogin = ()=> {
        if(firstValueAuth != null && secondValueAuth != null) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            var urlencoded = new URLSearchParams();
            urlencoded.append("name", firstValueAuth);
            urlencoded.append("roll_number", secondValueAuth);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch("https://api-student-attendance-managment-system.onrender.com/students/login", requestOptions)
                .then(response => response.json())
                .then((result) => {
                    if(result.message !== "LOGIN FAILED") {
                        localStorage.setItem("token", result.token);
                        alert(result.message);
                        window.location.href = "/";
                    } else {
                        alert(result.message);
                    };
                })
                .catch(err => console.log(err))
        } else {
            alert("SOME OF THE INPUTS ARE NOT FILLED, PLEASE FILL THEM & TRY AGAIN");
        }
    }

    const sendAuthSignUp = ()=> {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("name", firstValueAuth);
        urlencoded.append("roll_number", secondValueAuth);
        urlencoded.append("stream", thirdValueAuth);
        urlencoded.append("semester", fourthValueAuth);
        urlencoded.append("mobile_number", fifthValueAuth);
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        
        fetch("https://api-student-attendance-managment-system.onrender.com/students/signup", requestOptions)
            .then(response => response.json())
            .then(result => alert(result.message))
            .catch(error => console.log('error', error));       
    }
    return (
        <div className="auth">
            <form>
                <h1>Login</h1>
                <label htmlFor="name">Name</label>
                <input type="text" name="Name" placeholder="Name" required={true} onChange={(t)=>setFirstValueAuth(t.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="number" name="password" placeholder="Password" required={true} onChange={(t)=>setSecondValueAuth(t.target.value)}/>
                <input type="button" value="Login" onClick={()=>sendAuthLogin()} />
            </form>
            <p>or</p>
            <form>
                <h1>Signup</h1>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" required={true} onChange={(t)=>setFirstValueAuth(t.target.value)}/>
                
                <label htmlFor="rollnumber">Roll Number</label>
                <input type="tel" name="rollnumber" placeholder="Roll Number" required={true} onChange={(t)=>setSecondValueAuth(t.target.value)}/>
                
                <label htmlFor="branch">Branch</label>
                <input type="text" name="branch" placeholder="Branch" required={true} onChange={(t)=>setThirdValueAuth(t.target.value)}/>
                
                <label htmlFor="sem">Semester</label>
                <input type="number" step={1} min={1} max={8} name="sem" placeholder="Semester" required={true} onChange={(t)=>setFourthValueAuth(t.target.value)}/>
                
                <label htmlFor="mobile">Mobile Number</label>
                <input type="tel" name="mobile" placeholder="mobile" required={true} onChange={(t)=>setFifthValueAuth(t.target.value)}/>
                
                <input type="button" value="SignUp" onClick={()=>sendAuthSignUp()} />
            </form>
        </div>
    )
}