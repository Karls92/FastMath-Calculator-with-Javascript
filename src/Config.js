class Config {
    constructor() {
        this._name = "FastMath"
        this._title = "FastMath - Basic Calculator"
        this._version = "1.0.0"
        this._created_at = 2022
        this._author = "Carmen B."
        this._alias = "SoftwareDevOne"
        this._email = "nbravoalcala@gmail.com"
        this._repository = "https://github.com/Karls92/FastMath-Calculator-with-Javascript"
        this._published_year = 2023 
    }
    showTitle() {
        document.querySelector("title").innerHTML = `${this._title} by ${this._alias}`
    }
    showAppName(){
        document.querySelector(".calculator-title h1").innerHTML = this._name
    }
    showFooter() {
        document.querySelector(".copyright").innerHTML = `&copy; ${this._published_year} <a href='mailto:${this._email}' target='_blank'>${this._alias}</a> All rights reserves`
    }
    showRepository() {
        document.querySelector(".app-repository").innerHTML = `<a href='${this._repository}' target='_blank'> &#60;&#47;&#62; Go to project repository</a>`
    }
}

export default Config;