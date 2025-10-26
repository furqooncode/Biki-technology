function back (param) {
  window.location.href = 'index.html'
}

const nameInput = document.getElementById('name'); // search input
const products = document.getElementById('products');
let allWoods = [];

// Fetch the JSON data once
fetch('data/wood.json')
  .then(res => res.json())
  .then(wood => {
    allWoods = wood;
    displayProducts(allWoods); // show all by default
  })
  .catch(error => {
    console.error('Error loading woods:', error);
    products.innerHTML = 'Oops, something went wrong loading products 😢';
  });

// Function to display woods
function displayProducts(list) {
  products.innerHTML = ''; // clear before displaying

  list.forEach(item => {
    products.innerHTML += `
      <div class="item">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}" />
        </div>

        <div class="item-location">
          <p><i class="fa-solid fa-location-dot"></i> ${item.location}</p>
          <span>${item.status}</span>
        </div>

        <div class="item-info">
          <h4>${item.name}</h4>
          <h3>Price: ${item.priceRange}</h3>
          <small>• <u>${item.priceType}</u></small>
        </div>

        <div class="item-description">
          <span>${item.description}</span>
        </div>

        <div class="item-button">
          <a style="width:60%;" 
             href="https://wa.me/2349013470727?text=Hello%20biki%20technology%20I%20want%20to%20get%20this%20${item.name}%20so%20I'd%20like%20to%20negotiate%20about%20it%20and%20talk%20about%20the%20shipping%20price.%20My%20name%20is%20.....">
             <button>
               <i style="color:green; font-size:20px;" class="fa-brands fa-whatsapp"></i>
               Chat on Whatsapp
             </button>
          </a>

          <a style="width:40%;" href="tel:09013470727">
            <button>
              <i style="color:black; font-size:20px;" class="fa-solid fa-phone"></i>
              Give a Call
            </button>
          </a>
        </div>
      </div>
    `;
  });
}

// Filter when typing in input
nameInput.addEventListener('input', e => {
  const searchTerm = e.target.value.toLowerCase().trim();

  // if empty => show all
  if (searchTerm === '') {
    displayProducts(allWoods);
    return;
  }

  // filter
  const filtered = allWoods.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  // show filtered (empty container if none)
  displayProducts(filtered);
});
