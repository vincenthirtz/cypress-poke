describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit(
      "https://www.pokemon.com/fr/jcc-pokemon/cartes-pokemon/series/swshp/SWSH231/"
    );
  });
});
