const main = document.querySelector("main");

const headerFrase = [
    "Cachorro",
    ""
];
fillMain();

function fillMain(){
    //Create first div
    const divPic = document.createElement("div");
    divPic.id = "pic";
    main.appendChild(divPic);
    const h1 = create("h1");
    h1.innerText = "Qual animal que eu me identifico?";
    divPic.appendChild(h1);

    //Create description
    const sectionFirst = create("section");
    sectionFirst.id = "firstSection";
    main.appendChild(sectionFirst);
    const name = create("h2");
    name.innerText = "Pit Bull";
    const description = create("p");
    description.innerText = "Especificamente eu me identifico com o Pit Bull mas gosto de todo o tipo de cachorro, cachorro é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. Teorias postulam que surgiu do lobo cinzento no continente asiático há mais de 100 000 anos. Ao longo dos séculos, através da domesticação, o ser humano realizou uma seleção artificial dos cães por suas aptidões, características físicas ou tipos de comportamento. O resultado foi uma grande diversidade de raças caninas, as quais variam em pelagem e tamanho dentro de suas próprias raças, atualmente classificadas em diferentes grupos ou categorias. As designações vira-lata (no Brasil) são dadas aos cães sem raça definida ou mestiços descendentes.";
    const obs = create("p");
    obs.innerText = "Porém com o PitBull e com algumas raças específicas, muitas pessoas possuem um errado julgamento de que essas raças são 'imprevisíveis' ou que são apenas de 'cão guarda' 😂😂, esse julgamento é extremamente errado, pois o comportamento do animal está relacionado a forma como foi criado, portanto até um inofensivo pintcher pode ter sido criado errado e tentar atacar um humano, mas guardada as devidas proporções.";
    sectionFirst.appendChild(name);
    sectionFirst.appendChild(description);
    sectionFirst.appendChild(obs);

    const divVideo = create("div");
    divVideo.id = "tagVid";
    main.appendChild(divVideo);
    const dog = create("p");
    dog.innerText = 'Meu "cão de guarda"';
    divVideo.appendChild(dog);

    const vid = create("video");
    vid.setAttribute("controls", "");
    divVideo.appendChild(vid);
    const source = create("source");
    source.src = "assets/guarda.mp4";
    vid.appendChild(source);
}

//Função com o objetivo de criar o elemento
function create(element) {
    return document.createElement(element);
}

//https://tudosobrecachorros.com.br/