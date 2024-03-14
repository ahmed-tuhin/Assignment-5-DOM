const allBtn = document.getElementsByClassName('add-btn');

for( const btn of allBtn){
    btn.addEventListener('click',function(event){
        const seatNumber =event.target.innerText;

        
       
       
         
   
       const price =document.getElementById('ticket-fare').innerText;

       const economy = document.getElementById('economy').innerText;

       const selectedContainer = document.getElementById('selected-seat-container')
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
    
    })
}

function getPrice(){
    const price =document.getElementById('ticket-fare');
    console.log(price.innerText);
}




function getConvertedValue(id){
    const seat = document.getElementById(id).innerText;
    const convertedSeatNumber = parseInt(seat);
    return convertedSeatNumber;
    
}




