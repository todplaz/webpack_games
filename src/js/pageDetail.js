
const PageDetail = (argument) => {
  const preparePage = () => {
    cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description, image, studio, tags, genre, editeur, plateforme, plateformeDispo, moyenne, vote } = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("img.imagejeu").innerHTML = image;
          //articleDOM.querySelector("p.studio span").innerHTML = studio;
          articleDOM.querySelector("p.lestags").innerHTML = tags;
          articleDOM.querySelector("p.genrejeu").innerHTML = genre;
          articleDOM.querySelector("p.editeur span").innerHTML = editeur;
          articleDOM.querySelector("p.plateform").innerHTML = plateforme;
          articleDOM.querySelector("p.ensortie").innerHTML = plateformeDispo;
          articleDOM.querySelector("p.moyenne span").innerHTML = moyenne;
          articleDOM.querySelector("p.vote").innerHTML = vote;
          
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
        </div>
      </section>

      <section class="page-detail">
        <div class="article">
          <img class="imagejeu"></img>
          <p class="studio">Studio developpeur : <span></span></p>
          <p class="lestags">Mots-clés: </p>
        </div>
      </section>

      <section class="page-detail">
        <div class="article">
          <p class="genrejeu">Genre : </p>
          <p class="editeur">Editeur : <span></span></p>
          <p class="plateform">Plateforme : </p>
        </div>
      </section>

      <section class="page-detail">
        <div class="article">
          <p class="ensortie">Plateforme disponible : </p>
          <p class="moyenne">Note moyenne : <span></span></p>
          <p class="vote">Nombre de votes : </p>
        </div>
      </section>

    `;

    preparePage();
  };

  render();
};

export { PageDetail };