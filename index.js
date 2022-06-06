if(location.pathname == '/index.html') {
  AOS.init();
}
const destinations = [
  {
    id : 1,
    name : 'Torres del Paine National Park',
    contry : 'Chile',
    decs : "There's no better way to experience Patagonia's rugged natural beauty than in Torres del Paine National Park. The UNESCO Biosphere Reserve is home to its namesake granite towers as well as sparkling lagoons and otherworldly glaciers — the park's Perito Moreno Glacier is part of the third-largest ice cap in the world.",
  },
  {
    id : 2,
    name : 'Grand Canyon',
    contry : 'Arizona',
    decs : 'Offering some of the most spectacular scenery on the planet, the Grand Canyon truly merits the term "breathtaking." The vast geologic wonderland, one mile deep and up to 18 miles across, displays countless layers of colorful rock and practically hypnotic vistas.'
  },
  {
    id : 3,
    name : 'Ha Long Bay',
    contry : 'Vietnam',
    decs : "With hundreds of jungle-covered karsts springing out of emerald green waters, Ha Long Bay is a photographer's dream. Hop on a boat or kayak to explore the UNESCO World Heritage Site's beautiful islands and surreal cave systems.",
  },
  {
    id : 4,
    name : 'Ban Gioc Waterfall',
    contry : 'Vietnam',
    decs : "This is actually the name for two waterfalls on the Quây Sơn River lying within the Unesco-listed Cao Bang Geopark in northeastern Vietnam. The falls straddle the border of Vietnam and China and measure an impressive 30m (98ft). These falls are in an extraordinarily scenic location and they are one of the few places best to see during the monsoon season between May-October, when the river’s flow is at its most powerful.",
  },
  {
    id : 5,
    name : 'Da Nang',
    contry : 'Vietnam',
    decs : "Da Nang is Vietnam’s third largest city and lies approximately 30km (19mi) north of Hoi An. This is the city you’ll fly into before driving south into the colonial town, but Da Nang is also a great city to explore. Like any coastal Vietnamese town, Da Nang’s white sand and clear water beaches are a must for beach lovers whilst the city has some fabulous nightlife too. The Dragon Bridge is illuminated at night and the whole place looks incredible from the vantage point of one of its many rooftop bars.",
  },
  {
    id : 6,
    name : 'Ha Giang',
    contry : 'Vietnam',
    decs : "This northern province shares a border with China and is home to some of the most dramatic landscapes in Vietnam. Terraced rice fields, forested limestone and granite mountains and magnificent caves are this province’s claims to fame, as well as Quan Ba pass – also known as Heaven’s gate for its panoramic views of terraced rice fields.",
  },
  {
    id : 7,
    name : 'Phu Quoc Island',
    contry : 'Vietnam',
    decs : "Phu Quoc is the largest island of Vietnam, however, surprisingly enough it’s actually located just 15 kilometers off the coast of Cambodia. When I visited this lovely little island back in 2015 it was still unspoiled, with beautiful beaches, little villages, and red dirt roads. I rented a scooter and explored the island for three days. I drove the Southern, Western and Eastern loop, which were all beautiful and showed me a different side of the island. In Duong Dong you’ll find lots of restaurants and accommodation, but also the night market which is fun to visit.",
  },

  {
    id : 8,
    name : 'Santorini, Greece',
    contry : 'europe',
    decs : "The island of Santorini is the remnants of an ancient volcano. What remains is the rim of the caldera and perched along this rim are some of the most photogenic towns in Europe. Oia is one of the most beautiful towns in Santorini. The cascades of whitewashed buildings dotted with blue dome churches and windmills form a stunning backdrop for photographers. As the sun goes down, this place looks even more magical, as the buildings glow in pinks and oranges and yellows. It’s definitely a sight to see.",
  },
  {
    id : 9,
    name : 'Prague, Czech Republic',
    contry : 'europe',
    decs : "Prague is one of the most photogenic cities in Europe. This was the only large Eastern European city to survive WWII without being destroyed by bombs. With gothic towers, ancient cathedrals, and the largest castle in the world, Prague is one of the most beautiful places to visit in Europe.",
  },
  {
    id : 10,
    name : 'Mostar, Bosnia & Herzegovina',
    contry : 'europe',
    decs : "With its cobblestone streets, old stone buildings, towers and minarets, Mostar looks like it was plucked from the pages of a fairytale. Stari Most, the unique stone bridge that spans the Neretva River, is the centerpiece of town.",
  },
  {
    id : 11,
    name : 'Lake Atitlan',
    contry : 'Guatemala',
    decs : "Lake Atitlan in the Sierra Madres offers a combination of Indigenous culture, waterside serenity, and yoga bliss. Cross the gorgeous crater lake by boat to explore the various pueblos, shop local markets for Mayan crafts, and sleep in treehouse-like accommodations.",
  },
  {
    id : 12,
    name : 'Acadia National Park',
    contry : 'Maine',
    decs : "From rocky shorelines shrouded in mist to conifer-cloaked mountainsides, Acadia is a wild place of sea, stone, and forest. Visitors flock here to hike, fish, climb, camp, and experience the end-of-the-world feel in New England's only national park.",
  },
]
let intervalId
let destinationCount = 0
let destinationIndex = 0
const destinationsContent = document.querySelector('.destinations-content')
const navWrapper = document.querySelector('.nav-wrapper')
const destinationsBtn = document.querySelector('.destinations-btn')
const destinationContainer = document.querySelector('.destination-container')

window.addEventListener('scroll' ,() =>{ 
  if(window.scrollY > 15) {
    navWrapper.classList.add('active')
  } else {
    navWrapper.classList.remove('active')
  }
})
destinationsBtn?.addEventListener('click' ,() => {
  if(destinationIndex <= destinations.length) {
    app.destinationsRenderHandle()

    destinationCount = 1
    app.destinationsRender()
  }
})
const app = {
  destinationsRenderHandle : function() {
    const htmls = `
        <a href="./destination.html" class="destination" data-index="${destinations[destinationIndex].id}" onclick="app.saveIndex(${destinations[destinationIndex].id})" data-aos="fade-${destinationIndex%2==0?'right':'left'}" data-aos-duration="500">
          <div class="destination-img" >
            <img src="./images/destination-img-${destinations[destinationIndex].id}.webp" alt="">
          </div>
          <div class="destination-info">
            <h3>
              ${destinations[destinationIndex].name}
            </h3>
            <p>
              ${destinations[destinationIndex].contry}
            </p>
          </div>
        </a>
      `
      destinationsContent.innerHTML += htmls
      destinationIndex++
  },
  destinationsRender : function() {
    intervalId = setInterval(() => {
      this.destinationsRenderHandle()
      if(destinationCount == 3) {
        clearInterval(intervalId)
      }
      destinationCount++
    }, 500);
  },
  destinationRender : function(id) {
    clearInterval(intervalId)
    const htmls = `
        <div class="destination-page">
          <h1 class="destination-name">
            ${destinations[id - 1].name}
          </h1>
          <div class="destination-content">
            <div class="destination-img">
              <img src="./images/destination-img-${destinations[id - 1].id}.webp" alt="">
            </div>
            <div class="destination-decs">
            ${destinations[id - 1].decs}
            </div>
          </div>
        </div>
      `
      destinationContainer.innerHTML = htmls
  },
  saveIndex : function(id) {
    sessionStorage.setItem('id', id) 
  },
  sliderRender : function(sliderWrapper, mainId) {
    const htmls = destinations.map((destination,i) => {
      if(destination.id !== Number(mainId)) {
        return `
        <div class="swiper-slide">
          <a href="./destination.html" class="destination" data-index="${destination.id}" onclick="app.saveIndex(${destination.id})" data-aos="fade-${destinationIndex%2==0?'right':'left'}" data-aos-duration="500">
            <div class="destination-img" >
              <img src="./images/destination-img-${destination.id}.webp" alt="">
            </div>
            <div class="destination-info">
              <h3>
                ${destination.name}
              </h3>
              <p>
                ${destination.contry}
              </p>
            </div>
          </a>
        </div>
      `
      } 
    })
    sliderWrapper.innerHTML = htmls.join('')
  } 
}

app.destinationsRender()