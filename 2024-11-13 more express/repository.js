// funkcija kuri gauna visus userius
export async function getAllUsers() {
  const promise = await fetch('http://localhost:8000/users');
  //One example
  //   if (promise.status === 404) {
  //     console.error('Klaida-resursas nerastas');
  //   } else {
  //     const result = await promise.json();
  //     console.log(result);
  //   }

  // Second example
  try {
    if (promise.status !== 200)
      throw new Error('Atsakymas is serverio yra neigiamas');
    const result = await promise.json();
    return result;
  } catch (err) {
    console.error(`Klaida getData funkcijoje ${err}`);
  }
}

//funkcija gauti konkreciam naudotojui pagal id
export async function getUserById(id) {
  const promise = await fetch(`http://localhost:8000/users/${id}`);

  try {
    if (promise.status !== 200)
      throw new Error('Atsakymas is serverio yra neigiamas');
    const result = await promise.json();
    return result;
  } catch (err) {
    console.error(`Klaida getData funkcijoje ${err}`);
  }
}

//funkcija skirta prideti nauja naudotoja
export async function addUser(user) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const promise = await fetch(`http://localhost:8000/users/`, options);

  try {
    if (promise.status !== 201)
      throw new Error('Atsakymas is serverio yra neigiamas');
    const result = await promise.json();
    return result;
  } catch (err) {
    console.error(`Klaida getData funkcijoje ${err}`);
  }
}

//funkcija skirta istrinti naudotoja pagal id
export async function deleteUserById(id) {
  const option = { method: 'DELETE' };
  const promise = await fetch(`http://localhost:8000/users/${id}`, option);

  try {
    if (promise.status !== 204)
      throw new Error('Atsakymas is serverio yra neigiamas');
  } catch (err) {
    console.error(`Klaida getData funkcijoje ${err}`);
  }
}

//funkcija skirta atnaujint naudotoja pagal id
export async function updateUserById(id, updateData) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  };
  const promise = await fetch(`http://localhost:8000/users/${id}`, options);

  try {
    if (promise.status !== 201)
      throw new Error('Atsakymas is serverio yra neigiamas');
    const result = await promise.json();
    return result;
  } catch (err) {
    console.error(`Klaida getData funkcijoje ${err}`);
  }
}
