document.getElementById("btn")
let nj7 = document.getElementById("nj")


btn.addEventListener('click', function(){
  
let inp =  prompt("                    كم ركعة في صلاة الفجر  (3) (4) (2)   ")

  
  if(inp == "٢"){
alert("صحيح ")
    document.body.style.background = 'green';
    
  }
  
    
 else if(inp == "2"){
alert("صحيح ")
    document.body.style.background = 'green';
    
  }
  
  
  
  else{
    alert("غلط !")
    nj7.replaceWith("خاسر !")
    document.body.style.background = 'darkred';
    
    
  }
  
  
  
  
  
  let inp2 = prompt("كم استغرق الله من يوم لخلق الدنيا   (1) (4) (6)")
  
  if(inp2 == "6"){
    alert("صحيح ")
    document.body.style.background = 'green';
    nj7.replaceWith("ناجح")
    btn.remove()
  }
  
  else{
    alert("غلط !")
    document.body.style.background = 'darkred';
    btn.remove()
    
  }
}
)


