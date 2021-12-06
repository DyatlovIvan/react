import {useEffect, useState} from "react";

export const Clock = () => {
    const [date, setDate] = useState<any>(null)

     useEffect(() => {
            setInterval(() => {
                const newDate =new Date();

               setDate(`${correctString(newDate.getHours())} : ${correctString(newDate.getMinutes())} : ${correctString(newDate.getSeconds())}`)
            }, 1000)
         }
     )

    const correctString = (value:number)=>{
        return value.toString().length>1?value:'0'+ value
    }
    return (
        <div>
            {date}
        </div>
    )
}