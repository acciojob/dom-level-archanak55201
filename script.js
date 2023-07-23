//your JS code here. If required.
const ilevel=document.getElementsByTagName("li");
// console.log(level[4].id);
const n=ilevel.length 
for(let i=0;i<n;i++){
    if(ilevel[i].id==="level"){
        i++;
        alert("The level of the element is: "+i);
   
    }
}