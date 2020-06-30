class secondpage {
    constructor(){
        this.schoolwork=createButton("School work")
        this.officework=createButton("Office work")
        this.others=createButton("Others")
        
    }
    displaysp2(){
        this.others.position(615,350)
        this.officework.position(605,250)
        this.schoolwork.position(605,150)

        this.schoolwork.mousePressed(()=>{
             this.officework.hide();
             this.others.hide();
             this.schoolwork.hide(); 
             var tp = new thirdpage(); tp.displaytp();
  
         })
        
    }


    
    
    
}