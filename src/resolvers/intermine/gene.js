const geneFactory = (sourceName) => ({
    Query: {
        gene: async (_source, { id }, { dataSources }) => {
            return dataSources[sourceName].getGene(id);
        },
        genes: async (_source, { description, name, start, size }, { dataSources }) => {
            const args = {
                description,
                name,
                start,
                size,
            };
            return dataSources[sourceName].searchGenes(args);
        },
    },
    Gene: {
        organism: async (gene, { }, { dataSources }) => {
            return dataSources[sourceName].getOrganism(gene.organismId);
        },
        strain: async (gene, { }, { dataSources }) => {
            return dataSources[sourceName].getStrain(gene.strainId);
        },
        dataSets: async (gene, { start, size }, { dataSources }) => {
            const args = {
                bioEntity: gene,
                start,
                size
            };
            return dataSources[sourceName].getDataSets(args);
        },
        geneFamilyAssignments: async (gene, { start, size }, { dataSources }) => {
            const args = {
                gene: gene,
                start,
                size
            };
            return dataSources[sourceName].getGeneFamilyAssignments(args);
        },
        proteinDomains: async (gene, { start, size }, { dataSources }) => {
            const args = {gene, start, size};
            return dataSources[sourceName].getProteinDomains(args);
        },
        locations: async (gene, { start, size }, { dataSources }) => {
            const args = {
                sequenceFeature: gene,
                start,
                size
            };
            return dataSources[sourceName].getLocations(args);
        },
        ontologyAnnotations: async (gene, { start, size }, { dataSources }) => {
            const args = {
                annotatable: gene,
                start,
                size
            };
            return dataSources[sourceName].getOntologyAnnotations(args);
        },
        pathways: async (gene, { start, size }, { dataSources }) => {
            const args = {
                annotatable: gene,
                start,
                size
            };
            return dataSources[sourceName].getPathways(args);
        },
        publications: async (gene, { start, size }, { dataSources }) => {
            const args = {
                annotatable: gene,
                start,
                size
            };
            return dataSources[sourceName].getPublications(args);
        },
    },
});


module.exports = geneFactory;
