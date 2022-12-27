const gwasFactory = (sourceName) => ({
    Query: {
        gwas: async (_source, { id }, { dataSources }) => {
            return dataSources[sourceName].getGWAS(id);
        },
        gwases: async (_source, { description, start, size }, { dataSources }) => {
            const args = {
                description,
                start,
                size,
            };
            return dataSources[sourceName].searchGWASes(args);
        },
    },
    GWAS: {
        organism: async(gwas, { }, { dataSources }) => {
            return dataSources[sourceName].getOrganism(gwas.organismId);
        },
        results: async (gwas, { start, size }, { dataSources }) => {
            const args = {gwas, start, size};
            return dataSources[sourceName].getGWASResults(args);
        },
    },
});


module.exports = gwasFactory;
