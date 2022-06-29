export class RMFbyTucanSilverItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: [ "rmfbytucansilver", "sheet", "item"]
        });
    }

    get template() {
        return `systems/rmfbytucansilver/templates/sheets/${this.item.data.type}-sheet.html`
    }
    
    getData() {
        const context = super.getData();
        context.config = CONFIG.rmfbytucansilver;
        context.systemData = context.data.data;
        return context;
      }
}