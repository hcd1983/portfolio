import Work from "./Work";
class Works {
    _works = []
    constructor(works) {
        this._works = works
    }
    get worksOrigin () {
        return this._works
    }
    get works () {
        const works = this._works.map((work) => new Work(work))
        works.sort((a, b) => {
            return  b.priority - a.priority
        })
        return works
    }
}

export default Works
