import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
    
    const { register, handleSubmit } = useForm();

    function onFormSubmit(data) {
      console.log(data);
    }

    return <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <h1>Send me a message</h1>
          <label htmlFor="firstName">First Name:</label>
          <input {...register("firstName")}/>
          <label htmlFor="lastName">Last Name:</label>
          <input {...register("lastName")}/>
          <label htmlFor="email">Email address:</label>
          <input {...register("email")}/>
          <label htmlFor="message">Your message:</label>
          <textarea {...register("message")}/>
          <input type="submit"/>
        </form>
    </div>
  }