import React, { useState } from "react"
import './Form.css'

const Form=()=>{
    const[success,setSucess]=useState(false)
    const[message,setMessage]=useState('')
    const [formData,setFormData]=useState({
        'name':"",
        "password":"",
        "age":""
    })

    const onChangeHandle=(e)=>{
        
        setFormData({...formData,[e.target.name]:e.target.value})
        setSucess(false)
                setMessage("")

    }
    const onSubmiting=(e)=>{
        e.preventDefault();
        console.log("clicked")
        for(let [key,value] of Object.entries(formData)){
            if(formData[key]===""){
                setSucess(true)
                setMessage(`${key} field missing argument`)
                break;
            }
        }
    }
    return(
        <div>Form 
            <form>
               <label>NAME :</label>
               <input name="name" value={formData.name} type="text" onChange={(e)=>{onChangeHandle(e)}}/>

               <label>Password :</label>
               <input name="password" value={formData.password} type="password" onChange={(e)=>{onChangeHandle(e)}}/>

               <label>Age :</label>
               <input name="age" value={formData.age} type="number" onChange={(e)=>{onChangeHandle(e)}}/>

               <button onClick={(e)=>{onSubmiting(e)}}>Submit</button>
            </form>

            <h1 style={{color:"red"}}>
                {
                    success && message.length>0 ?message:null
                }
            </h1>
        </div>
    );
}
export default Form;