document.getElementById("randomButton").addEventListener("click", function(event) {
    event.preventDefault();
    let s = document.getElementById('selector');
    let number = s.options[s.selectedIndex].value;
    const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/" + number;
    console.log(url);
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        let results = "";
        for (let i = 0; i< number; i++) {
            results += "<p>\"" + json[i] + "\"</p>";
        }
        document.getElementById("randomQuotes").innerHTML = results;
    });
});

document.getElementById("searchSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("searchInput").value;
    console.log(value);
    const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/" + value;
    console.log(url);
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        let results = "";
        for (let i = 0; i< json.length; i++) {
            results += "<p>\"" + json[i] + "\"</p>";
        }
        if (json.length === 0) {
            results += "No quotes under keywords: \"" + value + "\"";
        }
        document.getElementById("searchQuotes").innerHTML = results;
    });
});