// Este seria el componente principal de nuestra aplicacion, el cual se encargara de renderizar los demas componentes
import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { PostCard } from "./components/PostCard.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  // Limpiar root. Evitamos duplicar al hacer click en un item del menú
  $root.innerHTML = null;

  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  //Clase 151 - Router
  Router();
  InfiniteScroll();
}

/* ************ Clase 150 ************** */
/*   ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);

      const $main = d.getElementById("main");
      const $fragment = d.createDocumentFragment();

      posts.forEach((post) => $fragment.appendChild(PostCard(post)));

      $main.appendChild($fragment);

      d.querySelector(".loader").style.display = "none";
    },
  }); */

/* ************ Clase 148 ************** */
/* ajax({
    url: "no valida",
    cbSuccess: () => {},
  }); */

/* ************ Clase 147 ************** */
/*   // Insertamos un texto al Main del index.html
  document.getElementById("root").innerHTML = "<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>";

  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
    },
  });

  ajax({
    url: api.CATEGORIES,
    cbSuccess: (categories) => {
      console.log(categories);
    },
  });

  console.log("API:", api); */
