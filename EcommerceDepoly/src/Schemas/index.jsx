
import * as Yup from 'yup';

export const billingSchema = Yup.object({
  firstname: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .required("Please enter your first name"),

  secondname: Yup.string()
    .min(3, "Second name must be at least 3 characters")
    .max(25, "Second name must be at most 25 characters")
    .required("Please enter your second name"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),

  address: Yup.string()
    .min(20, "Address must be at least 20 characters")
    .required("Please enter your valid address"),

  city: Yup.string()
    .required("Please enter your city"),

  phone: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits")
    .required("A phone number is required"),

  
});


