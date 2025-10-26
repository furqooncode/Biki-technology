const menu = document.getElementById('menu');

function show(e) {
  menu.classList.add('show');
}
function remove(param) {
  menu.classList.remove('show')
}
menu.addEventListener('click', function (e) {
  if (e.target === menu) {
    menu.classList.remove('show')
  }
})

const products = document.getElementById('products')
fetch('data/wood.json')
.then(res => res.json())
.then(wood => {
  filtered = wood.slice(0, 3)
  filtered.forEach(item => {
    products.innerHTML += `<div class="item">
          <div class="item-image">
   <img src="${item.image}" alt="" />
          </div>
          <div class="item-location">
            <p><i class="fa-solid fa-location-dot"></i>${item.location}</p>
            <span>${item.status}</span>
          </div>
        <div class="item-info">
          <h4>${item.name} </h4>
  <h3>Price: ${item.priceRange}</h3>
  <small>•<u>${item.priceType}</u></small>
        </div>
      <div class="item-description">
        <span>${item.description}</span>
      </div>
      
      <div class="item-button">
    <a style="width:60%;" href="https://wa.me/2349013470727?text=Hello%20biki%20technology%20I%20wants%20to%20get%20this%20${item.name}%20So%20I'll%20like%20to%20let's%20negotiate%20about%20it%20and%20talk%20about%20the%20shipping%20price%20%2Cmy%20name%20is%20....."><button><i style="color:green; font-size:20px;" class="fa-brands fa-whatsapp"></i>chat on Whatsapp</button></a>
<a style="width:40%;" href="tel:09013470727"><button><i style="color: black; font-size:20px;" class="fa-solid fa-phone"></i>GIVE A CALL</button></a>
      </div>
        </div>`
  })
})
.catch(error=> {
  console.log(error)
});


/* video */
const service = document.getElementById('service')
fetch('data/video.json')
.then(res => res.json())
.then(wood => {
  filtered = wood.slice(0, 3)
  filtered.forEach(item => {
    service.innerHTML += ` <div class="item">
          <div class="item-video">
         <video src="${item.video}" controls></video>
          </div>
          <div class="item-location">
            <p>mushin Lagos</p>
            <span>Available</span>
          </div>
            <div style="height:30px" class="item-info">
          <h4>${item.name} </h4>
          </div>
        
      <div class="item-description">
        <span>${item.description}</span>
      </div>
      
      <div class="item-button">
   <a style="width:60%;" href="https://wa.me/2349013470727?text=Hello%20biki%20technology%20I%20wants%20to%20get%20this%20${item.name}%20So%20I'll%20like%20to%20let's%20negotiate%20about%20it%20and%20talk%20about%20the%20shipping%20price%20%2Cmy%20name%20is%20....."><button><i style="color:green; font-size:20px;" class="fa-brands fa-whatsapp"></i>chat on Whatsapp</button></a>
<a style="width:40%;" href="tel:09013470727"><button><i style="color: black; font-size:20px;" class="fa-solid fa-phone"></i>GIVE A CALL</button></a>
      </div>
        </div>`
  })
})
.catch(error=> {
  console.log(error)
});















function go(e) {
  e.preventDefault();

const noti = document.getElementById('alert');
const note = document.getElementById('note');
const roll = document.getElementById('roll');
const success = document.getElementById('success');


noti.classList.add('show');
note.textContent = 'Sending...'
  
  let mail = {
    name: document.getElementById('firstname').value + ' ' + document.getElementById('secondname').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value + '...you can call us on' + ' ' + document.getElementById('number').value,
    email: document.getElementById('email').value,
  };

  emailjs.send("service_znlvjau", "template_hh17iuk", mail)
    .then(() => {
      roll.style.display = 'none';
      success.style.display = 'block';
      note.innerHTML = `<h3>SENT SUCCESSFUL</h3>`
      
      setTimeout(()=> {
        noti.classList.remove('show');
      },3000)
const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(field => {
        field.value = ''
     })
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    alert('not sent')
    });
}


function morepro(){
  window.location.href = 'views.html'
}

function morevid(){
  window.location.href = 'video.html'
}