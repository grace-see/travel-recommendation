function clearContent(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

async function fetchSearchResults() {
    const searchContent = document.querySelector("#searchinput").value.toLowerCase().trim();
    const response = await fetch("./travel_recommendation_api.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (searchContent.match(/beach(es)?/)) {
                const mainDiv = document.querySelector(".main-div");
                mainDiv.classList.add("search");
                if (mainDiv.classList.contains("contact-content"))
                    mainDiv.classList.remove("contact-content");
                //clear content of current div
                clearContent(mainDiv);
                //create header
                const resultsHeader = document.createElement("h2");
                resultsHeader.textContent = "Search Results";
                resultsHeader.classList.add("results-header");
                mainDiv.appendChild(resultsHeader);
                //create container to hold search results
                const resultsContainer = document.createElement("div");
                resultsContainer.classList.add("results-container");
                //create search results
                const searchData = data.beaches;
                searchData.forEach((entry) => {
                    //set up entry title
                    const entryName = document.createElement("h3");
                    entryName.textContent = entry.name;
                    //set up entry description
                    const entryDescription = document.createElement("p");
                    entryDescription.textContent = entry.description;
                    //set up entry image
                    const entryImg = document.createElement("img");
                    entryImg.src = entry.imageUrl;
                    //set up container for result entry
                    const entryContainer = document.createElement("div");
                    entryContainer.classList.add("entry-container");
                    entryContainer.appendChild(entryImg);
                    entryContainer.appendChild(entryName);
                    entryContainer.appendChild(entryDescription);
                    //append final result entry to the results container
                    resultsContainer.appendChild(entryContainer);
                });
                //append to mainDiv
                mainDiv.appendChild(resultsContainer);
            }
            else if (searchContent.match(/temple(s)?/)) {
                const mainDiv = document.querySelector(".main-div");
                mainDiv.classList.add("search");
                if (mainDiv.classList.contains("contact-content"))
                    mainDiv.classList.remove("contact-content");
                //clear content of current div
                clearContent(mainDiv);
                //create header
                const resultsHeader = document.createElement("h2");
                resultsHeader.textContent = "Search Results";
                resultsHeader.classList.add("results-header");
                mainDiv.appendChild(resultsHeader);
                //create container to hold search results
                const resultsContainer = document.createElement("div");
                resultsContainer.classList.add("results-container");
                //create search results
                const searchData = data.temples;
                searchData.forEach((entry) => {
                    //set up entry title
                    const entryName = document.createElement("h3");
                    entryName.textContent = entry.name;
                    //set up entry description
                    const entryDescription = document.createElement("p");
                    entryDescription.textContent = entry.description;
                    //set up entry image
                    const entryImg = document.createElement("img");
                    entryImg.src = entry.imageUrl;
                    //set up container for result entry
                    const entryContainer = document.createElement("div");
                    entryContainer.classList.add("entry-container");
                    entryContainer.appendChild(entryImg);
                    entryContainer.appendChild(entryName);
                    entryContainer.appendChild(entryDescription);
                    //append final result entry to the results container
                    resultsContainer.appendChild(entryContainer);
                });
                //append to mainDiv
                mainDiv.appendChild(resultsContainer);
            }
            else if (searchContent.match(/countr(y|ies)/)) {
                const mainDiv = document.querySelector(".main-div");
                mainDiv.classList.add("search");
                if (mainDiv.classList.contains("contact-content"))
                    mainDiv.classList.remove("contact-content");
                //clear content of current div
                clearContent(mainDiv);
                //create header
                const resultsHeader = document.createElement("h2");
                resultsHeader.textContent = "Search Results";
                resultsHeader.classList.add("results-header");
                mainDiv.appendChild(resultsHeader);
                //create container to hold search results
                const resultsContainer = document.createElement("div");
                resultsContainer.classList.add("results-container");
                //create search results
                const searchData = data.countries;
                searchData.forEach((country) => {
                    const cities = country.cities;
                    cities.forEach((entry) => {
                        //set up entry title
                        const entryName = document.createElement("h3");
                        entryName.textContent = entry.name;
                        //set up entry description
                        const entryDescription = document.createElement("p");
                        entryDescription.textContent = entry.description;
                        //set up entry image
                        const entryImg = document.createElement("img");
                        entryImg.src = entry.imageUrl;
                        //set up container for result entry
                        const entryContainer = document.createElement("div");
                        entryContainer.classList.add("entry-container");
                        entryContainer.appendChild(entryImg);
                        entryContainer.appendChild(entryName);
                        entryContainer.appendChild(entryDescription);
                        //append final result entry to the results container
                        resultsContainer.appendChild(entryContainer);
                    });
                });
                //append to mainDiv
                mainDiv.appendChild(resultsContainer);
            }
        })
        .catch(error => console.error(error.message));
}

function clearSearch() {
    const searchBar = document.querySelector("#searchinput");
    searchBar.value = "";
}

searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", fetchSearchResults);

clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", clearSearch);