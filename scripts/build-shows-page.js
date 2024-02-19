import { bandSiteApi } from "./band-site-api.js";
const api = new bandSiteApi();

const getAndDisplayShows = async () => {
    try {
        const shows = await api.getShows();
        console.log("Shows:", shows);
        displayShows(shows);
    } catch (error) {
        console.error("Error getting show data:", error);
    }
};
getAndDisplayShows();

function displayShows(arr) {
    const shows = document.querySelector(".shows")

    const showsTitle = document.createElement("h2");
    showsTitle.classList.add("shows__title");
    showsTitle.innerText = "Shows";
    shows.appendChild(showsTitle);

    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container")
    shows.appendChild(showsContainer);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("shows__subtitle");
    showsContainer.appendChild(infoDiv);

    const datesTitle = document.createElement("h3");
    datesTitle.classList.add("shows__subtitle-date");
    datesTitle.innerText = "DATES";
    infoDiv.appendChild(datesTitle);

    const venuesTitle = document.createElement("h3");
    venuesTitle.classList.add("shows__subtitle-venue");
    venuesTitle.innerText = "VENUE";
    infoDiv.appendChild(venuesTitle);

    const locationsTitle = document.createElement("h3");
    locationsTitle.classList.add("shows__subtitle-location");
    locationsTitle.innerText = "LOCATION";
    infoDiv.appendChild(locationsTitle);

    const hiddenElement = document.createElement("span");
    hiddenElement.classList.add("shows__hidden")
    hiddenElement.innerText = ".";
    infoDiv.appendChild(hiddenElement);


    for(let key in arr) {    
        const showsParent = document.createElement("div");
        showsParent.classList.add("shows__new");
        showsContainer.appendChild(showsParent);
  
        const dateTitle = document.createElement("h4");
        dateTitle.classList.add("shows__date");
        dateTitle.innerText = "DATE";
        showsParent.appendChild(dateTitle);
       
        const dateShow = document.createElement("h3");
        dateShow.classList.add("shows__date-actual");
        // Format the date to "dd/mm/year" format
        const dateObj = new Date(arr[key].date);
        const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        dateShow.innerText = formattedDate;
        showsParent.appendChild(dateShow);
     
        const venueTitle = document.createElement("h4");
        venueTitle.classList.add("shows__venue");
        venueTitle.innerText = "VENUE";
        showsParent.appendChild(venueTitle);
       
        const venueShow = document.createElement("h3");
        venueShow.classList.add("shows__venue-actual");
        // Use "place" property instead of "venue"
        venueShow.innerText = arr[key].place;
        showsParent.appendChild(venueShow);
     
        const locationTitle = document.createElement("h4");
        locationTitle.classList.add("shows__location");
        locationTitle.innerText = "LOCATION";
        showsParent.appendChild(locationTitle);

        const locationShow = document.createElement("h3");
        locationShow.classList.add("shows__location-actual");
        locationShow.innerText = arr[key].location;
        showsParent.appendChild(locationShow);
       
        const buyTickets = document.createElement("button");
        buyTickets.classList.add("shows__button");
        buyTickets.innerText = "BUY TICKETS";
        showsParent.appendChild(buyTickets);
    }
}
