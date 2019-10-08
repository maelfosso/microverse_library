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

function removeBookToLibray(idx) {
  console.log("REMOVE ", idx);
  myLibrary.splice(idx, 1);

  let table = document.getElementById('books-list');
  table.deleteRow(+idx + 2);

  render();
}

function render() {
  var html = ``;

  // document.getElementById('books').innerHTML('');
  document.getElementById("no-books").style.display = 'none'; // table-row;

  let table = document.getElementById('books-list');

  console.log(myLibrary);
  if (myLibrary.length > 0) {
    document.getElementById("no-books").style.display = 'none'; // table-row;
    console.log("ROWS... ", table.rows);
    // Delete all the table row if exists
    while (table.rows.length > 2) {
      table.deleteRow(2);
    }

    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      console.log(book);

      let tr = table.insertRow(-1);
      tr.classList.add('book');

      let td0 = tr.insertCell(0);
      let td1 = tr.insertCell(1);
      let td2 = tr.insertCell(2);
      let td3 = tr.insertCell(3);

      td0.innerHTML = book.title;
      td1.innerHTML = book.author;
      td2.innerHTML = book.pages;
      td3.innerHTML = `<button id='book-${i}' data-book-idx='${i}'>Delete</button>`;
    }
  } else {
    document.getElementById("no-books").style.display = 'table-row'; // block
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

  // document.getElementById("myForm").reset();
  this.reset();

  addBookToLibrary(book);
});

document.addEventListener("click", function(e) {
  if (e.target && e.target.id.startsWith("book-")) {
    console.log(e.target);

    let bookIdx = e.target.dataset.bookIdx;

    removeBookToLibray(bookIdx);
  }
});

let allButtons = document.querySelectorAll("button[id^='book-']");
for (var i = 0; i < allButtons.length; i++) {
  let button = allButtons[i];
  button.addEventListener('click', function(e) {
    let bookIdx = button.dataset.bookIdx;

    removeBookToLibray(bookIdx);
  });
}

// document.getElementById('add-book').addEventListener('click', function(e) {
//   e.preventDefault();
//
//
// });
