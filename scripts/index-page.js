import {bandSiteApi} from "./band-site-api.js";
const api = new bandSiteApi();

// Getting comments
const getComment = async () => {
    try {
        const comments = await api.getComments();
        console.log("Comments:", comments);
        displayComments(comments);
    } catch (error) {
        console.error("Error getting comments:", error);
    }
};
getComment();

// //Default comments array
// let comments = [
//   {
//     name: "Victor Pinto",
//     date: "11/02/2023",
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
//   },
//   {
//     name: "Christina Cabrera",
//     date: "10/28/2023",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//   },
//   {
//     name: "Isaac Tadesse",
//     date: "10/20/2023",
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//   }
// ];


function displayComments(arr) {
  let commentContainer = document.querySelector(".comment__section");

  for (let i = 0; i < arr.length; i++) {
    //date setting
    let m = new Date(arr[i]["timestamp"]);
    let dateString =
      m.getUTCMonth() + 1 + "/" + m.getUTCDate() + "/" + m.getUTCFullYear();

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
    date.innerText = dateString;
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


// const addComment = async () => {
//     const comment = {
//         "name": Mariam,
//         "comment": "God will do it."
//     };

//     try {
//         const postedComment = await api.postComment(comment);
//         console.log("Posted Comment:", postedComment);
//     } catch (error) {
//         console.error("Error posting comment:", error);
//     }
// };
//addComment();

// Event listener setup
const form = document.querySelector(".comment__input-box");
form.addEventListener("submit", async (submitEvent) => {
  // Prevents page reloading after clicking the submit button
  submitEvent.preventDefault();
  
  try {
    // Post comments
    const response = await axios.post(
      "https://project-1-api.herokuapp.com/comments?api_key=ce0a83d6-f938-4f6d-84da-9d270c0130d7", {
      name: submitEvent.target.name.value,
      comment: submitEvent.target.comment.value
    });
    
    // Handle the response as needed (e.g., display a success message)
    console.log("Comment posted successfully:", response.data);
    
    // Clear the form inputs after posting the comment
    submitEvent.target.name.value = '';
    submitEvent.target.comment.value = '';
  } catch (error) {
    console.error("Error posting comment:", error);
  }
});

// function displayComments(comments) {
//     const commentList = document.getElementById('comment-list');
//     commentList.innerHTML = ''; // Clear previous comments

// //     // Display comments, starting with the newest ones
// //     for (let i = comments.length - 1; i >= 0; i--) {
// //         const comment = comments[i];
// //         const commentItem = document.createElement('div');
// //         commentItem.classList.add('comment-item');
// //         commentItem.innerHTML = `
// //             <div class="comment-author">${comment.name}</div>
// //             <div class="comment-text">${comment.comment}</div>
// //         `;
// //         // Prepend the comment to the beginning of the list
// //         commentList.prepend(commentItem);
//     }
// }
//   let commentContainer = document.querySelector(".comment__section");
 
//   let defaultContainer = document.createElement("div");
//   defaultContainer.classList.add("comment__default");
//   commentContainer.appendChild(defaultContainer);


//   let photoContainer = document.createElement("div");
//   photoContainer.classList.add("comment__photo-box-one");
//   defaultContainer.appendChild(photoContainer);


//   let headerContainer = document.createElement("div");
//   headerContainer.classList.add("comment__header");
//   defaultContainer.appendChild(headerContainer);


//   let photo = document.createElement("div");
//   photo.classList.add("comment__header--photo-one");
//   photoContainer.appendChild(photo);


//   let name = document.createElement("h2");
//   name.classList.add("comment__header--name");
//   name.innerText = newComment.name;
//   headerContainer.appendChild(name);

//   // //date
//   // let dd = String(today.getDate()).padStart(2, "0");
//   // let mm = String(today.getMonth() + 1).padStart(2, "0");
//   // let yyyy = today.getFullYear();

//   // today = mm + "/" + dd + "/" + yyyy;

//   //date
//   let date = document.createElement("h3");
//   date.innerText = today;
//   date.classList.add("comment__header--date");
//   headerContainer.appendChild(date);

//   let textContainer = document.createElement("div");
//   textContainer.classList.add("comment__text-box-main");
//   defaultContainer.appendChild(textContainer);


//   let comment = document.createElement("p");
//   comment.classList.add("comment__text-box-main--comment");
//   comment.innerText = newComment.comment;
//   textContainer.appendChild(comment);

//   let top = document.querySelector(".comment__section");
//   top.insertBefore(defaultContainer, top.childNodes[0]);

//   let clearInput = document.querySelector(".comment__input-box");
//   clearInput.reset();
// });
