$(document).ready(function () {
    $("#seldvvc").change(function () {
        let dv = $("#seldvvc").val()
        let phiship = dv == "Nhanh" ? 90000 : 50000
        $("#txtDongia").val(phiship)
    })

    $("#btndathang").click(function () {
        alert("Đã đặt hàng thành công")
    })

})

let dssp = JSON.parse(localStorage.getItem("dssp"))

function capnhatTien() {
    let masp = localStorage.getItem("masp")

    let temp = dssp.find(sp => sp.masp == masp)

    let soluong = document.getElementById("quantity")

    const sl = Number(soluong.value)
        
    let thanhtien = sl * temp.dongia

    $('#thanhtien').html(thanhtien);

    let phiship = $('#txtDongia').val();

    const phi = parseInt(phiship);

    let tongtien = thanhtien + phi
    $('#tongtien').html(tongtien);
    return true
}

$(document).ready(function () {

    let dssp = JSON.parse(localStorage.getItem("dssp"))
    let masp = localStorage.getItem("masp")

    let temp = dssp.find(sp => sp.masp == masp)

    $("#tensp").html(temp.tensp)
    $("#dongia").html(temp.dongia)
    $("#mota").html(temp.mota)

    function napSP(sp) {
        let temp = "<img src='" + sp.hinhanh + "' alt='' class='v-100' style='height: 500px;'>"
        $("#ha").html(temp)
    }
    $(document).ready(function () {
        dssp.forEach(sp => {
            napSP(temp)
        });
    })
})