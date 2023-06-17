import './App.css';

function App() {
  return (
    <>
    <div class="title"><h1 class="heading">Admission Form</h1></div>
    <div class="container">
      <form class="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" />

        <label htmlFor="phone">Phone number:</label>
        <input type="tel" id="phone" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="address">Address:</label>
        <textarea id="address" rows="4"></textarea>

        <label htmlFor="father">Father's Name:</label>
        <input type="text" id="fname" />

        <label htmlFor="foccup">Father's Occupation</label>
        <input type="text" id="foccup" />

        <label htmlFor="mother">Mother's Name</label>
        <input type="text" id="mname" />

        <label htmlFor="moccup">Mother's Occupation</label>
        <input type="text" id="moccup" />

        <label htmlFor="course">Enter course</label>
        <select>
          <option>Select your course</option>
          <option>Computer Science</option>
          <option>Electronics and Communication</option>
          <option>Information Science</option>
        </select><br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
