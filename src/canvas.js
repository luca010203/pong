export default class Canvas {
    constructor(id, bgcolor, fillcolor, z) {
        this.Canvas = document.createElement('canvas');
        this.Canvas.width = 1000;
        this.Canvas.height = 700;
        this.Canvas.style.backgroundColor = bgcolor;
        this.Canvas.style.zIndex = z;
        this.Canvas.id = id;
        this.context = this.Canvas.getContext('2d');
        this.context.fillstyle = fillcolor;


        document.body.appendChild(this.Canvas); 

    }
}