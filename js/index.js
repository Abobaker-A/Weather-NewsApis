const htmlDisplay = document.querySelector('#htmlDisplay') ;
const searchh = document.querySelector('#search') ;
const htmlNews = document.querySelector('#htmlNews') ;
const NewsBTN = document.querySelector('#NewsBTN') ;
const news = document.querySelector('#news') ;
const categoryBtn = document.querySelectorAll('#news button') ;
let respone =[] ;
const days =[ "Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" , "Saturday"] 
let dateNow = new Date ();
let dayIndex = dateNow.getDay()
let responeNews =[] ;
let City ='' ;
const countryName = {
"Afghanistan": "AF",
"Albania" : "AL",
"Algeria": "DZ",
"American Samoa	": "AS",
"Andorra": "AD",
"Angola": "AO",
"Anguilla": "AI",
"Antarctica": "AQ",
"Antigua and barbuda": "AG",
"Armenia": "AM",
"Argentina": "AR",
"Australia": "AU",
"Aruba": "AW",
"Azerbaijan": "AZ",
"Austria": "AT",
"Bahrain": "BH",
"Bahamas": "BS",
"Barbados": "BB",
"Bangladesh": "BD",
"Belgium": "BE",
"Belarus": "BY",
"Benin": "BJ",
"Belize": "BZ",
"Bhutan": "BT",
"Bermuda": "BM",
"Bosnia and Herzegovina": "BA",
"Bolivia": "BO",
"Bouvet Island": "BV",
"Botswana": "BW",
"Bulgaria": "BG",
"Brazil": "BR",
"Burundi": "BI",
"Burkina Faso": "BF",
"Cameroon": "CM",
"Cambodia": "KH",
"Cave Verde": "CV",
"Canada": "CA",
"Central African Republic": "CAR",
"Cayman Islands": "KY",
"Chile": "CL",
"Chad": "TD",
"Hong Kong": "HK",
"China": "CN",
"Christmas Ice Land": "CX",
"Macao Sar China": "MO",
"Comoros": "KM",
"Colombia": "CO",
"Costa Rica": "CR",
"Congo": "CG",
"Cyprus": "CY",
"Cuba": "CU",
"Denmark": "DK",
"Czech Republic": "CZ",
"Dominica": "DM",
"Djibouti": "DJ",
"Ecuador": "EC",
"Dominican Republic": "DO",
"El Salvador": "SV",
"Egypt": "EG",
"Ethiopia": "ET",
"Eritrea": "ER",
"Fiji": "FJ",
"Estonia": "EE",
"France": "FR",
"Finland": "FI",
"Gambia": "GM",
"Gabon": "GA",
"Germany": "DE",
"Georgia": "GE",
"Gibraltar": "GI",
"Ghana": "GH",
"Greenland": "GL",
"Greece": "GR",
"Guatemala": "GT",
"Grenada": "GD",
"Guinea": "GN",
"Guernsey": "GG",
"Honduras": "HN",
"Haiti": "HT",
"Iceland": "IS",
"Hungary": "HU",
"Indonesia": "ID",
"India": "IN",
"Iraq": "IQ",
"Iran": "IR",
"Ireland": "IE",
"Jamaica": "JM",
"Italy": "IT",
"Jersey": "JE",
"Japan": "JP",
"Kazakhstan": "KZ",
"Jordan": "JO",
"Korea North": "KP",
"Kenya": "KE",
"Kuwait": "KW",
"South Korea": "KR",
"Latvia": "LV",
"Lao Per": "LA",
"Madagascar": "MG",
"Luxembourg": "LU",
"Malaysia": "MY",
"Malawi": "MY",
"Mali": "ML",
"Maldives": "MV",
"Mauritania": "MR",
"Malta": "MT",
"Monaco": "MC",
"Mexico": "MX",
"Morocco": "MA",
"Mozambique": "MZ",
"Nigeria": "NG",
"Oman": "OM",
"Peru": "PE",
"Pakistan": "PK",
"Panama": "PA",
"Palestinian": "PS",
"Poland": "PL",
"Philippines": "PH",
"Qatar": "QA",
"Portugal": "PT",
"Russia": "RU",
"Romania": "RO",
"Senegal": "SN",
"Saudi Arabia": "SA",
"Somalia": "SO",
"Singapore": "SG",
"Switzerland": "CH",
"Sudan": "SD",
"Taiwan": "TW",
"Syria": "SY",
"Thailand": "TH",
"Tanzania": "TZ",
"Tunisia": "TN",
"Togo": "TG",
"Uganda	": "UG",
"Turkey": "TR",
"United Arab Emirates": "UAE",
"Ukraine": "UA",
"United States of America": "US",
"United Kingdom": "GB",
"Venezuela": "VE",
"Uruguay	": "UY",
"Yemen": "YE",
"Viet Nam": "VN",
"Zimbabwe": "ZW",
"Zambia" :	"ZM"
}
async function search(city){
   let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a78d72fd50ed4fc1a66221217222410&q=${city}&days=3`)
    let  finalres = await res.json();
    respone = finalres ;
   City = respone.location.country ;
    dispaly()
    
  News( countryName[`${respone.location.country}`] )

};
async function News(citynew , category = 'business'){
  let resNews = await fetch(`https://newsapi.org/v2/top-headlines?country=${citynew}&category=${category}&apiKey=ae0a9397e7774a70bbc1ac61397200e6`)
   let  finalresNews = await resNews.json();
   responeNews = finalresNews.articles;
   newsBtn()
   dispalyNews ()

};


searchh.addEventListener('keyup',function(){
  if(this.value.length < 3){
    search('Alex');    
  }
  else{
    search(this.value)

  }
})

function dispaly(){
  htmlDisplay.innerHTML=` <div class="row">
            
  <div class="col-4 shadow-lg bg-dark bg-opacity-75 px-0">
    
    <div class="d-flex justify-content-between bg-dark px-3 py-1"> 
      <h5 class="text-white-50">${days[dayIndex]}</h5>
      <h5 class="text-white-50">${respone.current.last_updated.split(' ').splice(0,1 ).join(' ')}</h5>
    </div>
    <div class="p-5">
      <h5 class="text-white" >${respone.location.name}</h5>
      <div class="d-flex justify-content-between py-4">
        <h2 class="text-white display-1 fw-bolder">${respone.current.temp_c}<sup>o</sup>C</h2>
        <img class="w-25 h-25" src=${'https:'+respone.current.condition.icon}  alt="Logo">
      </div>

      <p class="text-info fw-semibold fs-5">${respone.current.condition.text}</p>
      <div class="d-flex justify-content-between w-100 me-auto text-white">
        <div class="d-flex align-items-center ">
          <i class="fa-solid fa-lg px-2 fa-umbrella"></i>
          <p class="fs-5"> ${respone.current.precip_mm}%</p>
        </div>
        <div class="d-flex align-items-center  ">
          <i class="fa-solid fa-lg px-2 fa-wind"></i>
          <p class="fs-5">${respone.current.wind_kph} km/h</p>
        </div>
        <div class="d-flex align-items-center  ">
          <i class="fa-regular fa-lg px-2 fa-compass"></i>
          <p class="fs-5">${respone.current.wind_dir}</p>
        </div>
      </div>
      

    </div>
  </div>

  <div class="col-4 shadow-lg bg-dark text-center px-0  ">
    <div class="px-3 py-1 shadow-lg " > 
      <h5 class="text-white-50">${days[dayIndex+1]}</h5>
    </div>
    <div class="py-5 lh-lg">
      <img src=${'https:'+respone.forecast.forecastday[1].day.condition.icon} alt="Logo">
      <h2 class="fs-1 text-white">${respone.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>C</h2>
      <p class="fs-5 text-white">${respone.forecast.forecastday[1].day.totalprecip_mm}<sup>o</sup> </p>
      <p class="text-info fw-semibold fs-5">${respone.forecast.forecastday[1].day.condition.text}</p>
    </div>
    </div>
    <div class="col-4 shadow-lg bg-dark bg-opacity-75 text-center px-0">
    <div class="px-3 py-1 shadow-lg " > 
    <h5 class="text-white-50">${days[dayIndex+2]}</h5>
  </div>
  <div class="py-5 lh-lg">
      <img src=${'https:'+respone.forecast.forecastday[2].day.condition.icon} alt="Logo">
      <h2 class="fs-1 text-white ">${respone.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>C</h2>
      <p class="fs-5 text-white">${respone.forecast.forecastday[2].day.totalprecip_mm}<sup>o</sup> </p>
      <p class="text-info fw-semibold fs-5">${respone.forecast.forecastday[2].day.condition.text}</p>
    </div>
</div>`
}
search('Alex')

function dispalyNews (){
  let catona="";
  for (let i = 0; i < responeNews.length; i++) {
    
    catona += ` <div class="col-4">
    <div class=" shadow-lg bg-dark bg-opacity-75">
    <figure>
      <img src="${responeNews[i].urlToImage == null? "../Img/street-graffiti-DJ28KT.jpg": responeNews[i].urlToImage }" class="w-100 fixedHiImg p-3" alt="Item">
      <figcaption class="p-3">
        <h4 class="text-warning" >${responeNews[i].title.split(' ').splice(0,6 ).join(' ') }       <a class="text-decoration-none text-danger" href="${responeNews[i].url}" target="_blank" >"SeeMore"</a>
        </h4>
      </figcaption>
    </figure>
  </div>
</div>
    </div>
       `
    
  }
  htmlNews.innerHTML= catona
  breakPics()
}
function newsBtn(){
  if( responeNews == undefined || responeNews.length == 0 ){
    NewsBTN.classList.add('d-none')
    news.classList.add('d-none')
    NewsBTN.innerHTML='Know the news of this County?'
  }
  else{
    NewsBTN.classList.remove('d-none')

  }
}
NewsBTN.addEventListener('click' , function(){
  if(this.innerHTML=='Hide'){
    news.classList.toggle('d-none')
    this.innerHTML='Know the news of this County?'
  }
  else{
    news.classList.toggle('d-none')
    this.innerHTML='Hide';

  }
  

});

(function(){
  if(responeNews != null){
    for (let i = 0; i < categoryBtn.length; i++) {
      categoryBtn[i].addEventListener('click', function(){
        News(  countryName[`${City}`] , `${this.innerHTML}`)
      
      })
      
    }

  }
  
})()
function breakPics(){
  let allPics = document.images
  for (const pic of allPics) {
    pic.addEventListener('error',function(){
      pic.setAttribute("src",`../Img/street-graffiti-DJ28KT.jpg` )
    })
  }
 
}


