let arrProduct = new Array("Nokia", "Sony", "SamSung")
function displayProduct() {
    let text = "<tr style= 'background-color: springgreen; width: 100%;;height: 80px;';>" +
        "<th colspan='2'; style='text-align: left;'><h3>Product Name</h3></th>" +
        "<th style=';text-align: right; color: red;' id='totalPro'</th></tr>";

    let text_EditRename = "";

    for (i = 0; i < arrProduct.length; i++) {
        text += " <tr id = 'Product " + i + "'>";
        text += "<td id = 'P" + i + "' >" + arrProduct[i] + "</td>";
        text += "<td><button type= 'button' id = 'editP" + i + " ' onclick= 'EditProduct(this.id)'>Edit</button></td>"
        text += "<td><button class='delete' type= 'button' id= 'deleteP" + i + " ' onclick= 'DeleteProduct(this.id)'>Delete</button> </td>"
        text += "</tr>"
        text_EditRename += "<fieldset id ='renamePro" + i + "' style= 'width :400px;float: right;background-color:violet;left: 200px ; top :250px;position: fixed;display: none;'> " +
            "<legend style='font-size: 22px;color: red;'>Edit Product</legend>" +
            "Rename Product <br>" +
            "<input type='text' id = 'rename" + i + "' size='30'> " +
            "<button type='button' id ='done" + i + "' onclick = 'RenameProduct(this.id)'>Done</button> &nbsp;&nbsp;&nbsp;" +
            "<button class='cancel' type ='button' id = 'cancelP" + i + "' onclick='cancelEdit(this.id)' >Cancel</button>" +
            "</fieldset>"
    }
    document.getElementById("table").innerHTML = text + "  </table></fieldset>" + text_EditRename;

    document.getElementById("totalPro").innerHTML = "Total : " + arrProduct.length + " Product";

}

function addProduct() {
    let value = document.getElementById("inputProduct").value;
    if (value != "") {
        if (arrProduct.indexOf(value) == -1) {
            arrProduct.unshift(value)
            document.getElementById("inputProduct").focus()
            document.getElementById("inputProduct").value = ""
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



function DeleteProduct(clicker_id) {
    let num = parseInt((clicker_id).replace("deleteP", ""))
    if (confirm("Bạn có chắc là mình muốn xóa sản phẩm trên ?")) {
        arrProduct.splice(num, 1)
    }
   displayProduct()
}



function EditProduct(clicker_id) {
    let num = parseInt((clicker_id).replace("editP", ""))
    if (confirm("Bạn có muốn thay đổi tên sản phẩm")) {
        document.getElementById("renamePro" + num).style.display = "block";
        document.getElementById("rename" + num).focus();
        document.getElementById("rename" + num).value = arrProduct[num];
    }
}


function RenameProduct(clicker_id) {
    let num = (clicker_id).replace("done", "")
    let value = document.getElementById("rename" + num).value
    if (value != '') {
        arrProduct[num] = value
        document.getElementById("renamePro" + num).style.display = "none"
        displayProduct()
    } else {
        alert("Không để trống tên");
        document.getElementById("rename" + num).focus()
    }
    document.getElementById("rename" + num).value = "";

}
function cancelEdit(clicker_id) {
    let num = parseInt((clicker_id).replace("cancelP", ""));
    if (confirm("Bạn có muốn hủy thay đổi")) {
        document.getElementById("renamePro" + num).style.display = "none";
    }
}