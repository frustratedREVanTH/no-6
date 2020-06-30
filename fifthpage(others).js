class fifthpage {
    constructor(){
        this.back=createButton("Back")
    }

displayfp5(){
    this.back.position(200,200)
    this.back.mousePressed(()=>{
    this.back.hide();
    sp.displaysp2();

    })
}


}