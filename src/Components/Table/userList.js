import React from 'react';

import Table from './Table';
//import classes from './MoviesList.module.css';

const userList = (props) => {
  return (
    // <ul className={classes['movies-list']}>
    <>  
    {props.userData.map((user) => (
        <Table
          id={user.id}
          name={user.name}
          email={user.email}
          hobbies={user.hobbies}
          phn={user.phn}
        />
      ))}
      </>
    // </ul>   
  );
};

export default userList;
