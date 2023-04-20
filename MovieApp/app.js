const APIURL =
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&total_pages=100&skip=10`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



   const movieBox = document.querySelector("#movie-box")
    const getMovies =async(api)=>{
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
        showMovies(data.results)
    }
    getMovies(APIURL)



    const showMovies =(data)=>{
        movieBox.innerHTML="";
        data.forEach(item => {
            const box = document.createElement('div')
            box.classList.add("box")
            box.innerHTML = ` <img src="${IMGPATH + item.poster_path}" alt="" />
                <div class="title">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>${item.release_date}</h3>
                <p>${item.overview
                }</p>
            </div>`;
            movieBox.appendChild(box)
        });
       console.log(data);
    }

    document.querySelector("#search").addEventListener("keyup",(event)=>{
       if(event.target.value!=""){
          getMovies(SEARCHAPI + event.target.value)
       }else{
          getMovies(APIURL)
       }
    })
        
    // let totalPages = 10;
    // let currentPage = 1;

  