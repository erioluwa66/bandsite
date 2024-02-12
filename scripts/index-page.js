//Default comments array
let comments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }
];


function displayComments(arr) {
  let commentContainer = document.querySelector(".comment__section");

  for (let i = 0; i < arr.length; i++) {
    // default comment div
    let defaultContainer = document.createElement("div");
    defaultContainer.classList.add("comment__default");
    commentContainer.appendChild(defaultContainer);

    //photo container
    let photoContainer = document.createElement("div");
    photoContainer.classList.add("comment__photo-box-one");
    defaultContainer.appendChild(photoContainer);

    // default comments
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("comment__header");
    defaultContainer.appendChild(headerContainer);

    //photo
    let photo = document.createElement("div");
    photo.classList.add("comment__header--photo-one");
    photoContainer.appendChild(photo);

    //header name
    let name = document.createElement("h2");
    name.classList.add("comment__header--name");
    name.innerText = arr[i]["name"];
    headerContainer.appendChild(name);

    //header date
    let date = document.createElement("h3");
    date.classList.add("comment__header--date");
    date.innerText = arr[i]["date"];
    headerContainer.appendChild(date);

    //comment box
    let textContainer = document.createElement("div");
    textContainer.classList.add("comment__text-box-main");
    defaultContainer.appendChild(textContainer);

    //actualcomment
    let comment = document.createElement("p");
    comment.classList.add("comment__text-box-main--comment");
    comment.innerText = arr[i]["comment"];
    textContainer.appendChild(comment);
  }
}
displayComments(comments);


const form = document.querySelector(".comment__input-box");


form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

  const newComment = {};
  newComment.name = submitEvent.target.name.value;
  newComment.comment = submitEvent.target.comment.value;

  let commentContainer = document.querySelector(".comment__section");
 
  let defaultContainer = document.createElement("div");
  defaultContainer.classList.add("comment__default");
  commentContainer.appendChild(defaultContainer);


  let photoContainer = document.createElement("div");
  photoContainer.classList.add("comment__photo-box-one");
  defaultContainer.appendChild(photoContainer);


  let headerContainer = document.createElement("div");
  headerContainer.classList.add("comment__header");
  defaultContainer.appendChild(headerContainer);


  let photo = document.createElement("div");
  photo.classList.add("comment__header--photo-one");
  photoContainer.appendChild(photo);


  let name = document.createElement("h2");
  name.classList.add("comment__header--name");
  name.innerText = newComment.name;
  headerContainer.appendChild(name);

  //date
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  //date
  let date = document.createElement("h3");
  date.innerText = today;
  date.classList.add("comment__header--date");
  headerContainer.appendChild(date);

  let textContainer = document.createElement("div");
  textContainer.classList.add("comment__text-box-main");
  defaultContainer.appendChild(textContainer);


  let comment = document.createElement("p");
  comment.classList.add("comment__text-box-main--comment");
  comment.innerText = newComment.comment;
  textContainer.appendChild(comment);

  let top = document.querySelector(".comment__section");
  top.insertBefore(defaultContainer, top.childNodes[0]);

  let clearInput = document.querySelector(".comment__input-box");
  clearInput.reset();
});
