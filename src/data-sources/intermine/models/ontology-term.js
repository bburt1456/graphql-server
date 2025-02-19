// <class name="OntologyTerm" is-interface="true" term="http://semanticscience.org/resource/SIO_000275">
// 	<attribute name="identifier" type="java.lang.String" term="http://semanticscience.org/resource/SIO_000675"/>
// 	<attribute name="description" type="java.lang.String" term="http://purl.org/dc/terms/description"/>
// 	<attribute name="obsolete" type="java.lang.Boolean" term="http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C63553"/>
// 	<attribute name="name" type="java.lang.String" term="http://www.w3.org/2000/01/rdf-schema#label"/>
// 	<attribute name="namespace" type="java.lang.String" term="http://semanticscience.org/resource/SIO_000067"/>
// 	<reference name="ontology" referenced-type="Ontology"/>
// 	<collection name="relations" referenced-type="OntologyRelation"/>
// 	<collection name="synonyms" referenced-type="OntologyTermSynonym"/>
// 	<collection name="ontologyAnnotations" referenced-type="OntologyAnnotation" reverse-reference="ontologyTerm"/>
// 	<collection name="parents" referenced-type="OntologyTerm"/>
// 	<collection name="dataSets" referenced-type="DataSet"/>
// 	<collection name="crossReferences" referenced-type="OntologyTerm"/>
// </class>
// NOTE: we can't query OntologyTerm.ontology.id here because ontology is sometimes null.
const intermineOntologyTermAttributes = [
    'OntologyTerm.id',
    'OntologyTerm.identifier',
    'OntologyTerm.description',   
    'OntologyTerm.obsolete',
    'OntologyTerm.name',
    'OntologyTerm.namespace',
]
const intermineOntologyTermSort = 'OntologyTerm.identifier';
// type OntologyTerm {
//   id: ID!
//   identifier: String!
//   description: String
//   obsolete: Boolean
//   name: String
//   namespace: String
//   # ontology
//   # relations
//   # synonyms
//   # ontologyAnnotations
//   # parents
//   # dataSets
//   # crossReferences
// }
const graphqlOntologyTermAttributes = [
    'id',
    'identifier',
    'description',
    'obsolete',
    'name',
    'namespace',
];
function response2ontologyTerms(response) {
    return this.pathquery.response2graphqlObjects(response, graphqlOntologyTermAttributes);
}

// OntologyTerm.dataSets has no reverse reference
const intermineOntologyTermDataSetAttributes = [
    'OntologyTerm.dataSets.id',
    'OntologyTerm.dataSets.description',
    'OntologyTerm.dataSets.licence',
    'OntologyTerm.dataSets.url',
    'OntologyTerm.dataSets.name',
    'OntologyTerm.dataSets.version',
    'OntologyTerm.dataSets.synopsis',
    'OntologyTerm.dataSets.publication.id',  // internal resolution of publication
];
const intermineOntologyTermDataSetSort = 'OntologyTerm.dataSets.name'; // guaranteed not null


module.exports = {
    intermineOntologyTermAttributes,
    intermineOntologyTermSort,
    graphqlOntologyTermAttributes,
    response2ontologyTerms,

    intermineOntologyTermDataSetAttributes,
    intermineOntologyTermDataSetSort,
};
