import React,{useState} from 'react';
import PopUp from './Components/PopUp/PopUp'
import UserList from './Components/Table/userList';
import './App.css';



//fetch function for fetching user data from database
function App() {
  
  const [userData,setData]=useState([])
  async function fetchUserHandler(){
    const response = await fetch('https://obscure-beyond-63635.herokuapp.com/https://redpositive-backend.herokuapp.com/users/all')
    const data=await response.json()
    //console.log(data)
    const transformedData=data.map((user)=>{
      return{
        id:user._id,
        name:user.name,
        email:user.email,
        hobbies:user.hobbies,
        phn:user.phn,
      }
    })
    setData(transformedData)
  }

  //fetch function to post data to the database

  async function postDataHandler(user){
    console.log(JSON.stringify(user))
    const response=await fetch('https://obscure-beyond-63635.herokuapp.com/https://redpositive-backend.herokuapp.com/users/',{
        method:'POST',
        body: JSON.stringify(user),
        headers:{
          'Content-Type':'application/json'
        }
    })

    const data=response.json()
    console.log(data)
  }
  

  return (
    <React.Fragment>
      
      
      <section className="heading">
        
        <h1>CRUD App</h1>
        </section>
       <section > 
        <table className="header">
          <tr>
            <th className="checkboxx">Select</th>
            <th>Name</th>
            <th>Hobbies</th>
            <th>Email Address</th>
            <th>Contact Number</th>
          </tr>
        </table>
      </section>
      <section>
        <UserList userData={userData} />
      </section>
      
      <section>
        <button className="open-butto"  onClick={fetchUserHandler}>Fetch User Data</button>
      </section>
      <section>
        <PopUp onAddUser={postDataHandler}/>
        </section>
    </React.Fragment>
  );
}

export default App;
