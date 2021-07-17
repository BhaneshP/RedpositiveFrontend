import React from 'react';

import './Table.css';

const Data = (props) => {
  console.log(props)
  return (
    <table>
        <tr>
          <th className="checkboxx"><input type="checkbox"/></th>
          <th>{props.name}</th>
          <th>{props.hobbies}</th>
          <th>{props.email}</th>
          <th>{props.phn}</th>
        </tr>
      </table>
  );
};

export default Data;
