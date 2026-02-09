// Clase 150
export function PostCard(props) {
  let { title, date, slug, _embedded, id } = props;

  let formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  /* Delegación de eventos para asegurarnos que el elemento existe al definir un listener */
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return;

    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  // Añadimos "h" al final de la hora
  formattedDate = formattedDate.replace(/(\d{2}:\d{2})$/, "$1h");

  const $article = document.createElement("article");
  $article.classList.add("post-card");

  // Imagen aleatoria por defecto
  let urlImage = `https://picsum.photos/200/200?random=${Math.random()}`;

  // Si el post tiene una imagen destacada, la usamos en lugar de la aleatoria
  if (_embedded["wp:featuredmedia"]) {
    urlImage = _embedded["wp:featuredmedia"][0].source_url;
  }

  $article.innerHTML = `
    <img src="${urlImage}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
      <time datetime="${date}">${formattedDate}</time>
      <a href="#${slug}" data-id="${id}">Ver publicación</a>
    </p>
  `;

  return $article;
}

// usamos data-attributes para guardar el id del post: data-id="${id}"
