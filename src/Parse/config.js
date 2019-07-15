
export default class Parse {
    constructor() {
        this._parseURL = process.env.REACT_APP_PARSE_URL;
        this._parseAppId = process.env.REACT_APP_PARSE_APPID;
        this._parseMasterKey = process.env.REACT_APP_PARSE_MASTERKEY;
        Object.freeze(this);
    }

    getUrl() {
        return this._parseURL;
    }

    getAppId(){
        return this._parseAppId;
    }
    
    getHeaders() {
        return {
            'X-Parse-Application-Id': this._parseAppId,
            'X-Parse-Master-Key': this._parseMasterKey
        }
    }
}
