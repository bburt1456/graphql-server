// path query search for Gene by description
async function searchGenes({description, name, start=0, size=10}={}) {
    const constraints = [];
    if (description) {
        const descriptionConstraint = this.pathquery.intermineConstraint('Gene.description', 'CONTAINS', description);
        constraints.push(descriptionConstraint);
    }
    if (name) {
        const nameConstraint = this.pathquery.intermineConstraint('Gene.name', 'CONTAINS', name);
        constraints.push(nameConstraint);
    }
    const query = this.pathquery.interminePathQuery(
        this.models.intermineGeneAttributes,
        this.models.intermineGeneSort,
        constraints,
    );
    const options = {start, size};
    return this.pathQuery(query, options)
        .then((response) => this.models.response2genes(response));
}


module.exports = searchGenes;
