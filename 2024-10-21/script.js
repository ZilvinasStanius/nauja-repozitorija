Promise.all([
  fetch('https://in3.dev/knygos/').then((resp) => resp.json()),
  fetch('https://in3.dev/knygos/types/').then((resp) => resp.json()),
]).then(([data1, data2]) => {
  console.log(data2);
  printBookinHtml(data1, data2);
});

function printBookinHtml(data1, data2) {
  const ulElement = document.querySelector('.knyguLentele');
  let html = '';

  for (const book of data1) {
    const sameID = data2.find((item) => item.id === book.type);

    const date = new Date(book.time * 1000);

    console.log(sameID.title);

    html += `<li class="book-item">
            <img src="${book.img}" alt="${book.title}">
            <div class="book-details">
              <h3>${book.title}</h3>
              <p>Autorius: ${book.author}</p>
              <p>Kaina:  ${book.price} </p>
              <p>Kategorija:  ${sameID.title} </p>
              <p>Data:  ${date.toLocaleDateString()} </p>
            </div>
          </li>
        `;
  }
  ulElement.innerHTML = html;
  return html;
}
