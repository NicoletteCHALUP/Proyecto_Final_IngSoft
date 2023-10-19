import CatalogList from './index.js';

describe("Pruebas de obtención de título de la kata", () => {
  it("Verifica si la función retorna el título correctamente", () => {
    const catalogList = new CatalogList(); // Instancia la clase
    expect(catalogList.getKataTitle()).toEqual("CalcularMCD"); // Llama a la función en el contexto de la instancia
  });
});
