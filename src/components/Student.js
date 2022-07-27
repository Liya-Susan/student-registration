import React,{useState} from 'react';
import axios from 'axios';
import './Student';


const Student=()=>{
    const [name,setName] = useState('');
    const [standard,setStandard]= useState('');
    const [rollNo,setRollNo]=useState([]);

    const onSubmitHandler = async ()=>{
        const result = await axios.post("https://student-registration13.herokuapp.com/student",{name,standard,rollNo});
        if(!result) alert("something went wrong");
    }

    return(
        <form>
            <h2  className='pt-3 mt-5 mb-3 pb-3'>Student Registration portal</h2>
            <div className='form-group m-2' >
                <label>Enter the name of student</label>
                <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group m-2'>
                <label>Enter the class of student</label>
                <input type="text" className='form-control' onChange={(e)=>setStandard(e.target.value)}/>
            </div>
            <div className='form-group m-2'>
                <label>Enter the rollNo of student</label>
                <input type="number" className='form-control' onChange={(e)=>setRollNo(e.target.value)}/>
            </div>
            <button type='submit ' className='btn btn-primary  m-2' onClick={onSubmitHandler}>SAVE</button>
        </form>
    )
}
export default Student;
