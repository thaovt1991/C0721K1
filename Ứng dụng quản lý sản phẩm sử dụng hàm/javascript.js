let arrProduct = new Array()
let x = 0 ;
function addProduct(){
    arrProduct[x] = document.getElementById("inputProduct").value ;
    document.getElementById("inputProduct").value = "";
    document.getElementById("inputProduct").focus()
    document.getElementById("P"+x).innerHTML = arrProduct[ parseInt(x)] ;
    document.getElementById("editP"+x).style.display = "block"
    document.getElementById("deleteP"+x).style.display = "block"
    x++ ;

}










function DeleteProduct(clicker_id){
    let num = (clicker_id).replace("deleteProduct","")
    let str = (clicker_id).replace("delete","") ;
    document.getElementById("edit"+str).style.display = "none";
    document.getElementById(clicker_id).style.display = "none" ;
    document.getElementById(str).innerHTML = ""
    arrProduct.splice(num,1)
    
}