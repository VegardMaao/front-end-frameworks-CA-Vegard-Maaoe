import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { ContactForm } from "../../App.styles";
import {Metadata} from 'components';

const emailRegex = `^[^\s@]+@[^\s@]+\.[^\s@]+$`;

const schema = yup.object({
  firstName: yup.string().min(2, "First Name must be 2 characters or more").max(15, "First Name must be less than 16 characters").required("Field is required"),
  lastName: yup.string().min(2, "Last Name must be 2 characters or more").max(15, "Last Name must be less than 16 characters").required("Field is required"),
  email: yup.string().min(5).matches(emailRegex, "Invalid email").required(), 
  message: yup.string().min(10).max(500).required(),
}).required();

export default function Contact() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});

    function onFormSubmit(data) {
      console.log(data);
    }

    return <div>
        <Metadata title={"Contact"} description={"This is the contact page"} />
        <ContactForm onSubmit={handleSubmit(onFormSubmit)}>
          <h1>Send me a message</h1>
          <label htmlFor="firstName">First Name:</label>
          <input {...register("firstName")}/>
          <p>{errors.firstName?.message}</p>
          <label htmlFor="lastName">Last Name:</label>
          <input {...register("lastName")}/>
          <p>{errors.lastNAme?.message}</p>
          <label htmlFor="email">Email address:</label>
          <input {...register("email")}/>
          <p>{errors.email?.message}</p>
          <label htmlFor="message">Your message:</label>
          <textarea {...register("message")}/>
          <p>{errors.message?.message}</p>
          <input type="submit"/>
        </ContactForm>
    </div>
  }