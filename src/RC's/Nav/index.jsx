import { useState } from "react";
import imageData from "../../Drawables/Icons";
import { Link } from "react-router-dom";

export default function Nav() {
    const [wicSel, setWicSel] = useState(1);
    return (
        <div className="nav">
            <Link to={"/dashboard"} className="icon" onClick={()=>setWicSel(1)} style={wicSel!==1 ? {backgroundImage: `url(${imageData.dashboardUnsel})`} : {backgroundImage: `url(${imageData.dashboardSel})`, backgroundColor: 'white'}}></Link>
            <Link to={"/"} className="icon" onClick={()=>setWicSel(2)} style={wicSel!==2 ? {backgroundImage: `url(${imageData.securityUnsel})`} : {backgroundImage: `url(${imageData.securitySel})`, backgroundColor: 'white'}}></Link>
            <Link to={"/"} className="icon" onClick={()=>setWicSel(3)} style={wicSel!==3 ? {backgroundImage: `url(${imageData.lampUnsel})`} : {backgroundImage: `url(${imageData.lampSel})`, backgroundColor: 'white'}}></Link>
            <Link to={"/"} className="icon" onClick={()=>setWicSel(4)} style={wicSel!==4 ? {backgroundImage: `url(${imageData.locationUnsel})`} : {backgroundImage: `url(${imageData.locationSel})`, backgroundColor: 'white'}}></Link>
            <Link to={"/admin"} className="icon" onClick={()=>setWicSel(5)} style={wicSel!==5 ? {backgroundImage: `url(${imageData.studentsUnsel})`} : {backgroundImage: `url(${imageData.studentsSel})`, backgroundColor: 'white'}}></Link>
            <Link to={"/"} className="icon" onClick={()=>setWicSel(6)} style={wicSel!==6 ? {backgroundImage: `url(${imageData.staticalUnsel})`} : {backgroundImage: `url(${imageData.staticalSel})`, backgroundColor: 'white'}}></Link>
        </div>
    )
}