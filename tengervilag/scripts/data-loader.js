let tripsData = [];
let tripsHTML = "";

let problemsData = [];
let problemsHTML = "";

window.onload = () => {
    fetch('json/trips.json')
        .then((response) => response.json())
        .then((json) => tripsData.push(json))
        .then(() => {

            tripsData[0].forEach(e => {
                tripsHTML += 
                `
                <div class="card">
                    <img src="images/${e.img}" alt="${e.img}">
                    <h4>${e.title}</h4>
                    <p>${e.description}</p>
                    <button>
                        <a href="#">
                            ${e.btn_text}  »
                        </a>
                    </button>
                </div>
                `
            })
            
        
            document.getElementById("trip-list-content").innerHTML = tripsHTML;
        });


    fetch('json/problems.json')
        .then((response) => response.json())
        .then((json) => problemsData.push(json))
        .then(() => {

            problemsData[0].forEach(e => {
                problemsHTML += 
                `
                <div class="card">
                    <div class="image">
                        <p class="num">${e.id}</p>
                        <img src="images/${e.img}" alt="${e.img}">
                    </div>
                    <div class="info">
                        <h4>${e.title}</h4>
                        <p>
                            <span>${e.description}</span>
                            <a href="#">Learn more</a>
                        </p>
                    </div>
                </div>
                `
            })
            
        
            document.getElementById("problems-list").innerHTML = problemsHTML;
        });

}