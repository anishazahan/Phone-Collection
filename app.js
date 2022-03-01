
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
        div.innerHTML = ` <div class="phone p-4 bg-secondary mb-3 shadow">
                <div class="img">
                <img src = "${phone.image}"></div>
                 <div class="content">
                <div class="phone-name">
                    <h5>${phone.phone_name}</h5>
                </div>
                <div class="phone-content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, perspiciatis voluptate facilis rem inventore placeat.</p>
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
  
  const showIdPhoneDetails = phone =>{
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent ='';
    const div = document.createElement('div');
  
    div.innerHTML =`<div class="row g-0 mx-auto" >
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>`
     phoneDetails.appendChild(div);
  }