export class RMFbyTucanSilverItemSheet extends ItemSheet {
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