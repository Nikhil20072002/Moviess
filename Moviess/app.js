var c = 0;
const search = () => {
    const searchbox = document.getElementById("search-bar").value.toUpperCase();
    const movies = document.getElementById("movies");
    const movie = document.querySelectorAll(".movie");
    const pname = movies.getElementsByTagName("h3");
    for (var i = 0; i < pname.length; i++) {
        let match = movie[i].getElementsByTagName("h3")[0];
        if (match) {
            let x = match.textContent || match.innerHTML
            if (x.toUpperCase().indexOf(searchbox) > -1) {
                movie[i].style.display = "";
            } else {
                movie[i].style.display = "none";
            }
        }
    }
}
const getDetails=(name,year,type,director,hero,heroine,villain,imgtype)=>{
            localStorage.setItem("movie_name", name);
            localStorage.setItem("year",year);
            localStorage.setItem("type",type);
            localStorage.setItem("director",director);
            localStorage.setItem("cast",hero+","+heroine+","+villain);
            localStorage.setItem("imgtype",imgtype);
}
