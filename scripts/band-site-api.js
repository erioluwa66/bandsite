
class bandSiteApi {
    constructor(apiKey) {
         this.apiKey = 'ce0a83d6-f938-4f6d-84da-9d270c0130d7';
         this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
    }

//postComment method
async postComment(comment) {
    const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });
    return await response.json();
}

//getComments Method

async getComments() {
    const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;
    const response = await fetch(url);
    let comments = await response.json();
    comments.sort((a, b) => b.timestamp -a.timestamp);
    return comments;
}

//get shows method
async getShows() {
    const url = `${this.baseUrl}/showdates?api_key=${this.apiKey}`;
    const response = await fetch(url);
    return await response.json();
}

}
// Posting a comment
const api = new bandSiteApi()


const addComment = async () => {
    const comment = {
        "name": Mariam,
        "comment": "God will do it."
    };

    try {
        const postedComment = await api.postComment(comment);
        console.log("Posted Comment:", postedComment);
    } catch (error) {
        console.error("Error posting comment:", error);
    }
};
//addComment();

// Getting comments
const getComment = async () => {
    try {
        const comments = await api.getComments();
        console.log("Comments:", comments);
        //displayComments(comments)
    } catch (error) {
        console.error("Error getting comments:", error);
    }
};
// getComment();
// Getting show data
const getShow = async () => {
    try {
        const shows = await api.getShows();
        console.log("Shows:", shows);
    } catch (error) {
        console.error("Error getting show data:", error);
    }
};
//getShow();

export {bandSiteApi}

