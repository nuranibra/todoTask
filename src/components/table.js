import { useState } from "react";
import { v4 } from 'uuid'

export default function Table ({usr , usrAg , usrPh , usrPo , basildi}) {

    const [arr,setArr] = useState([])

    if(basildi){
        arr.push(<tr key={v4()}>
        <td key={v4()}>{usr}</td>
        <td key={v4()}>{usrAg}</td>
        <td key={v4()}>{usrPo}</td>
        <td key={v4()}>{usrPh}</td>
            </tr>)
    }

    return (
        <>
            
        </>
    );
}