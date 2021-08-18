let arrProduct = new Array("Nokia", "Sony", "SamSung")
function displayProduct() {
    document.getElementById("totalProduct").innerHTML = arrProduct.length + " Product "
    for (i = 0; i < arrProduct.length; i++) {
        document.getElementById("P" + i).innerHTML = arrProduct[i];
        document.getElementById("editP" + i).style.display = "block"
        document.getElementById("deleteP" + i).style.display = "block"
    }

}


function addProduct() {
    let value = document.getElementById("inputProduct").value;
    if (value != "") {
        if (arrProduct.indexOf(value) == -1) {
            arrProduct.push(value)
            let i = arrProduct.length - 1
            document.getElementById("inputProduct").value = "";
            document.getElementById("inputProduct").focus()
            document.getElementById("editP" + i).style.display = "block"
            document.getElementById("deleteP" + i).style.display = "block"
        } else {
            alert("Sản phẩm đã có trong danh sách.Hãy nhập lại")
            document.getElementById("inputProduct").focus()
        }
    }
    else {
        alert("Sản phẩm không được để trống")
        document.getElementById("inputProduct").focus()
    }
    displayProduct()
}
function deleteDisplayLast() {
    let last = arrProduct.length;
    document.getElementById("edit" + last).style.display = "none";
    document.getElementById("deleteP" + last).style.display = "none";
    document.getElementById(last).innerHTML = ""
}

function DeleteProduct(clicker_id) {
    let num = parseInt((clicker_id).replace("deleteP", ""))
    let str = (clicker_id).replace("delete", "");
    arrProduct.splice(num, 1)
    document.getElementById("edit" + str).style.display = "none";
    document.getElementById(clicker_id).style.display = "none";
    document.getElementById(str).innerHTML = "";
    displayProduct()
}
function EditProduct(clicker_id) {
    let num = (clicker_id).replace("editP", "")
    let str = (clicker_id).replace("edit", "");
    document.getElementById("renamePro" + num).style.display = "block";
}
function RenameProduct(clicker_id) {
    let num = (clicker_id).replace("done", "")
    if (document.getElementById("rename" + num).value != '') {
        arrProduct[num] = document.getElementById("rename" + num).value
        document.getElementById("renamePro" + num).style.display = "none"
        displayProduct()
    } else {
        alert("Không để trống tên");
        document.getElementById("rename" + num).focus()
    }
    document.getElementById("rename" + num).value ="" ;

}