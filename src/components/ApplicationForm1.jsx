import React, { useState } from 'react';
import backgroundImage from 'C:/Users/asus/Desktop/Web Dev Projects/Hostel/src/images/Ketie-Zafares.png';
import { Link } from "react-router-dom";

function ApplicationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Roll_Number, setRoll_Number] = useState('');
  const [ChronicProblems, setChronicProblems] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit application data to backend
    console.log('Submitting application:', {
      name,
      email,
      phone,
      Roll_Number,
      ChronicProblems,
    });
  };

  return (
    <div class = "bg" /*style={{ backgroundImage: `url(${backgroundImage})` } }*/>
    <section class="get-in-touch">
      <h1 class="title">Application Form</h1>
      <form onSubmit={handleSubmit} className="contact-form row">
        <div class="form-field col-lg-6">
          <input id="name" class="input-text js-input" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
          <label class="label" for="name">Name</label>
        </div>
        <div class="form-field col-lg-6 ">
         <input id="email" class="input-text js-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
         <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="company" class="input-text js-input" type="text" required value={Roll_Number} onChange={(e) => setRoll_Number(e.target.value)}/>
         <label class="label" for="company">Roll-Number</label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="phone" class="input-text js-input" type="text" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
         <label class="label" for="phone">Contact Number</label>
      </div>
      <div class="form-field col-lg-12">
         <input id="message" class="input-text js-input" type="text" required value={ChronicProblems} onChange={(e) => setChronicProblems(e.target.value)}/>
         <label class="label" for="message">Chronic Problems(If any)</label>
      </div>
        <button class = "submit-btn" type="submit">Submit</button>
      </form>
    </section>
    </div>
  );
}

export default ApplicationForm;
