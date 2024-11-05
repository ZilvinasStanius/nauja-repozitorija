async function getDataFromApi() {
  const promise = await fetch(`https://randomuser.me/api/`);
  const response = await promise.json();

  const data = response.results[0];
  //   console.log(data);
  printRandomPpl(data);
}

getDataFromApi();

function printRandomPpl(data) {
  const cardElement = document.querySelector('.container');
  let html = '';
  html += `<div class="card">
          <div class="profile-picture">
            <img
              src=${data.picture.large}
              alt="profile-pic"
            />
          </div>
          <div class="info">
            <h3 class="name">${data.name.title}. ${data.name.first}</h3>
            <h3>${data.name.last}</h3>
            
          </div>
        </div>
       
        <div class="ul-container">
            <p>Info about me</p>
           
          <ul> 
            <li>Country: ${data.location.country}</li>
            <li>City: ${data.location.city}</li>
            <li>Age: ${data.dob.age}</li>
            <li>Gender: ${data.gender}</li>
            <li>Email: ${data.email}</li>
             <li>Phone: ${data.phone}</li>
            
          </ul>
        </div>`;

  cardElement.innerHTML = html;
}

const augalai = [
  'Pomidoras',
  'Agurkas',
  'Paprika',
  'Moliūgas',
  'Avokadas',
  'Morka',
];

const x = augalai.find((augalas) => augalas.includes('ika'));
/// .slice(-3) alternatyva ....

console.log(x);

const knyguTipai = [
  { id: 1, title: 'Grožinė literatūra' },
  { id: 2, title: 'Populiarioji psichologija' },
  { id: 3, title: 'Literatūra vaikams ir jaunimui' },
  { id: 4, title: 'Pomėgiai' },
  { id: 5, title: 'Šeima, sveikata' },
  { id: 6, title: 'Literatūra užsienio kalbomis' },
  { id: 7, title: 'Dalykinė literatūra' },
  { id: 8, title: 'Vadovėliai, pratybos ir knygos mokslams' },
];

const findSeven = knyguTipai.findIndex((knyga) => knyga.id === 7);
console.log(findSeven);
knyguTipai[findSeven].title = 'AAA';
console.log(knyguTipai);

const sk = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const y = sk.map((s) => ({ skaicius: s, misisipe: `${s} misisipe` }));
console.log(y);
