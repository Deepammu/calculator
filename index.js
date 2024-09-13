let os=document.getElementById('os')
 function display(txt)
 {
    os.value=txt;
 }

 function Clear()
 {
 os.value="";
}

function del()
 {
     os.value=os.value.slice(0,-1);
 }

 function Cube()
 {
    os.value=os.value*os.value*os.value;
 }

 function Sqroot()
 {
    os.value=os.value.Sqroot
 }

function area()
{
    let r=prompt('Enter the radius');
    let res=3.14*r*r;
    alert(`The area of circle is ${res}`);
 }

 function Diag()
{
    let d=prompt('Enter the diagonal');
    let res=math.sqrt((length * length) + (breadth * breadth));
     alert(`Length of diagonal: ` + diagonal ${res});
 }

function calculator()
{
 os.value=eval(os.value);
 }