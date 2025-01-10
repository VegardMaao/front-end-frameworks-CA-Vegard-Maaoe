import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { checkoutStyles } from "styles";

const currentYear = new Date().getFullYear();
const emailRegex = `^[^\s@]+@[^\s@]+\.[^\s@]+$`;
const numberRegex = `/^[0-9]+$/`;

const schema = yup.object({
  fullName: yup.string().min(2, "Name must be 4 characters or more").max(15, "First Name must be less than 16 characters").required("Field is required"),
  email: yup.string().min(5).matches(emailRegex, "Invalid email").required(), 
  cardType: yup.string().required(),
  cardNum: yup.string().matches(numberRegex, "Digits only").min(16).max(16).required(),
  cardExpiryMonth: yup.number().min(1).max(12).required(),
  cardExpiryYear: yup.number().min(currentYear).max(currentYear + 8).required(),
  cardCVC: yup.string().matches(numberRegex, "Digits only").min(3).max(3).required(),
}).required();

export default function PaymentForm() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    
        function onFormSubmit(data) {
          console.log(data);
        }

    return <checkoutStyles.PaymentInfoWrapper>
        <h2>Payment info</h2>
        <checkoutStyles.PaymentInfoForm onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="fullName">Name:</label>
            <input {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <label htmlFor="email">Email address:</label>
            <input {...register("email")}/>
            <p>{errors.email?.message}</p>
            <label htmlFor="cardType">Card Type:</label>
            <select {...register("cardType")} onChange={(e) => setValue('select', e.target.value, { shouldValidate: true })} >
                <option value="" disabled selected hidden>
                --Please choose one--
                </option>
                <option value="visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <p>{errors.cardType?.message}</p>
            <label htmlFor=''>Expiry Month</label>
            <input type="number" name="" id="" />
          <input type="submit"/>
        </checkoutStyles.PaymentInfoForm>
    </checkoutStyles.PaymentInfoWrapper>
}