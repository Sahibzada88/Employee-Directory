import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeTile from './EmployeeTile';

function EmployeeGrid() {
  const [employees, setEmployees] = useState([]);
  const [isTileView, setIsTileView] = useState(false);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => setEmployees(response.data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <button onClick={() => setIsTileView(!isTileView)}>
        {isTileView ? 'Grid View' : 'Tile View'}
      </button>
      <div className={`employee-container ${isTileView ? 'tile-view' : 'grid-view'}`}>
        {employees.map(employee => (
          <EmployeeTile key={employee.login.uuid} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeGrid;
