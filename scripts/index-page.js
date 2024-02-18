import {bandSiteApi} from "./band-site-api.js";
const api = new bandSiteApi();

// Getting comments
// Getting comments
const getComment = async () => {
    try {
        const comments = await api.getComments();
        console.log("Comments:", comments);
        displayComment(comments);
    } catch (error) {
        console.error("Error getting comments:", error);
    }
};
getComment();

   //Displaying Comments invoked from Fetch Comments
    function displayComment(comments) {
    
        const commentsSection = document.querySelector(".comments");
        commentsSection.innerHTML = "";
        //looping through each comment
        comments.forEach((comment) => {

            const commentContainer = document.createElement("div");
            const avatarContainer = document.createElement("div");
            const userDetail = document.createElement("div");
            const nameContainer = document.createElement("div");
            const dateContainer = document.createElement("div");
            const name = document.createElement("p");
            const date = document.createElement("p");
            const commentDes = document.createElement("div");
            const userComment = document.createElement("div");
            name.innerText = comment.name;
            date.innerText = (new Date(comment.timestamp).toLocaleDateString("en-US"));
            commentDes.innerText = comment.comment;

            avatarContainer.classList.add("comments__avatar-cont");
            userDetail.classList.add("comments__user-detail");
            name.classList.add("comments__name");
            date.classList.add("comments__date");
            commentDes.classList.add("comments__comment-des");
            userComment.classList.add("comments__user-cont");
            commentContainer.classList.add("comments__comment-cont");

            nameContainer.appendChild(name);
            dateContainer.appendChild(date);
            userDetail.append(nameContainer, dateContainer);
            userComment.append(userDetail, commentDes);
            commentContainer.append(avatarContainer, userComment);
            commentsSection.appendChild(commentContainer);
        });   

        const firstChild = commentsSection.firstElementChild;
        const lastChild = commentsSection.lastElementChild;

        firstChild.classList.add("comments__comment-cont--fnode");
        lastChild.classList.add("comments__comment-cont--lnode");

    };

   //Event Listener Setup;
    function listen(){
        const form = document.querySelector(".conv__form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            axios.post( "https://project-1-api.herokuapp.com/comments?api_key=ce0a83d6-f938-4f6d-84da-9d270c0130d7", {
                name: e.target.name.value,
                comment: e.target.comment.value
            }).then((res) =>{
                getComment();
            }).catch((error) =>{
                console.log(error);
            })
            form.reset()
        });

    }
