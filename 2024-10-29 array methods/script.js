async function main() {
  const promise = await fetch(
    'https://randomuser.me/api/?results=50&nat=au,gb,us'
  );
  const response = await promise.json();

  const peopleArray = response.results;

  //   console.log(peopleArray);

  const newObj = peopleArray.map((resp) => ({
    firstName: resp.name.first,
    lastName: resp.name.last,
    country: resp.location.country,
    city: resp.location.city,
    email: resp.email,
    dateOfBirth: resp.dob.date,
    phone: resp.phone,
    nat: resp.nat,
  }));
  console.log(newObj);
  //rikiavimas pagal zmogaus varda
  newObj.sort((personA, personB) => {
    // return priema reiksmes -1(dabartinis pA turi eiti anskciau nei pB)
    // 0 reikisa pA ir pB yra lygeverciai
    // 1 kai person A turetu but toliau eileje nei pB
    const personAName = personA.firstName;
    const personBName = personB.firstName;
    if (personAName > personBName) return 1;
    if (personAName < personBName) return -1;
    return 0;
  });
  console.log(newObj);
}

main();
