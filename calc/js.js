const i=document.getElementById("disp")
function insert(value)
{
    i.value=i.value+value;
}
function remove_last()
{
    i.value=i.value.slice(0,-1);
}
function all_clear()
{
    i.value="";
}
function calculation()
{
    try{
        i.value=eval(i.value);
    }
    catch{
        i.value='error';
    }
}