class CatalogList{
    constructor(data) {
        this.catalogData = data;
    }
    displayCatalogNames() {
        return this.catalogData.map(catalog => catalog.Title);
    }
}
export default CatalogList;
    
