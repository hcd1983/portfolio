class Work {
    _priority = 0
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
}

export default Work
