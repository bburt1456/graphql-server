// ProteinDomain InterMine path query attributes
// <class name="ProteinDomain" extends="Annotatable" is-interface="true" term="http://purl.obolibrary.org/obo/SO:0000417">
//  	<attribute name="description" type="java.lang.String"/>
// 	<attribute name="type" type="java.lang.String"/>
// 	<attribute name="name" type="java.lang.String"/>
//	<attribute name="shortName" type="java.lang.String"/>
// 	<collection name="genes" referenced-type="Gene" reverse-reference="proteinDomains"/>
// 	<collection name="geneFamilies" referenced-type="GeneFamily" reverse-reference="proteinDomains"/>
// 	<collection name="childFeatures" referenced-type="ProteinDomain"/>
// 	<collection name="foundIn" referenced-type="ProteinDomain"/>
// 	<collection name="parentFeatures" referenced-type="ProteinDomain"/>
// 	<collection name="contains" referenced-type="ProteinDomain"/>
// </class>
const intermineProteinDomainAttributes = [
    'ProteinDomain.id',
    'ProteinDomain.primaryIdentifier',
    'ProteinDomain.description',
    'ProteinDomain.type',
    'ProteinDomain.name',
    'ProteinDomain.shortName',
];
const intermineProteinDomainSort = 'ProteinDomain.primaryIdentifier';

// the attributes of a ProteinDomain in the GraphQL API
// id: ID!
// identifier: String!
// # ontologyAnnotations
// # publications
// description: String
// type: String
// name: String
// shortName: String
// genes: [Gene]
// geneFamilies: [GeneFamily]
// # childFeatures: [ProteinDomain]
// # foundIn: [ProteinDomain]
// # parentFeatures: [ProteinDomain]
// # contains: [ProteinDomain]
const graphqlProteinDomainAttributes = [
    'id',
    'identifier',
    'description',
    'type',
    'name',
    'shortName',
];

// converts an Intermine response into an array of GraphQL ProteinDomain objects
function response2proteinDomains(response) {
    return this.pathquery.response2graphqlObjects(response, graphqlProteinDomainAttributes);
}


module.exports = {
    intermineProteinDomainAttributes,
    intermineProteinDomainSort,
    graphqlProteinDomainAttributes,
    response2proteinDomains,
};
