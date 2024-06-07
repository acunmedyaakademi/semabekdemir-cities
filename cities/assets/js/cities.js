let cities = [
  {
    city: "Adana",
    famousFor: "Kebap",
    type: "food",
    plateNumber: "01",
  },
  {
    city: "Ankara",
    famousFor: "Simidi",
    type: "food",
    plateNumber: "06",
  },
  {
    city: "İstanbul",
    famousFor: "Boğaz",
    type: "place",
    plateNumber: "34",
  },
  {
    city: "İzmir",
    famousFor: "Boyoz",
    type: "food",
    plateNumber: "35",
  },
  {
    city: "Bursa",
    famousFor: "İskender Kebabı",
    type: "food",
    plateNumber: "16",
  },
  {
    city: "Antalya",
    famousFor: "Düden Şelalesi",
    type: "place",
    plateNumber: "07",
  },
  {
    city: "Gaziantep",
    famousFor: "Baklava",
    type: "food",
    plateNumber: "27",
  },
  {
    city: "Konya",
    famousFor: "Etli Ekmek",
    type: "food",
    plateNumber: "42",
  },
  {
    city: "Trabzon",
    famousFor: "Hamsi",
    type: "food",
    plateNumber: "61",
  },
  {
    city: "Kayseri",
    famousFor: "Mantı",
    type: "food",
    plateNumber: "38",
  },
  {
    city: "Eskişehir",
    famousFor: "Lületaşı",
    type: "place",
    plateNumber: "26",
  },
  {
    city: "Rize",
    famousFor: "Çay",
    type: "food",
    plateNumber: "53",
  },
  {
    city: "Erzurum",
    famousFor: "Cağ Kebabı",
    type: "food",
    plateNumber: "25",
  },
  {
    city: "Diyarbakır",
    famousFor: "Karpuz",
    type: "place",
    plateNumber: "21",
  },
  {
    city: "Mardin",
    famousFor: "Taş Evler",
    type: "place",
    plateNumber: "47",
  },
  {
    city: "Van",
    famousFor: "Van Kedisi",
    type: "place",
    plateNumber: "65",
  },
  {
    city: "Sivas",
    famousFor: "Kangal Köpeği",
    type: "place",
    plateNumber: "58",
  },
  {
    city: "Şanlıurfa",
    famousFor: "Balıklıgöl",
    type: "place",
    plateNumber: "63",
  },
  {
    city: "Mersin",
    famousFor: "Tantuni",
    type: "food",
    plateNumber: "33",
  },
  {
    city: "Muğla",
    famousFor: "Turistik Yerleri",
    type: "place",
    plateNumber: "48",
  },
  {
    city: "Çanakkale",
    famousFor: "Tarihi Gelibolu Yarımadası",
    type: "place",
    plateNumber: "17",
  },
  {
    city: "Hatay",
    famousFor: "Antakya Mozaikleri",
    type: "place",
    plateNumber: "31",
  },
  {
    city: "İzmir",
    famousFor: "Efes Antik Kenti",
    type: "place",
    plateNumber: "35",
  },
  {
    city: "Nevşehir",
    famousFor: "Kapadokya",
    type: "place",
    plateNumber: "50",
  },
  {
    city: "Aydın",
    famousFor: "Milet Antik Kenti",
    type: "place",
    plateNumber: "09",
  },
];

let cityList = document.querySelector(".cityList");
// console.log(cityList.length);
cityList.innerHTML += `
<tr> 
 <th> City </th>
 <th> Famous For </th> 
 <th> Type </th> 
 <th> Plate Number </th> 
</tr>  
 `;
for (let i = 0; i < cities.length; i++) {
  let city = cities[i];

  cityList.innerHTML += `

<td>${city.city}</td> <td>${city.famousFor}</td> <td> ${city.type}</td> <td> ${city.plateNumber}</td> 
  `;
}

let forPlace = document.querySelector(".forPlace");
forPlace.innerHTML += `
<tr> 
 <th> City </th>
 <th> Famous For </th> 
</tr>   
 `;

for (let i = 0; i < cities.length; i++) {
  let place = cities[i];

  if (place.type === "place") {
    // console.log(place);
    forPlace.innerHTML += `
    <td>${place.city}</td> <td>${place.famousFor}</td> 
    `;
  } 
}

let famousFor = document.querySelector(".famousFor");
famousFor.innerHTML += `
<tr> 
 <th> City </th>
 <th> Famous For </th> 
</tr>   
 `;

for (let i = 0; i < cities.length; i++) {
  let famous = cities[i];
  if (famous.type === "food") {
    famousFor.innerHTML += `<td>${famous.city}</td> <td>${famous.famousFor}</td>  `;
  }
}

let doubleNum = document.querySelector(".dbNumber");
let onlyNumber = document.querySelector(".onlyNumber");
doubleNum.innerHTML += `
<tr> 
 <th> City </th>
 <th> Plate Number </th> 
</tr>  
 `;
 onlyNumber.innerHTML += `
<tr> 
 <th> City </th>
 <th> Plate Number </th> 
</tr>  
 `;


for (let i = 0; i < cities.length; i++) {

  if (cities[i].plateNumber % 2 === 0) {
    doubleNum.innerHTML += `<td data-index=${i} >${cities[i].city}</td> <td data-index=${i} >${cities[i].plateNumber}</td>  `;
  } else {
    onlyNumber.innerHTML += `<td data-index=${i} >${cities[i].city}</td> <td data-index=${i} >${cities[i].plateNumber}</td>  `;
  }
}
