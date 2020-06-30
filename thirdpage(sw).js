class thirdpage 
{ constructor(){ 
    this.homework=createButton("Home work");
     this.classwork=createButton("class work"); 
     this.back=createButton("back"); } 
     displaytp(){
          this.back.position(615,350);
           this.homework.position(615,250); 
           this.classwork.position(615,150);
            this.homework.mousePressed(()=>{ 
             this.classwork.hide();
            this.back.hide();
                  this.homework.hide();
              

                   
                }) 
                }
               myFunction() { 
                  var x = document.createElement("INPUT");
                   x.setAttribute("type", "date");
                    x.setAttribute("value", "2020-06-27");
                     // x.setAttribute("style", "background-color: red;"); 
                     document.body.appendChild(x); console.log(x); }
             }