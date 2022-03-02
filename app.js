
// .......adding onclick function in search-button.........

document.getElementById('viewBtn').style.display = "none";
const searchButton= () =>{

  
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    document.getElementById('phone-details').textContent = "";
    // const inputError = document.getElementById('input-error');
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
        fetch (url)
        .then(res => res.json())
        .then(data =>loadingPhones(data.data));
        // inputError.innerText = "";
}


// .......load phone collection.........

const loadingPhones = (phones) => {
    // console.log(phones);
    const phoneResults = document.getElementById('show-phones');
    phoneResults.textContent = '';

    if( phones.length === 0){
      document.getElementById('input-error').innerText ="No result found"
       
    }else{
      
      phones.slice(0,20).forEach(phone => {
        
        console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.innerHTML = ` <div class="phone p-4 border mb-3 shadow">
                <div class="img">
                <img src = "${phone.image}"></div>
                 <div class="content">
                <div>
                    <h5  class="phone-name my-2">${phone.phone_name}</h5>
                </div>
                <div>
                    <p  class="phone-brand">Brand:${phone.brand}</p>
                </div>
                <button class = "details-btn" onclick = "phoneDetails('${phone.slug}')">Show Details</button>
                </div>
                </div>`
                phoneResults.appendChild(div);
               
      });
      document.getElementById('input-error').innerText ="";
      document.getElementById('viewBtn').style.display ="block"
       
    }

    document.getElementById('viewBtn').addEventListener('click',function(){
      phones.slice(21,phones.length).forEach(phone => {
        
        console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.innerHTML = ` <div class="phone p-4 border mb-3 shadow">
                <div class="img">
                <img src = "${phone.image}"></div>
                 <div class="content">
                <div>
                    <h5  class="phone-name my-2">${phone.phone_name}</h5>
                </div>
                <div>
                    <p  class="phone-brand">Brand:${phone.brand}</p>
                </div>
                <button class = "details-btn" onclick = "phoneDetails('${phone.slug}')">Show Details</button>
                </div>
                </div>`
                phoneResults.appendChild(div);
               
      });

    })

   
   


}

// .......load phone details.........

const phoneDetails = (idDetails) =>{
    // console.log(idDetails);
    const url =  `https://openapi.programming-hero.com/api/phone/${idDetails}`
    fetch (url)
    .then(res => res.json())
    .then(data => showIdPhoneDetails(data.data))
  }
  

  // .......show phone details.........


  
  const showIdPhoneDetails = phone =>{
   
    const phoneDetails = document.getElementById('phone-details');
    const others = phone.others;
    
    phoneDetails.textContent ='';
    const div = document.createElement('div');
    div.classList.add("col-md-6");
    div.classList.add("mx-auto");
  
    div.innerHTML =`<div class="card card-details shadow border">
            <div class="text-center">
            <img src="${phone.image}" class="img-fluid rounded-start details-img" alt="...">
            </div>
            <h5 class="phone-name">${phone.name}</h5>
             <p  class="phone-brand">Brand:${phone.brand}</p>
            <h5 class="feature-tittle">MainFeatures</h5>
            <div class="top-features">
        <p class="feature">ReleaseDate: ${phone.releaseDate? phone.releaseDate:"Upcoming."}</p>
          <p class="feature">DisplaySize: ${phone.mainFeatures.displaySize}</p>
            <p class="feature">ChipSet: ${phone.mainFeatures.chipSet}</p>
          <p class="feature">Memory: ${phone.mainFeatures.memory}</p>
          <p class="feature">Sensors: ${phone.mainFeatures.sensors.toString()}</p>
          <p class="feature-tittle">Other Features:${others == null? "No others data.":Object.entries(others)}</p>
        
        </div>
              

        </div>`
     phoneDetails.appendChild(div);
     
  }





















//   <div class="col-md-4">
//   <img src="${phone.image}" class="img-fluid rounded-start details-img" alt="...">
// </div>
// <div class="col-md-8 ">
//   <div class="card-body">
//     <h5 class="phone-name">${phone.name}</h5>
//     <p  class="phone-brand">Brand:${phone.brand}</p>
//     <h5 class="feature-tittle">MainFeatures</h5>
//     <div class="top-features">
//       <p class="feature">ReleaseDate:${phone.releaseDate}</p>
//       <p class="feature">DisplaySize:</p>
//       <p class="feature">ChipSet:</p>
//       <p class="feature">memory:</p>
//       <p class="feature">Sensors:${phone.mainFeatures.sensors.toString()}</p>

//     </div>
//   </div>
// </div>
// </div>
// <div class="other-features">
//   <h5 class="feature-tittle">Other Features</h5>
  // <div class="top-features">
  //     <p class="feature">WLAN:</p>
  //     <p class="feature">Bluetooth:</p>
  //     <p class="feature">GPS:</p>
  //     <p class="feature">NFC:</p>
  //     <p class="feature">Radio:</p>
  //     <p class="feature">USB:</p>
  //   </div>
// </div>