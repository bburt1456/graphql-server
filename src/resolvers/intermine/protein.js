const proteinFactory = (sourceName) => ({
    Query: {
        protein: async (_source, { id }, { dataSources }) => {
            return dataSources[sourceName].getProtein(id);
        },
        proteins: async (_source, { description, start, size }, { dataSources }) => {
            const args = {
                description,
                start,
                size,
            };
            return dataSources[sourceName].searchProteins(args);
        },
    },
    Protein: {
        organism: async(protein, { }, { dataSources }) => {
            return dataSources[sourceName].getOrganism(protein.organismId);
        },
        strain: async(protein, { }, { dataSources }) => {
            return dataSources[sourceName].getStrain(protein.strainId);
        },
        genes: async (protein, { start, size }, { dataSources }) => {
            const args = {protein, start, size};
            return dataSources[sourceName].getGenes(args);
        },
        geneFamilyAssignments: async (protein, { start, size }, { dataSources }) => {
            const args = {protein, start, size};
            return dataSources[sourceName].getGeneFamilyAssignments(args);
        },
    },
});


module.exports = proteinFactory;
