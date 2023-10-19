describe("Pruebas de obtención de título de la kata", () => {
    it("Verifica si la función retorna el título correctamente", () => {
      expect(getKataTitle()).toEqual("CalcularMCD");
    });
  }
);
function getKataTitle(){
    return "CalcularMCD";
}