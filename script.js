class passwordgen{
    constructor(){
      console.log("constructor")
      this.pass=""
    }
    generator(len){
      let chars="abcdefghijklmnopqrstuvwxyz"
  let num="123456789" 
    let special="@!#$%^&*()"
    if(len<3){
      console.log("it should be more than 3")
  
    }
    else{
      for(var i=0;i<len;i++){
        this.pass+=chars[Math.floor(Math.random()*chars.length)]
           this.pass+=num[Math.floor(Math.random()*num.length)]
    this.pass+=special[Math.floor(Math.random()*special.length)]
      }
  
    }this.pass=this.pass. substr(0,len)
      return this.pass;
    }
  }
  let p=new passwordgen()
  console.log(p.generator(4))