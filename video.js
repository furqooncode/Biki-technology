function back(param) {
  window.location.href = 'index.html'
}


const service = document.getElementById('service')
fetch('data/video.json')
.then(res => res.json())
.then(wood => {
  filtered = wood.slice(0, 15)
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

/* images */
const serviceImg = document.getElementById('serviceImg')
fetch('data/video.json')
.then(res => res.json())
.then(wood => {
  filtered = wood.slice(15, 18)
  filtered.forEach(item => {
    serviceImg.innerHTML += ` <div class="item">
          <div class="item-image">
         <img src="${item.image}" alt="">
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