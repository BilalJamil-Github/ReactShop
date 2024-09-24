import React, { useState, useEffect } from 'react';
import './Checkout.css';
import '../Cart/Cart.css';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { billingSchema } from '../../Schemas';
import swal from 'sweetalert2'


function Checkout() {
  const [usercart, setUserCart] = useState([]);
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;
  useEffect(()=>{
    window.scrollTo(0, 0);
  } , [])
  

  const formik = useFormik({
   initialValues: {
     firstname: '',
     secondname: '',
     address: '',
     city: '',
     phone: '',
     emailaddress: '',
     deliveryMethod: '',
     
   },
   validationSchema: billingSchema,
   onSubmit: (values) => {
     if (Object.keys(formik.errors).length === 0) {
       console.log('Form submitted successfully', values);
       swal.fire({
        title: 'Order Successful!',
        text: 'Your order has been placed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
       })
     } else {
       console.log('Form has validation errors', formik.errors);
     }
   },
 });
  

  useEffect(() => {
    let cart = localStorage.getItem('Cart');
    if (cart) {
      cart = JSON.parse(cart);
      setUserCart(cart);
    }
  }, []);

  

  return (
   <>   
   <h1 id='main_heading'>Check-Out</h1>
    <div id='main-div'>
      <div id='left-box'> 
         <form action="" onSubmit={formik.handleSubmit}>
         <h2 className='checkout_headings'>Contact</h2>
         <input 
              type="text"
              className='inputfield'
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null}

         <h2 className='checkout_headings'>Delivery</h2>
         <div className='gather'>
         
         <input
          className='inputfield combination'
          type="text"
          name='firstname' 
          placeholder='First Name'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />

         <input 
         className='inputfield combination'
         id='second'
         name='secondname'
         type="text"
         placeholder='Second Name'
         value={formik.values.secondname}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         />
         </div>
   
         <input 
         className='inputfield combination'
         id='address'
         name='address'
         type="text"
         placeholder='Address' 
         value={formik.values.address}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} />
           {formik.touched.address && formik.errors.address ? <p className='error'>{formik.errors.address}</p> : null}
         
         
         
         <input  className='inputfield combination'
         id='city'
         name='city'
         type="text"
         placeholder='City' 
         value={formik.values.city}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} />
         {formik.touched.city && formik.errors.city ? <p className='error'>{formik.errors.city}</p> : null}



         <input
         className='inputfield'
         id='phone'
         name='phone'
         type="text"
         placeholder='phone number' 
         value={formik.values.phone}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} />
         {formik.touched.phone && formik.errors.phone ? <p className='error'>{formik.errors.phone}</p> : null}


         <h2 className='checkout_headings'>Payment Method</h2>
         <input className='inputfield' type="text" placeholder='Cash On Delivery' value={"Cash on Delivey"} disabled readonly name="" id="" />
         <button id='btn'>Complete Order</button>
         </form>
       </div>

      <div id='right-box'>
        <table id="table">
          <tbody>
            {usercart.map((item, index) => (
              <tr key={index}>
                <td style={{ display: 'flex' }}>
                  <img id='img' src={item.image} alt="" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span id='itemname'>{item.name} [{item.size}]</span>
                    <span id='itemname'>Quantity: {item.quantity}</span>
                    <span id='itemname'>Price: {item.price}</span>
                  </div>
                </td>
                <td>{item.quantity * item.price} PKR</td>
              </tr>
            ))}
            <tr>
              <td>Total:</td>
              <td>{totalAmount} PKR</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id='mobiletable'>
                     {
                        usercart.map((item , index)=>(
                           <div className='centerM'>
                        <div className='leftM'>
                             <img className='img' src={item.image} alt="" />
                         </div>
                       <div className='rightM'>
                       <div>
                           <b><span>{item.name}</span></b>
                         </div>
                         <div>
                           <span>Price  :</span>
                           <span>{item.price}</span>
                         </div>
                         <div>
                           <span>Quantity  :</span>
                           <div id='functionalholder'>
                              <span className='value' id='center'>  {item.quantity} </span>
                              </div>
                         </div>
                         <div>
                           <span>Total  :</span>
                           <span>{item.price * item.quantity}</span>
                         </div>
                       </div>
                       
                     </div>
                        ))
                     }
                     <div id='mobileline'></div>
                     <div id='bottombox'>
                     <span>Total: </span> <span>Rs. {totalAmount}</span>
                     </div>
                </div>
    </> 
  );
}

export default Checkout;
