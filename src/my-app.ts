import amps from './data/amps.json';
import cabs from './data/cabs.json';
import effects from './data/effects.json';
import captures from './data/captures.json';

import AmpsTable from './amps-table.html';
import CabsTable from './cabs-table.html';
import EffectsTable from './effects-table.html';
import CapturesTable from './captures-table.html';

export class MyApp {
    private currentTab = 'amps';

    private amps = amps;
    private cabs = cabs;
    private effects = effects;
    private captures = captures;

    private ampsView = AmpsTable;
    private cabsView = CabsTable;
    private effectsView = EffectsTable;
    private capturesView = CapturesTable;

    private filters = [
        { value: '', keys: ['name'] },
        { value: '', keys: ['real'] },
        { value: '', keys: ['type'] },
        { value: '', keys: ['irAuthor'] },
        { value: '', keys: ['deviceType'] },
    ];

    getCab(cabId) {
        return this.cabs.find((c) => c.id === cabId) ?? null;
    }

    toggleTab(tab) {
        this.currentTab = tab;

        for (const filter of this.filters) {
            filter.value = '';
        }
    }
}
