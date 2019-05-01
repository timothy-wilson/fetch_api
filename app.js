const ul = document.getElementById("authors");
const url = "https://randomuser.me/api/?results=10";

const createNode = (element) => {
    return document.createElement(element);
}

const append = (parent, el) => {
    return parent.appendChild(el);
}

async function buildPage() {
    try {
        let resp = await fetch(url);
        let respJson = await resp.json();
        respJson.results.map((author => {
            let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        }));
    } catch(err) {
        console.log(err);
    }
}

buildPage();