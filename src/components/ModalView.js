import React from 'react';

function ModalView({ employee, onClose }) {
  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <div className="modal-content">
        <img src={employee.picture.large} alt="Profile" />
        <h3>{employee.name.first} {employee.name.last}</h3>
        <p>Email: {employee.email}</p>
        <p>Phone: {employee.phone}</p>
        <p>Location: {employee.location.city}, {employee.location.country}</p>
        {/* Additional details */}
      </div>
    </div>
  );
}

export default ModalView;
