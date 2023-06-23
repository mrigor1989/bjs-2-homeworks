class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = state,
        this.type = type
    }
    fix(){
        this.state = this.state * 1,5;
    }
}