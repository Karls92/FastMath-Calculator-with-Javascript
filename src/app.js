import Config from './Config.js'
(function() {
    let app = new Config()
    app.showTitle()
    app.showAppName()
    app.showFooter()
    app.showRepository()

    let operations = ""
    let buttons = document.querySelectorAll(".btn")
    let equal_button = document.querySelector(".btn-equal")
    let reset_button = document.querySelector(".btn-reset")
    let result_screen = document.querySelector(".result-screen")
    
    buttons.forEach((btn, idx) => {
        btn.addEventListener("click", event => {
            if (operations === "" && isNaN(Number(event.target.dataset.digit))) {
                operations = "0"
            }
            if (operations === "0" && event.target.dataset.digit === "0") {
                operations = ""
            } 
            operations += event.target.dataset.digit
            result_screen.value = operations
        })
    })

    equal_button.addEventListener("click", (e) => {
        if(result_screen === "0") {
            result_screen.value = "0"
            operations = ""
        } else {
            operations = eval(operations)
            result_screen.value = operations
        }
    })
    reset_button.addEventListener("click", (e) => {
        operations = ""
        result_screen.value = "0"
    })

})();