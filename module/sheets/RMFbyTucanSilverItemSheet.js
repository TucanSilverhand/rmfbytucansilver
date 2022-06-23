export class RMFbyTucanSilverItemSheet extends ItemSheet {
    get template() {
        return `systems/rmfbytucansilver/templates/sheets/${this.item.data.type}-sheet.html`
    }
    
    getData() {
        const data = super.getData();
        data.config = CONFIG.rmfbytucansilver;
        return data;
    }
}