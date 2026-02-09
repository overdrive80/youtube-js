export function SearchForm() {
  const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input");

  $form.classList.add("search-form");

  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";

  $form.appendChild($input);

  // Restaura el valor del input desde localStorage si estamos en la ruta de búsqueda
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  d.addEventListener("search", (e) => {
    if (!e.target.matches(".search-form input")) return;

    // Si el usuario borra el texto del input,
    // eliminamos la búsqueda guardada en localStorage
    if (!e.target.value.trim()) localStorage.removeItem("wpSearch");
  });

  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;

    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
