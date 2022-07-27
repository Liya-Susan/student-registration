import React,{useEffect, useState} from 'react';
import axios from 'axios';


const Students=()=>{
    const[students,setStudents]=useState([]);
    const [isReload,setIsReload]=useState(false)

    useEffect(()=>{
        axios.get("https://student-registration13.herokuapp.com/students").then((res)=>setStudents(res.data.data.students))
    },[isReload])

    //const onDelete = async (rollNo)=>{
    //    const result = await axios.delete(`https://student-registration13.herokuapp.com/student/delete/rollNo=${rollNo}`,{name,standard,rollNo});
    //    if(!result) alert("something went wrong!");
    //    else setIsDeleted(true)
    //}

    const onDelete = (id) => {
        const result = axios.delete(`http://localhost:4000/student/delete/${id}`)
        if(!result) alert("something went wrong!");
        else setIsReload(!isReload);
       
    }

    const renderTable=() =>{
        return <>
           <h3 className='pt-3 mt-3 mb-3 pb-3'>List of Students</h3>
           <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Roll No</th>
                    <th scope='col'>class</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {students.map(student =>(
                    <tr key={student.rollNo}>
                        <td>{student.name}</td>
                        <td>{student.rollNo}</td>
                        <td>{student.standard}</td>
                        <td>
                            <button type='submit' className='btn btn-danger' onClick={()=>{onDelete(student._id)}}>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
           </table>
           
        </>
    }

    return(
        //<div>
            //{students?.length?renderTable():null}
        //</div>
        <>
          {students?renderTable():null}
        </>
    )
} 

export default Students;
