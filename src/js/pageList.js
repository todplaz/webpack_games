const PageList = (argument = "") => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument + "&page_size=27";
      }
      

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {

          response.results.forEach((article, index) => {
            const img_url = article.background_image

            let availablePlatforms = [];
            let genres = [];
            article.genres.forEach(element => genres.push(element.name))
            console.log(article.name)
            console.log(article.parent_platforms.length)

            article.parent_platforms.forEach(element => availablePlatforms.push(element.platform.name))
            
            
            //.forEach(platform => availablePlatforms.push(platform.name))

            if (index <= 8) {
            //article.parent_platforms.forEach(platform => console.log(platform.name))
            
            articles += `
                  <div class="visible">
                    <img src="${img_url}" onmouseenter="imageOut(event)">
                    <div class="hover" onmouseleave="hoverOut(event)">
                      <p>${article.released}</p>
                      <p>${genres.join(", ")}</p>
                      <p>${article.rating}/5 - ${article.ratings_count} votes</p>
                    </div>
                    <h1>${article.name}</h1>
                    <p>Disponible sur ${availablePlatforms.join(", ")} </p>
                    <a href = "#pagedetail/${article.id}">${article.id}</a>
                  </div>
                `;
              }
              else {
                articles +=` 
                <div class="not-visible" width="400px" >
                  <img src="${img_url}" onmouseenter="imageOut(event)">
                  <div class="hover" onmouseleave="hoverOut(event)">
                    <p>${article.released}</p>
                    <p>${genres.join(", ")}</p>
                    <p>${article.rating}/5 - ${article.ratings_count} votes</p>
                  </div>
                  <h1>${article.name}</h1>
                  <p></p>
                  <a href = "#pagedetail/${article.id}">${article.id}</a>
                </div>
              `;
              }
          });

          document.querySelector(".page-list .articles").innerHTML = articles;
          document.querySelector(".page-list .articles").insertAdjacentHTML("afterend", "<button id=\"seeMore\" onclick='displayMore()'>Voir plus d'éléments</button>")

        });
    };

    if (argument == "default") {
      fetchList("https://api.rawg.io/api/games?ordering=released");
    }
    else {
      fetchList("https://api.rawg.io/api/games", cleanedArgument);
    }

  };

  const render = () => {

    pageContent.innerHTML = `

    <div id="header">
      <h1>The Hyper Progame</h1>
      <form onsubmit="searchByKeyword(event)">
        <input type="text" id="search" placeholder="Find a game..."><br>
      </form> 
    </div>

    <h1>Welcome,</h1>

    <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
    the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
    brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
    groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
    with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p><br>

    <label for="platform">Sélectionnez une plate-forme :</label>
    <select onchange="filterByPlatform()" name="platform" id="platform" class="form-select danger">
      <option value="all">Toutes</option>
      <option value="PC">PC</option>
      <option value="PlayStation">PlayStation</option>
      <option value="Xbox">Xbox</option>
      <option value="Nintendo">Nintendo</option>
      <option value="iOS">iOS</option>
      <option value="Android">Android</option>
      <option value="Linux">Linux</option>
    </select><br>

      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;


    preparePage();
  };

  render();
};

export { PageList };
