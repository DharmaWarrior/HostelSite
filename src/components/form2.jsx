import React, { useState } from 'react';
import backgroundImage from 'C:/Users/asus/Desktop/Web Dev Projects/Hostel/src/images/Ketie-Zafares.png';

function ApplicationForm() {
  const [course, setcourse] = useState('');
  const [branch, setbranch] = useState('');
  const [sem, setsem] = useState('');
  const [yoa, setyoa] = useState('');
  const [lastscl, setlastscl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit application data to backend
    console.log('Submitting application:', {
      course,
      branch,
      sem,
      yos,
      lastscl,
    });
  };

  return (
    <div class = "bg" /*style={{ backgroundImage: `url(${backgroundImage})` } }*/>
    <section class="get-in-touch">
      <h1 class="title">Application Form</h1>
      <form onSubmit={handleSubmit} className="contact-form row">
        <div class="form-field col-lg-6">
          <input id="name" class="input-text js-input" type="text" required value={course} onChange={(e) => setcourse(e.target.value)} />
          <label class="label" for="name">Course</label>
        </div>
        <div class="form-field col-lg-6 ">
         <input id="email" class="input-text js-input" type="email" required value={branch} onChange={(e) => setbranch(e.target.value)}/>
         <label class="label" for="email">Branch</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="company" class="input-text js-input" type="text" required value={sem} onChange={(e) => setsem(e.target.value)}/>
         <label class="label" for="company">Semester</label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="phone" class="input-text js-input" type="text" required value={yoa} onChange={(e) => setyoa(e.target.value)}/>
         <label class="label" for="phone">Year Of Admission</label>
      </div>
      <div class="form-field col-lg-12">
         <input id="message" class="input-text js-input" type="text" required value={lastscl} onChange={(e) => setlastscl(e.target.value)}/>
         <label class="label" for="message">Last School</label>
      </div>
        <button class = "submit-btn" type="submit">Submit</button>
      </form>
    </section>
    </div>
  );
}

export default ApplicationForm;
