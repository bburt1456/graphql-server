export const phylonodeFactory = (sourceName) => ({
    Query: {
        phylonode: async (_source, { id }, { dataSources }) => {
            return dataSources[sourceName].getPhylonode(id);
        },
    },
    Phylonode: {
        protein: async(phylonode, { }, { dataSources }) => {
            return dataSources[sourceName].getProtein(phylonode.proteinId);
        },
        tree: async(phylonode, { }, { dataSources }) => {
            return dataSources[sourceName].getPhylotree(phylonode.treeId);
        },
        parent: async(phylonode, { }, { dataSources }) => {
            return dataSources[sourceName].getPhylonode(phylonode.parentId);
        },
        children: async (phylonode, { start, size }, { dataSources }) => {
            const args = {parent: phylonode, start, size};
            return dataSources[sourceName].getPhylonodes(args);
        },
    },
});
