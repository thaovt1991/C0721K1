let arrProduct = new Array("Sony Xperia", "Iphone 6", "SamSung Galaxy")
let arrBrand = new Array("Sony", "Apple", "Samsung")

function displayProduct() {
    let text = "<tr style= 'background-color: springgreen; width: 100%;;height: 80px;';>" +
        "<th colspan='3'; style='text-align: left;'><h3>Product Name</h3></th>" +
        "<th style=';text-align: right; color: red;' id='totalPro'</th></tr>";

    let text_EditRename = "";

    for (i = 0; i < arrProduct.length; i++) {
        text += " <tr id = 'Product " + i + "'>";
        text += "<td id = 'P" + i + "' >" + arrProduct[i] + "</td>";
        text += "<td id = 'brand" + i + "' >" + arrBrand[i] + "</td>"
        text += "<td><button type= 'button' id = 'editP" + i + " ' onclick= 'EditProduct(this.id)'>Edit</button></td>"
        text += "<td><button class='delete' type= 'button' id= 'deleteP" + i + " ' onclick= 'DeleteProduct(this.id)'>Delete</button> </td>"
        text += "</tr>"
        text_EditRename += `<fieldset id="renamePro${i}" style="width: 600px;background-color:skyblue; position:absolute;top: 18px;left:18px;display: none">
        <legend style="color:red;">
            <h1>Add New Product</h1>
        </legend>
        <input type="text" id="rename${i}" size="30" placeholder="Rename Product">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select  id ="rebrand${i}">
                <option value="Nokia">Nokia</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Asus">Asus</option>
        </select>
            <button type='button' id ='done${i}' onclick = 'RenameProduct(this.id)'>Done</button> &nbsp;&nbsp;&nbsp;
            <button  class='cancel' type ='button' id = 'cancelP${i}' onclick='cancelEdit(this.id)' >Cancel</button>
            </fieldset>`
    }
    document.getElementById("table").innerHTML = text + "  </table></fieldset>" + text_EditRename;
    if (arrProduct.length > 1) {
        document.getElementById("totalPro").innerHTML = "Totals : " + arrProduct.length + " Product";
    } else {
        document.getElementById("totalPro").innerHTML = "Total : " + arrProduct.length + " Product";
    }

}

function addProduct() {
    let value = document.getElementById("inputProduct").value;
    let valuaBra = document.getElementById("brand").value;
    if (value != "") {
        if (arrProduct.indexOf(value) == -1) {
            arrProduct.unshift(value)
            arrBrand.unshift(valuaBra)
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
    if (confirm('Bạn có muốn thay đổi tên sản phẩm "' + arrProduct[num] + '"')) {
        document.getElementById("renamePro" + num).style.display = "block";
        document.getElementById("rename" + num).focus();
        document.getElementById("rename" + num).value = arrProduct[num];
        document.getElementById("rebrand" + num).value = arrBrand[num];
        document.getElementById("editP"+num).disable = true ;

    }
}


function RenameProduct(clicker_id) {
    let num = (clicker_id).replace("done", "")
    let value = document.getElementById("rename" + num).value
    let valuaBra = document.getElementById("rebrand" + num).value;
    if (value != '') {
        arrProduct[num] = value;
        arrBrand[num] = valuaBra;
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