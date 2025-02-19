const { mergeResolvers } = require('@graphql-tools/merge');

const authorFactory = require('./author.js');
const chromosomeFactory = require('./chromosome.js');
const dataSetFactory = require('./data-set.js');
const expressionSampleFactory = require('./expression-sample.js');
const expressionSourceFactory = require('./expression-source.js');
const geneFactory = require('./gene.js');
const geneFamilyFactory = require('./gene-family.js');
const geneFamilyAssignmentFactory = require('./gene-family-assignment.js');
const geneFamilyTallyFactory = require('./gene-family-tally.js');
const geneticMapFactory = require('./genetic-map.js');
const geneticMarkerFactory = require('./genetic-marker.js');
const gwasFactory = require('./gwas.js');
const gwasResultFactory = require('./gwas-result.js');
const linkageGroupFactory = require('./linkage-group.js');
const linkageGroupPositionFactory = require('./linkage-group-position.js');
const locationFactory = require('./location.js');
const mRNAFactory = require('./mrna.js');
const ontologyFactory = require('./ontology.js');
const ontologyAnnotationFactory = require('./ontology-annotation.js');
const ontologyTermFactory = require('./ontology-term.js');
const organismFactory = require('./organism.js');
const pathwayFactory = require('./pathway.js');
const phylonodeFactory = require('./phylonode.js');
const phylotreeFactory = require('./phylotree.js');
const proteinDomainFactory = require('./protein-domain.js');
const proteinFactory = require('./protein.js');
const publicationFactory = require('./publication.js');
const qtlFactory = require('./qtl.js');
const qtlStudyFactory = require('./qtl-study.js');
const syntenicRegionFactory = require('./syntenic-region.js');
const syntenyBlockFactory = require('./synteny-block.js');
const strainFactory = require('./strain.js');
const traitFactory = require('./trait.js');

const mineWebPropertiesFactory = require('./mine-web-properties.js');

const factories = [
    authorFactory,
    chromosomeFactory,
    dataSetFactory,
    expressionSampleFactory,
    expressionSourceFactory,
    geneFactory,
    geneFamilyFactory,
    geneFamilyAssignmentFactory,
    geneFamilyTallyFactory,
    geneticMapFactory,
    geneticMarkerFactory,
    gwasFactory,
    gwasResultFactory,
    linkageGroupFactory,
    linkageGroupPositionFactory,
    locationFactory,
    mRNAFactory,
    ontologyFactory,
    ontologyAnnotationFactory,
    ontologyTermFactory,
    organismFactory,
    pathwayFactory,
    phylonodeFactory,
    phylotreeFactory,
    proteinDomainFactory,
    proteinFactory,
    publicationFactory,
    qtlFactory,
    qtlStudyFactory,
    strainFactory,
    syntenicRegionFactory,
    syntenyBlockFactory,
    traitFactory,

    mineWebPropertiesFactory,
];


// a factory function that generates resolvers for a specific InterMine
// data source.
const intermineResolverFactory = (sourceName) => {
    const sourceResolvers = factories.map((factory) => {
        return factory(sourceName);
    });
    return mergeResolvers(sourceResolvers);
};


module.exports = intermineResolverFactory;
