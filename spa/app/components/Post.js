export function Post(props) {
  let { title, date, content } = props;

  let formattedDate = new Date(date).toLocaleString();

  const $section = document.createElement("section");
  $section.classList.add("post-page");

  $section.innerHTML = `
    <aside>
      <h2>${title.rendered}</h2>
      <time datetime="${date}">${formattedDate}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>
  `;

  return $section;
}
