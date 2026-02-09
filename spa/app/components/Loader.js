export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "app/assets/loader.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader"); // Añadir atributo clase

  return $loader;
}
