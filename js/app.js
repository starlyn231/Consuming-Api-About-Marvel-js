const marvel = {
    render: () => {
        // 16e52a445ab9037c0abe6c0364d623a0285f02db8295540873fc1e8a22a3ea947b6c20f17
        // 16e52 a445ab9037c0abe6c0364d623a0285f02db8295540873fc1e8a22a3ea947b6c20f17
        const urlAPI =
            "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=295540873fc1e8a22a3ea947b6c20f17&hash=749d2bdc95fe5f88b3e8eba4bc9f578c";
        const container = document.querySelector("#marvel-row");
        let contenHTML = "";

        fetch(urlAPI)
            .then((res) => res.json())
            .then((res) => {
                console.log(json);

                const results = json.data.results;

                results.forEach(function(results) {
                    // var imgPath = results.thumbnail.path + results.thumbnail.extension;;

                    contenHTML += `   
                    
                               
                    <div class="col-md-4">
  <div class="card m-2">
    <img src="${results.thumbnail.path}.${results.thumbnail.extension}" class="card-img-top" alt="${results.name}">
    <div class="card-body">
            <h3 class="title">${results.name}</h3>
      <p class="card-text">${results.description}</p>
 
    </div>
  </div>

                
            </div>`;
                });
                container.innerHTML = contenHTML;
            });
    },
};

marvel.render();