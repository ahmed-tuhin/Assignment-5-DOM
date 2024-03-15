const allBtn = document.getElementsByClassName('add-btn');

for( const btn of allBtn){
    btn.addEventListener('click',function(event){
        const seatNumber =event.target.innerText;

        
       
       
         
   
       const price =document.getElementById('ticket-fare').innerText;

       const economy = document.getElementById('economy').innerText;

       const selectedContainer = document.getElementById('selected-seat-container')
       
      event.target.setAttribute('disabled',false);
      
   

      const totalSeatCount = getConvertedValue('selected-seat-number')
       if(totalSeatCount+1>4){
           alert('You cant select more than 4 seats');
           return;
       }
       event.target.style.backgroundColor = '#1DD100'




       const seatCount = getConvertedValue('selected-seat-number');
       document.getElementById('selected-seat-number').innerText = seatCount+1;
    
       const seatLeft = getConvertedValue('seat-left')
       document.getElementById('seat-left').innerText = seatLeft-1;
    
 
      
    

    
       const div = document.createElement('div')

       div.classList.add('flex','justify-between','bg-[#F7F8F8]','rounded-3xl','my-5')
   
    
       const p1 = document.createElement('p')
       const p2 = document.createElement('p')
       const p3 = document.createElement('p')
    
       p1.innerText = seatNumber;
       p2.innerText = economy;
       p3.innerText = price;
     
       div.appendChild(p1)
       div.appendChild(p2)
       div.appendChild(p3)
       selectedContainer.appendChild(div)

       
       getPrice()
       updateTotalCost(price)
       updateGrandTotal()
      
    })
}
 

function updateGrandTotal(status){
    const totalCoast = getConvertedValue('total-cost');
    if(status==undefined){
       
        document.getElementById('grand-total').innerText = totalCoast;
    }
    else{
       const couponCode = document.getElementById('coupon-code').value;
       if(couponCode =='NEW15'){
        const discountedPrice = totalCoast * .15;
        console.log(discountedPrice);
        document.getElementById('grand-total').innerText =totalCoast - discountedPrice;
       }
       else if(couponCode=='Couple 20'){
        const discountedPrice = totalCoast * .2;
        console.log(discountedPrice);
        document.getElementById('grand-total').innerText =totalCoast - discountedPrice;
       }
       else{
        alert('Please enter a valid coupon code')
       }

    }

   

}

  
  function updateTotalCost(value){
    
   const totalCoast = getConvertedValue('total-cost');
   const sum = totalCoast+parseInt(value);
   document.getElementById('total-cost').innerText = sum;
  
   
  }



function getPrice(){
    const price =document.getElementById('ticket-fare');
    return price;
}




function getConvertedValue(id){
    const seat = document.getElementById(id).innerText;
    const convertedSeatNumber = parseInt(seat);
    return convertedSeatNumber;
    
}




