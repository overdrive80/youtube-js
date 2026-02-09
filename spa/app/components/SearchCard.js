export function SearchCard(props) {
  let { id, title, _embedded } = props;
  let slug = _embedded.self[0].slug;

  const $article = document.createElement("article");
  $article.classList.add("post-card");

  $article.innerHTML = `
    <h2>${title}</h2>
    <p>
      <a href="#/${slug}" data-id="${id}">
        Ver publicación
      </a>
    </p>
  `;

  return $article;
}
