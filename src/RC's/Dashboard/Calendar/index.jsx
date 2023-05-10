import { useState } from "react"

const data = {
    month: {
        month: "March",
        days: [
            {
                date: "1 Mar",
                cond: "Present"
            },
            {
                date: "2 Mar",
                cond: "Present"
            },
            {
                date: "3 Mar",
                cond: "Present"
            },
            {
                date: "4 Mar",
                cond: "Present"
            },
            {
                date: "5 Mar",
                cond: "Present"
            }, 
            {
                date: "6 Mar",
                cond: "Present"
            },
            {
                date: "7 Mar",
                cond: "Sunday"
            },
            {
                date: "8 Mar",
                cond: "Present"
            },
            {
                date: "9 Mar",
                cond: "Present"
            },
            {
                date: "10 Mar",
                cond: "Present"
            },
            {
                date: "11 Mar",
                cond: "Present"
            },
            {
                date: "12 Mar",
                cond: "Present"
            },
            {
                date: "13 Mar",
                cond: "Present"
            },
            {
                date: "14 Mar",
                cond: "Sunday"
            },
            {
                date: "15 Mar",
                cond: "Present"
            },
            {
                date: "16 Mar",
                cond: "Present"
            },
            {
                date: "17 Mar",
                cond: "Present"
            },
            {
                date: "18 Mar",
                cond: "Present"
            },
            {
                date: "19 Mar",
                cond: "Present"
            },
            {
                date: "20 Mar",
                cond: "Present"
            },
            {
                date: "21 Mar",
                cond: "Sunday"
            },
            {
                date: "22 Mar",
                cond: "Present"
            },
            {
                date: "23 Mar",
                cond: "Present"
            },
            {
                date: "24 Mar",
                cond: "Absent"
            },
            {
                date: "25 Mar",
                cond: "Present"
            },
            {
                date: "26 Mar",
                cond: "Absent"
            },
            {
                date: "27 Mar",
                cond: "Present"
            },
            {
                date: "28 Mar",
                cond: "Sunday"
            },
            {
                date: "29 Mar",
                cond: "Present"
            }
        ] 
    },
    static: {
        total: 29,
        present: 26,
        absent: 3
    }
}

export default function Calendar() {
    const [month, setMonth] = useState("");
    return (
        <div className="calendar">
            <p className="heading">Your Data in Calendar</p>
            <select placeholder="Select the Month" onChange={(e)=>setMonth(e.target.value)}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <p className="month-name">Month : {month}</p>
            <div className="table">
                {
                    data.month.days.map((d, i)=>{
                        return(
                            <div className="month" key={i}>
                                <div className={"day-" + d.cond}>
                                    <div className="date">{d.date}</div>
                                    <div className="cond">{d.cond}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}