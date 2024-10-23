async function getDataFromApi() {
  const promise = await fetch(`https://randomuser.me/api/`);
  const response = await promise.json();

  const data = response.results[0];
  console.log(data);
  printRandomPpl(data);
}

getDataFromApi();

function printRandomPpl(data) {
  const cardElement = document.querySelector('.card');
  let html = '';
  html += `<div class="profile-picture">
          <img
            src=${data.picture.medium}
            alt="profile-pic"
          />
        </div>
        <div class="headline-info">
          <h1>${data.name.title} ${data.name.first} ${data.name.last}</h1>
          <h3>Gender : ${data.gender.toUpperCase()}</h3>
          <h3>Age: ${data.dob.age}</h3>
        </div>
        <hr />
        <div class="detailed-info">
          <ul>
            <li>City:${data.location.city}</li>
            <li>Country:${data.location.country}</li>
            <li>State: ${data.location.state}</li>
            <li>Email : ${data.email}</li>
          </ul>
        </div>`;

  cardElement.innerHTML = html;
}
