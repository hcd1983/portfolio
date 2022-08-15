const config = require("../config/index.js") ;

class Config {
    constructor() {
        this.config = config
        for(let key in config) {
            if (!this.hasOwnProperty(key)) {
                this[key] = config[key]
            }
        }
    }

}

module.exports = new Config()
