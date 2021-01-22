 function megaFriend(name) {
     var result='';
     for( var i=0;i<name.length;i++)
        {        
           var numberofname=friendsname[i]
           if(numberofname.length>result.length)
           {
               result=name[i];
           }
    
        }
      return result;  
 }
        var friendsname=["noha ahmed","Khaya","nasir bin ahmed"];
        var largestname=megaFriend(friendsname);
            console.log("The largest friend name:",largestname);