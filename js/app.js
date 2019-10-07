let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  render();
}

function render() {
  var html = ``;

  // document.getElementById('books').innerHTML('');
  document.getElementById("no-books").style.display = 'none'; // table-row;

  let table = document.getElementById('books-list');

  if (myLibrary.length > 0) {
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      console.log(book);

      let tr = table.insertRow(-1);
      tr.classList.add('book');

      let td0 = tr.insertCell(0);
      let td1 = tr.insertCell(1);
      let td2 = tr.insertCell(2);

      td0.innerHTML = book.title;
      td1.innerHTML = book.author;
      td2.innerHTML = book.pages;

      // let li = `
      // <li>
      //   <div>
      //     ${myLibrary[i].title}
      //     <small>${myLibrary[i].author}</small>
      //     <small>${myLibrary[i].pages}</small>
      //   </div>
      // </li>
      // `;
      //
      // document.getElementById('books').append(li);
    }
  } else {
    document.getElementById("no-books").style.display = 'none'; // table-row;
  }

}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let elements = this.elements;
  let payload = {};
  for(let i=0; i < elements.length; i++) {
    if (elements[i].type !== 'submit') {
      let nameOfElement = elements[i].name;
      let valueOfElement = elements[i].type == 'number' ? parseInt(elements[i].value) : elements[i].value;
      let elementIsChecked = elements[i].checked;

      payload[nameOfElement] = valueOfElement;
    }
  }

  let book = new Book(
    payload.title,
    payload.author,
    payload.pages
  );

  addBookToLibrary(book);
});


// document.getElementById('add-book').addEventListener('click', function(e) {
//   e.preventDefault();
//
//
// });
