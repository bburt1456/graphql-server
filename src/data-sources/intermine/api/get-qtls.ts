// get QTLs for a LinkageGroup, Trait, GeneticMarker
//export async function getQTLs({linkageGroup=null, trait=null, geneticMarker=null, start=0, size=10}) {
export async function getQTLs({linkageGroup=null, trait=null, geneticMarker=null}) {
    const constraints = [];
    if (linkageGroup) {
        const linkageGroupConstraint = this.pathquery.intermineConstraint('QTL.linkageGroup.id', '=', linkageGroup.id);
        constraints.push(linkageGroupConstraint);
    }
    if (trait) {
        const traitConstraint = this.pathquery.intermineConstraint('QTL.trait.id', '=', trait.id);
        constraints.push(traitConstraint);
    }
    if (geneticMarker) {
        const geneticMarkerConstraint = this.pathquery.intermineConstraint('QTL.markers.id', '=', geneticMarker.id);
        constraints.push(geneticMarkerConstraint);
    }
    const query = this.pathquery.interminePathQuery(
        this.models.intermineQTLAttributes,
        this.models.intermineQTLSort,
        constraints,
    );
    return this.pathQuery(query)
        .then((response) => this.models.response2qtls(response));
}
