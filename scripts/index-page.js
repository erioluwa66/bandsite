import {bandSiteApi} from "./band-site-api.js";
const api = new bandSiteApi();

// Getting comments
// Getting comments
const getAndDisplayComments  = async () => {
    try {
        const comments = await api.getComments();
        console.log("Comments:", comments);
        displayComments(comments);
    } catch (error) {
        console.error("Error getting comments:", error);
    }
};


// Function to display comments on the page
const displayComments = (comments) => {
    const commentsSection = document.querySelector(".comments");
    commentsSection.innerHTML = "";

        //looping through each comment
        comments.forEach((comment) => {
            const commentContainer = document.createElement("div");
            const picsContainer = document.createElement("div");
            const userDetail = document.createElement("div");
            const nameContainer = document.createElement("div");
            const dateContainer = document.createElement("div");
            const name = document.createElement("p");
            const date = document.createElement("p");
            const commentfir = document.createElement("div");
            const userComment = document.createElement("div");
            // Set comment details
            name.innerText = comment.name;
            date.innerText = (new Date(comment.timestamp).toLocaleDateString("en-US"));
            commentfir.innerText = comment.comment;
                
            // Add classes to elements
            picsContainer.classList.add("comments__pics-cont");
            userDetail.classList.add("comments__user-detail");
            name.classList.add("comments__name");
            date.classList.add("comments__date");
            commentfir.classList.add("comments__comment-des");
            userComment.classList.add("comments__user-cont");
            commentContainer.classList.add("comments__comment-cont");

              // Append elements
            nameContainer.appendChild(name);
            dateContainer.appendChild(date);
            userDetail.append(nameContainer, dateContainer);
            userComment.append(userDetail, commentfir);
            commentContainer.append(picsContainer, userComment);
            commentsSection.appendChild(commentContainer);
        });   

        const firstChild = commentsSection.firstElementChild;
        const lastChild = commentsSection.lastElementChild;

        firstChild.classList.add("comments__comment-cont--first");
        lastChild.classList.add("comments__comment-cont--last");

    };



  // Event listener setup for submitting comments
function listen() {
    const form = document.querySelector(".conversation__form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            await api.postComment({
                name: e.target.name.value,
                comment: e.target.comment.value
            });
            await getAndDisplayComments(); // Get and display comments after posting
        } catch (error) {
            console.error("Error posting comment:", error);
        }
        form.reset();
    });
}

// Initialize by getting and displaying comments and setting up event listeners
getAndDisplayComments();
listen();