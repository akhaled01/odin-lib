// modal operations
var modal = document.getElementById("myModal");

var openbtn = document.getElementById("myBtn");
var closebtn = document.getElementById("closebtn");
var submitbtn = document.getElementById("submitbtn");

openbtn.onclick = function () {
  modal.style.display = "flex";
};

closebtn.onclick = function () {
  modal.style.display = "none";
};

// library operations

var BookName = document.querySelector("div input[name=BookName]");
var AuthorName = document.querySelector("div input[name=Author]");
var PageNo = document.querySelector("div input[name=PageNo]");
var readornot = document.querySelector('div input[name="readornot"]');

function Book(BookName, AuthorName, PageNo, readornot) {
  this.BookName = BookName.value;
  this.AuthorName = AuthorName.value;
  this.PageNo = PageNo.value;
  this.readornot = readornot.checked;
}

function UpdateCardsInBookHTML() {
  let mainwrapper = document.getElementsByClassName("bookwrapper")[0];
  mainwrapper.innerHTML = "";
  let isread = "";
  Books.forEach((Book) => {
    if (Book.readornot) {
      isread = "read";
    } else {
      isread = "notread";
    }
    mainwrapper.innerHTML += `<div class="card ${isread}">
    <div class="booktitle">${Book.BookName}</div>
    <div class="bookauthor">By ${Book.AuthorName}</div>
    <div class="pageno">
      <img src="assets/bookicon.png" alt="book icon" class="bookicon" />
      <div class="pagenumber">${Book.PageNo}</div>
    </div>
    </div>`;
  });
}

const Books = [];

submitbtn.onclick = function () {
  modal.style.display = "none";
  Books.push(new Book(BookName, AuthorName, PageNo, readornot));
  UpdateCardsInBookHTML();
};
