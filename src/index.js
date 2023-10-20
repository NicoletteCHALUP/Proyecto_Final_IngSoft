class CatalogList{
    constructor(data) {
        this.catalogData = data;
    }
    displayCatalogNames() {
        return this.catalogData.map(catalog => {
            return {
                title: catalog.Title,
                description: catalog.Description,
                difficulty: catalog.Difficulty
            };
        });
    }
    renderCatalogsToContainer() {
        const catalogContainer = document.getElementById("catalog-container");
        const catalogTemplate = document.getElementById("catalog-template");
    
        this.catalogData.forEach(catalog => {
            const catalogClone = document.importNode(catalogTemplate.content, true);
            catalogContainer.appendChild(catalogClone);
        });
    }
    
    
}
export default CatalogList;
    
