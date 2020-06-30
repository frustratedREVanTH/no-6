class db {
    constructor(){
        this.Name = null
    }
    getUserName(){
        var nameref = database.ref("Name");
        nameref.on("value",(data)=>{
        name = data.val();
        })
 }
    update(){
        database.ref('/').update({
        Name:this.Name
        })
 }
}