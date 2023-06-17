import React, { useState } from 'react';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    address: ''
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the studentData
    console.log(studentData);
    // Reset the form
    setStudentData({
      name: '',
      age: '',
      address: ''
    });
  };

  return (
    <div>
      <h2>Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={studentData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={studentData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
