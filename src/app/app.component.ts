import {Component} from '@angular/core';
import {MapBaseData} from "./mapBaseData";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    }

}
