new Vue ({
    el: "#app",
    data: {
        red: 0,
        green: 0,
        blue: 0,
        bigSquare: "rgb(0, 0, 0)",
        colors: []
    },
    methods: {
        saveColor(){
            this.colors.push("rgb(" + this.red + "," + this.green + "," + this.blue + ")")
            console.log(this.colors)
            this.resetRGB()
        },
        reset(){
            this.colors = []
            this.resetRGB()
        },
        resetRGB(){
            this.red = 0
            this.green = 0
            this.blue = 0
        }
    },
    computed: {
        numberColors(){
            console.log(this.colors.length)
            return this.colors.length
        },
        colorDisplay(){
            return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
        }
    }
})