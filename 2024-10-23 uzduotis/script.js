async function getDataFromApi() {
  const promise = await fetch(`https://randomuser.me/api/`);
  const response = await promise.json();

  const data = response.results[0];
  console.log(data);
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
            <h3 class="name">${data.name.title} ${data.name.first}</h3>
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
