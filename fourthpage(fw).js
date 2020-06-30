class fourthpage {
    constructor(){
        this.back=createButton("Back")
    }

displayfp4(){
    this.back.position(200,200)
    this.back.mousePressed(()=>{
    this.back.hide();
    sp.displaysp2();

    })
}


}