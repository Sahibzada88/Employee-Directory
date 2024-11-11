import React, { useState } from 'react';
import ModalView from './ModalView';

function EmployeeTile({ employee }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="employee-tile">
      <img src={employee.picture.medium} alt="Profile" />
      <h3>{employee.name.first} {employee.name.last}</h3>
      <p>{employee.email}</p>
      <button onClick={() => setShowDetails(true)}>Details</button>
      <button>Edit</button>
      <button>Flag</button>
      <button>Delete</button>
      {showDetails && <ModalView employee={employee} onClose={() => setShowDetails(false)} />}
    </div>
  );
}

export default EmployeeTile;
