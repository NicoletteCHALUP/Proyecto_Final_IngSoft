import CatalogList from './index.js'; // Importa la clase CatalogList desde el archivo correspondiente.
import catalogData from './catalogData.js'; // Asegúrate de que la ruta sea correcta.

// Creamos una instancia de la clase CatalogList
const catalogListInstance = new CatalogList(catalogData);

// Función para mostrar catálogos en la página

// Llamamos al método para mostrar los catálogos cuando se cargue la página
window.onload = () => {
    catalogListInstance. renderCatalogsToContainer();
  };
