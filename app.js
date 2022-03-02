
// .......adding onclick function in search-button.........


const searchButton= () =>{

    // console.log(hellow);
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputError = document.getElementById('input-error');
    // console.log(inputText);

    // if(inputText === "number" || inputText =="" || inputText <=0){
    //     inputError.innerText = "No Results Found";
    //     inputField.value = '';
    //     inputField.textContent ='';
       
    // }

        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
        fetch (url)
        .then(res => res.json())
        .then(data =>loadingPhones(data.data));
    //    console.log(data);
        // inputError.innerText = "";
    
    
}


// .......load phone collection.........

const loadingPhones = (phones) => {
    // console.log(phones);
    const phoneResults = document.getElementById('show-phones');
    // phoneResults.textContent = '';

    for(const phone of phones){
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
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
    }


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


  // const detailsContainer = document.getElementById('phone-details').style.display = 'none';
  const showIdPhoneDetails = phone =>{
    // console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    // phoneDetails.textContent ='';
    const div = document.createElement('div');
  
    div.innerHTML =` <div class="dismiss-btn-parent mt-0">
                <button class="dismiss-btn" id="dismiss">x</button>
            </div>
            <div class="row" >
              <div class="col-md-4">
                  
                <img src="${phone.image}" class="img-fluid rounded-start details-img" alt="...">
              </div>
              <div class="col-md-8 ">
                <div class="card-body">
                  <h5 class="phone-name">${phone.name}</h5>
                  <p  class="phone-brand">Brand:${phone.brand}</p>
                  <h5 class="feature-tittle">MainFeatures</h5>
                  <div class="top-features">
                    <p class="feature">ReleaseDate:${phone.releaseDate}</p>
                    <p class="feature">DisplaySize:</p>
                    <p class="feature">ChipSet:</p>
                    <p class="feature">memory:</p>
                    <p class="feature">Sensors:</p>
                    <p class="feature">()</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="other-features">
                <h5 class="feature-tittle">Other Features</h5>
                <div class="top-features">
                    <p class="feature">WLAN:</p>
                    <p class="feature">Bluetooth:</p>
                    <p class="feature">GPS:</p>
                    <p class="feature">NFC:</p>
                    <p class="feature">Radio:</p>
                    <p class="feature">USB:</p>
                    
                  </div>

            </div>`
     phoneDetails.appendChild(div);
  }