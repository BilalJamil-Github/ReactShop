import React, { useEffect, useState } from 'react'
import data from '../data.json';
import { useParams } from 'react-router';
import { renderStars } from '../Home/Home';
import './Productbox.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

function Productbox() {
 const { name } = useParams();  
 const currentProduct = data.filter(product => product.name == name)
 let imageArray = [currentProduct[0].image1 , currentProduct[0].image2]
 let [currentDisplayimage , setcurrentDisplayimage] = useState(`${imageArray[0]}`);
 let [quantity , setquantity] = useState(1);
 let [selectedSize , setselectedSize] = useState('S')
 let [SizesArray , SetSizesArray] = useState(['XS' ,'S' , 'M' , 'L' , 'XL'])
 let [displayBIN , setdisplayBIN] = useState(true);
 let [supportingElement , setsupportingElement] = useState(false);


 useEffect(()=>{
  window.scrollTo(0, 0);
  let Cart = localStorage.getItem('Cart')
   if (!Cart) {
    localStorage.setItem('Cart', JSON.stringify([]));
   }
  Array.from(document.querySelectorAll('sizes'))
  .map((size)=>{
    size.classList.remove('selected')
    console.log(size)
})
} , [])

useEffect(()=>{
   let Cart = localStorage.getItem('Cart')
   if (!Cart) {
    localStorage.setItem('Cart', JSON.stringify([]));
   }
   Cart = Array.from(Cart)
   if(Cart!=null){
      setdisplayBIN(false) 
   }
} , [supportingElement])



const valuation = (condition)=>{
   if(condition == "increment"){
        setquantity(previousQuantity => previousQuantity + 1)
   }else{
        if(quantity>1){
           setquantity(previousQuantity => previousQuantity - 1)
        }
   }
}

 const changeSelected = (element)=>{
     setselectedSize(element)
 }

 const AdditionInCart = () => {
  let Cart = localStorage.getItem('Cart');
  if (Cart) {
      try {
          Cart = JSON.parse(Cart);
      } catch (error) {
          console.error('Error parsing Cart JSON:', error);
          Cart = [];
      }
  } else {
      
      Cart = [];
  }

  let orderObj = {
      id: currentProduct[0].id,
      name: currentProduct[0].name,
      price: currentProduct[0].price,
      quantity: quantity,
      size: selectedSize,
      image: currentProduct[0].image1
  };

  const foundElement = Cart.find(element => element.id === orderObj.id && element.size === orderObj.size);

  if (foundElement) {
      Cart = Cart.map((element) => {
          if (element.id === foundElement.id && element.size === foundElement.size) {
              element.quantity += orderObj.quantity;
          }
          return element;
      });
  } else {
      Cart.push(orderObj);
  }

  localStorage.setItem('Cart', JSON.stringify(Cart));

  setsupportingElement(!supportingElement);

  toast.success('Product added to cart!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
  });
};



  return (
    <div id='main'>
         <div id='upperpart'>
           <div id='image_container'>
               <div id='mini_images'>
                   <img className='mini' onClick={()=>{setcurrentDisplayimage(`${imageArray[0]}`)}} src={`${currentProduct[0].image1}`} alt="" srcset="" />
                   <img className='mini' onClick={()=>{setcurrentDisplayimage(`${imageArray[1]}`)}}  src={`${currentProduct[0].image2}`} alt="" srcset="" />
               </div>
               <div id='large_image'>
                   <img className='large' src={currentDisplayimage} alt=""  />
               </div>
           </div>
           <div id='content_container'>
      <ToastContainer  className="toastContainer"/>
                <span id='Heading'>{currentProduct[0].name}</span>
                <span id='Price' className='colored'>{currentProduct[0].price} PKR</span>
                <span id='Star'>{renderStars(currentProduct[0].rating)} {currentProduct[0].rating}/5</span>
                <span id='Price'>Description: </span>
                <span id='Description'>{currentProduct[0].description}</span>
                <span id='Price'>Size: </span>
                <div id='size_box'>
                    {
                      SizesArray.map((element)=>{
                        if(element==selectedSize){
                          return <span className='sizes selected' value={element}>{element}</span>
                        }
                          return <>
                           <span className='sizes' value={element} onClick={()=>{changeSelected(element)}}>{element}</span>
                          </>
                      })
                    }
                </div>
                <span id='Price'>Quantity:</span>
                 <div id='QuantityBox'>
                    <span className='boxes minus' onClick={()=>{valuation("decrement")}}> - </span>
                    <span className='boxes quantity'> {quantity} </span>
                    <span className='boxes plus' onClick={()=>{valuation("increment")}}> + </span>
                 </div>
                 <div id='btnsController'>
                     <button className='btns' onClick={()=>{AdditionInCart()}}>Add to Cart</button><br/>
                 </div>
           </div>
         </div>
    </div>
  )
}

export default Productbox
