import { Data } from './data';
import { Views } from './views';

export class CortexDevices {
    private currentTab = 'amps';

    private data = {
        all: [],
        amps: [],
        cabs: [],
        effects: [],
        captures: [],
        details: []
    };

    private views = Views;
    private filters = [
        { value: '', keys: ['name'] },
        { value: '', keys: ['real'] },
        { value: '', keys: ['type'] },
        { value: '', keys: ['irAuthor'] },
        { value: '', keys: ['deviceType'] },
    ];
    private showDetailsModal = false;
    private currentlySelectedDetail;

    constructor() {
        if (Data) {
            for (const key in Data) {
                this.data[key] = this.sortArrayOfObjectsAlphabetically(Data[key], 'name');
            }
        }
        
        this.data.all = [].concat(...Object.values(this.data));
    }

    sortArrayOfObjectsAlphabetically(array, key) {
        return array.sort((a, b) => {
            const nameA = a[key].toLowerCase();
            const nameB = b[key].toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }

    modalClosed() {
        this.currentlySelectedDetail = null;
        this.showDetailsModal = false;
    }

    triggerShowDetails = (device) => {
        const detailId = device.detailsId || device.id;
        const detail = this.data.details.find((d) => d.id === detailId) ?? null;
        if (detail) {
            this.currentlySelectedDetail = detail;
            this.showDetailsModal = true;
        }
    }

    getItemById = (itemId, dataType) => {
        return this.data[dataType].find((item) => item.id === itemId) ?? null;
    }

    toggleTab(tab) {
        this.currentTab = tab;
        this.filters.forEach((filter) => (filter.value = ''));
    }
}
