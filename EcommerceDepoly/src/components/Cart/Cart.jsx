import React, { useEffect, useState } from 'react';
import './Cart.css';
import { NavLink } from 'react-router-dom';

function Cart() {
   let [usercart, setUserCart] = useState([]);
   let [Total , setTotal] = useState(0)
   useEffect(()=>{
      window.scrollTo(0, 0);
    } , [])
   

   useEffect(() => {
      let cart = localStorage.getItem('Cart');
      if (cart) {
         cart = JSON.parse(cart);
         setUserCart(cart);
      }
   }, []);


   const increment = (index , size)=>{
      let cart = localStorage.getItem('Cart')
      cart = JSON.parse(cart)
      const updatedCart = cart.map((item)=>{
         if(item.id === index || item.size === size){
           return {...item, quantity: item.quantity+1}
         }
         return item
      })
      setUserCart(updatedCart);
      localStorage.setItem("Cart" , JSON.stringify(updatedCart))
   }


   const decrement = (index , size)=>{
      let cart = localStorage.getItem('Cart')
      cart = cart ? JSON.parse(cart) : []
      const updatedCart = cart.map((item)=>{
         if(item.id === index || item.size === size){
            return {...item, quantity: item.quantity > 1 ? item.quantity-1 : item.quantity}
         }
         return item
      })
      setUserCart(updatedCart);
      localStorage.setItem("Cart" , JSON.stringify(updatedCart))
   }
 

  useEffect(()=>{
   let cart = localStorage.getItem('Cart');
   cart = cart ? JSON.parse(cart) : []
   let total = 0;
   if(cart){
      total = Array.isArray(cart) ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
   }
  setTotal(total)

  }, [usercart])


   const removeItem = (index , size) => {
      let cart = localStorage.getItem('Cart')
      cart = JSON.parse(cart)
      console.log("Your index = " , index , "Your Size = " , size)
      const updatedCart = cart.filter((item, i) => !(item.id == index && item.size == size));
      console.log("Updated Cart = ", updatedCart)
      setUserCart(updatedCart);
      localStorage.setItem('Cart', JSON.stringify(updatedCart));
      
   };



   return (
      <div className="cart-container">
          {console.log(usercart)}
         {usercart.length === 0  ? (
          <>
            <div className='empty-cart-div'>
            <h1 className="empty-cart">Your cart is empty</h1>
            </div>
         </>
         ) : (
            <div id="content_holder">
               <span id='headings'>Your Cart</span>
               <table id="table">
                  <thead>
                     <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     { 
                     usercart.map((item, index) => (
                        <tr key={index}>
                           <td>
                              <img id='img' src={item.image} alt="" />
                              <span id='itemname'>{item.name} [{item.size}]</span>
                           </td>
                         
                            <td >
                              <div id='functionalholder'>
                              <button className='functionalbtn' onClick={()=>{decrement(item.id , item.size)}}>-</button>
                              <span className='value'>  {item.quantity} </span>
                              <button className='functionalbtn' onClick={()=>{increment(item.id , item.size)}}>+</button>
                              </div>
                             
                              </td>
                           <td>{item.price} PKR</td>
                           <td>{item.quantity * item.price} PKR</td>
                           <td onClick={()=>{removeItem(item.id , item.size)}}>
                           <svg className='mysvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                           </td>
                        </tr>
                     ))}
                     <tr>
                        <td></td>
                        <td></td>
                        <td>Total: </td>
                        <td>{Total} PKR</td>
                        <td></td>
                     </tr>
                  </tbody>
               </table>
               <div id='mobiletable'>
                     {
                        usercart.map((item , index)=>(
                           <div className='centerM'>
                        <div className='leftM'>
                             <img className='img' src={item.image} alt="" />
                         </div>
                       <div className='rightM'>
                       <div>
                           <b><span>{item.name} [{item.size}] </span></b>
                         </div>
                         <div>
                           <span>Price  :</span>
                           <span>{item.price}</span>
                         </div>
                         <div>
                           <span>Quantity  :</span>
                           <div id='functionalholder'>
                              <button className='functionalbtn' onClick={()=>{decrement(item.id)}}>-</button>
                              <span className='value'>  {item.quantity} </span>
                              <button className='functionalbtn' onClick={()=>{increment(item.id)}}>+</button>
                              </div>
                         </div>
                         <div>
                           <span>Total  :</span>
                           <span>{item.price * item.quantity}</span>
                           <span><td onClick={()=>{removeItem(item.id , item.size)}}>
                           <svg className='mysvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                           </td></span>
                         </div>
                          <div>
                          
                          </div>
                       </div>
                     </div>
                        ))
                     }
                </div>
            </div>
         )}

    {
      usercart.length !== 0 ? 
 <div className='left_part'>
   <NavLink to="/checkout"  state={{ totalAmount: Total }}>
   <button className='bttn' type='submit'>PROCEED TO CHECKOUT - {Total} PKR</button>
   </NavLink>
</div>: <></>
    }
      </div>
   );
}

export default Cart;
