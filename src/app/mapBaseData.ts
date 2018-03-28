import {OSM_TILE_LAYER_URL} from "@yaga/leaflet-ng2";

export class MapBaseData {

    private _tileLayerUrl: string = OSM_TILE_LAYER_URL;
    private _initialLat: number = 50;
    private _initialLon: number = 10;
    private _attributionDisplay: boolean = true;
    private _attributionPosition: string = "bottomleft";
    private _attributionName: Array<string> = [
        "&copy; " +
        "<a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> " +
        "contributors"
    ];
    private _initialZoomFactor: number = 6;

    constructor() {

    }

    get tileLayerUrl(): string {
        return this._tileLayerUrl;
    }

    get initialLat(): number {
        return this._initialLat;
    }

    get initialLon(): number {
        return this._initialLon;
    }

    get attributionDisplay(): boolean {
        return this._attributionDisplay;
    }

    get attributionPosition(): string {
        return this._attributionPosition;
    }

    get attributionName(): Array<string> {
        return this._attributionName;
    }

    get initialZoomFactor(): number {
        return this._initialZoomFactor;
    }

}
