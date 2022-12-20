const url = "https://keammd21-15ab.restdb.io/rest/menu-section";
const options = {
    headers: {
        'x-apikey': "63297716bf647d0a5c19859e"
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        handleData(data);

    })
    .catch((e) => {
        //Log error
        console.error("An error occured:", e.message);
    });

function handleData(data) {
    data.forEach((element) => {

        // console.log(element);

        const template = document.querySelector("template").content;
        const templateClone = template.cloneNode(true);



        templateClone.querySelector("#section-heading").innerHTML = element.heading;
        templateClone.querySelector("#section-paragraph").innerHTML = element.paragraph;
        templateClone.querySelector("#menu-image").src = element.image;


        const mainEl = document.querySelector("main");

        mainEl.appendChild(templateClone);

    });


};

// Menu 

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}