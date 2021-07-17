import React,{useState,useRef} from 'react'
import "./PopUp.css"    




function PopUp(props){
    const nameRef=useRef('')
    const phoneRef=useRef('')
    const emailRef=useRef('')
    const hobbiesRef=useRef('')

    function submitHandler(event){
        event.preventDefault();

        //Do add validation here at last (now i have added required validation in the inputs and other validations can be added here)

        const user={
            name:nameRef.current.value,
            phn:phoneRef.current.value,
            email:emailRef.current.value,
            hobbies:hobbiesRef.current.value,
        }

        props.onAddUser(user)

    }

    const [display,set]=useState("none")
    const toggleModal=()=>{
        set("block")
    }
    const toggle=()=>{
        set("none")
    }

    

    return(
    <>

    
    <button className="open-button" onClick={toggleModal}>Open Form</button>
<div className="form-popup" id="myForm" style={{display}}>
        <form onSubmit={submitHandler} className="form-container">
            <h1>Add User</h1>

            <label htmlFor="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" ref={nameRef} required/>

            <label htmlFor="phone"><b>Phone Number</b></label>
            <input type="number" placeholder="Enter Phone Number" ref={phoneRef} required/>

            <label htmlFor="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" ref={emailRef} required/>

            <label htmlFor="hobbies"><b>Hobbies</b></label>
            <input type="text" placeholder="Enter Hobbies" name="hobbies" ref={hobbiesRef} required/>
            
            <input type="submit" className="btn" value="Submit"/> 
            
            <button type="button" className="btn cancel" onClick={toggle} >Close</button>
           
        </form>
        </div>


    </>
)

}

export default PopUp