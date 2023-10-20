import CatalogList from './index.js';
import catalogData from './catalogData'; // Importa el arreglo de datos

describe("Pruebas de obtención de título de la kata", () => {
  it("Verifica si el campo 'Title' del catálogo es correcto", () => {
    const catalogList = new CatalogList(catalogData); // Pasa el arreglo de datos al constructor

    const titles = catalogList.displayCatalogNames();

    titles.forEach(title => {
      expect(title).toEqual("");
    });
  });
});
