// <class name="GWAS" extends="Annotatable" is-interface="true" term="">
// 	<attribute name="genotypingPlatform" type="java.lang.String"/>
// 	<attribute name="description" type="java.lang.String"/>
// 	<attribute name="genotypes" type="java.lang.String"/>
// 	<attribute name="genotypingMethod" type="java.lang.String"/>
// 	<attribute name="synopsis" type="java.lang.String"/>
// 	<reference name="organism" referenced-type="Organism"/>
// 	<reference name="dataSet" referenced-type="DataSet"/>
// 	<collection name="results" referenced-type="GWASResult" reverse-reference="gwas"/>
// </class>
export const intermineGWASAttributes = [
    'GWAS.id',
    'GWAS.primaryIdentifier',
    'GWAS.genotypingPlatform',
    'GWAS.description',
    'GWAS.genotypes',
    'GWAS.genotypingMethod',
    'GWAS.synopsis',
    'GWAS.organism.id',
    'GWAS.dataSet.id',
];
export const intermineGWASSort = 'GWAS.primaryIdentifier';


// type GWAS {
//   id: ID!
//   identifier: String!
//   # ontologyAnnotations
//   # publications
//   genotypingPlatform: String
//   description: String
//   genotypes: String
//   genotypingMethod: String
//   synopsis: String
//   organism: Organism
//   dataSet
//   results: [GWASResult]
// }
export const graphqlGWASAttributes = [
    'id',
    'identifier',
    'genotypingPlatform',
    'description',
    'genotypes',
    'genotypingMethod',
    'synopsis',
    'organismId',
    'dataSetId',
];


export function response2gwas(response) {
    return this.pathquery.response2graphqlObjects(response, graphqlGWASAttributes);
}
