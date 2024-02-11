let showData = [
{
    date: "Mon Sep 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA"    
}, 
{
    date: "Tue Sep 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA" 
}, 
{
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA" 
}, 
{
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA" 
}, 
{
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA" 
}, 
{
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA" 
}
];

function displayShows(showsData) {
    let showsContainer = document.querySelector(".shows")

    let showsHeader = document.createElement("h2");
    showsHeader.classList.add("shows__header");
    showsHeader.innerText = "Shows";
    showsContainer.appendChild(showsHeader);

    let showsBox = document.createElement("div");
    showsBox.classList.add("shows__box");
    showsContainer.appendChild(showsBox);

    let dataSection = document.createElement("div");
    dataSection.classList.add("shows__top");
    showsBox.appendChild(dataSection);

    let datesMain = document.createElement("h3");
    datesMain.classList.add("shows__top-date");
    datesMain.innertext ="DATES";
    dataSection.appendChild(datesMain);

    let venueMain = document.createElement("h3");
    venueMain.classList.add("shows__top-venue");
    venueMain.innerText = "'VENUE";
    dataSection.appendChild(venueMain);

    let locationMain = document.createElement("h3");
    locationMain.classList.add("shows__top-location");
    locationMain.innerText = "LOCATION";
    dataSection.appendChild(locationMain);

    let absentElement = document.createElement("span");
    absentElement.classList.add("shows__absent");
    absentElement.innerText =".";
    dataSection.appendChild(absentElement);
}

for (let key in showsData) {
 
    let showsParent = document.createElement ("div");
    showsParent.classList.add("shows__new");
    showsBox.appendChild(showsParent);
}