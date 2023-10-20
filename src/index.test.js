import CatalogList from './index.js';
import catalogData from './catalogData'; // Importa el arreglo de datos

describe("Pruebas de obtención de título de la kata", () => {
  it("Verifica si el campo 'Title' del catálogo es correcto", () => {
    const catalogList = new CatalogList(catalogData); // Pasa el arreglo de datos al constructor

    const catalogItems = catalogList.displayCatalogNames();

    catalogItems.forEach(item => {
      expect(item.title).toEqual("CalcularMCD");
    });
  });
});

describe("Pruebas de obtención de título y descripción de la kata", () => {
  it("Verifica si el campo 'Title' y 'description' del catálogo esta vacio", () => {
    const catalogList = new CatalogList(catalogData); // Pasa el arreglo de datos al constructor

    const catalogItems = catalogList.displayCatalogNames();

    catalogItems.forEach(item => {
      expect(item.description).toEqual("Kata para calcular el Máximo Común Divisor (MCD) de dos números.");
    });
  });
});

