import { useState } from "react";

export default function Contact() {

    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [email, setEmail] = useState(``);
    const [message, setMessage] = useState(``);

    function onTextInputChange(event) {
      const value = event.target.value;
      const name = event.target.name;
      switch (name) {
        case "firstName":
          setFirstName(value);
          break;

        case "lastName":
          setLastName(value);
          break;

        case "email":
          setEmail(value);
          break;
      
        case "message":
          setMessage(value);
          break;

        default:
          break;
      }
    }

    function onFormSubmit(event) {
      event.preventDefault();
      const body = {
        firstName,
        lastName,
        email,
        message
      };

      // Here I could use a fetch / POST to send my data to the backend. But let's just console log it 
      
      console.log(body);
    }    

    return <div>
        <form onSubmit={onFormSubmit}>
          <h1>Send me a message</h1>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" value={firstName} onChange={onTextInputChange} placeholder="First Name"/>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" value={lastName} onChange={onTextInputChange} placeholder="Last Name"/>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" value={email} onChange={onTextInputChange} placeholder="your@mail.com"/>
          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message" value={message} onChange={onTextInputChange} placeholder="Your message here"></textarea>
          <button>Submit</button>
        </form>
    </div>
  }