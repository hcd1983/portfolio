class Work {
    _priority = 0
    _cover = null
    constructor(work) {
        for(let key in work) {
            if (!this.hasOwnProperty(key)) {
                this[key] = work[key]
            } else {
                console.log(key)
            }
        }
    }
    get priority () {
        return this._priority
    }
    set priority (val) {
        this._priority = val ?? this._priority
    }
    get cover () {
        return this._cover
    }
    set cover (val) {
        this._cover = val ?? this._cover
    }

}

export default Work
