import {Component, ViewChild} from '@angular/core';
import {MapComponent} from '@yaga/leaflet-ng2';
import {MapBaseData} from './mapBaseData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('mainMap', {read: MapComponent}) private mainMapComponent: MapComponent;
    /**
     * Has the basic map data.
     * @type {MapBaseData}
     */
    protected mapBaseData: MapBaseData = new MapBaseData();

    /**
     * true if table is shown: map and table are 50% width each.
     * false if table is hidden and map should be full width.
     * @type {boolean}
     */
    protected tableViewState: boolean = true;

    /**
     * Switches if the table is shown or not.
     */
    protected switch() {
        this.tableViewState = !this.tableViewState;
        setTimeout(() => {
          this.mainMapComponent.invalidateSize();
        }, 10);
    }

}
