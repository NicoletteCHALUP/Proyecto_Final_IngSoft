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
    
}
export default CatalogList;
    
