import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = w.location;
  console.log(hash);

  // Limpiar contenido
  $main.innerHTML = "";

  // Fragment para rendimiento
  const $fragment = d.createDocumentFragment();

  /* ==============================
     HOME / POSTS
  ============================== */
  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        posts.forEach((post) => {
          $fragment.appendChild(PostCard(post));
        });

        $main.appendChild($fragment);
      },
    });
  } else if (hash.includes("#/search")) {
    /* ==============================
     SEARCH
  ============================== */
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        if (search.length === 0) {
          const $p = d.createElement("p");
          $p.classList.add("error");
          $p.innerHTML = `
            No existen resultados de búsqueda para el término
            <mark>${query}</mark>
          `;
          $main.appendChild($p);
        } else {
          search.forEach((post) => {
            $fragment.appendChild(SearchCard(post));
          });

          $main.appendChild($fragment);
        }
      },
    });
  } else if (hash.includes("#/contacto")) {
    /* ==============================
     CONTACTO
  ============================== */
    const $h2 = d.createElement("h2");
    $h2.textContent = "Sección de contacto";
    $main.appendChild($h2);
  } else {
    /* ==============================
     POST INDIVIDUAL
  ============================== */
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        $main.appendChild(Post(post));
      },
    });
  }

  d.querySelector(".loader").style.display = "none";
}
