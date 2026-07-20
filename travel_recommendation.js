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
            //fetching: beaches, countries, or temples
                //each object will be its own entry
                //except for with countries, where we'll have to loop through the cities instead
            //we display cards for each of the entries that we get
            if (searchContent.match(/beach(es)?/))
                console.log("BEACH");
            else if (searchContent.match(/temple(s)?/))
                console.log("TEMPLE");
            else if (searchContent.match(/countr(y|ies)/))
                console.log("COUNTRY");
        })
        .catch(error => console.error(error.message));
}

searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", fetchSearchResults);