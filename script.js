function generateSurat() {
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var tglLahir = document.getElementById("tglLahir").value;
    var keterangan = document.getElementById("keterangan").value;

    document.getElementById("namaSurat").innerText = nama;
    document.getElementById("alamatSurat").innerText = alamat;
    document.getElementById("tglLahirSurat").innerText = tglLahir;
    document.getElementById("keteranganSurat").innerText = keterangan;

    document.getElementById("form").style.display = "none";
    document.getElementById("surat").style.display = "block";
}

function printSurat() {
    window.print();
}

function generatePDF() {
    const { jsPDF } = window.jspdf;

    var doc = new jsPDF();

    doc.text("Surat Keterangan Tidak Mampu", 10, 10);
    doc.text("Yang bertanda tangan di bawah ini:", 10, 20);
    doc.text(`Nama: ${document.getElementById("namaSurat").innerText}`, 10, 30);
    doc.text(`Alamat: ${document.getElementById("alamatSurat").innerText}`, 10, 40);
    doc.text(`Tanggal Lahir: ${document.getElementById("tglLahirSurat").innerText}`, 10, 50);
    doc.text(`Keterangan: ${document.getElementById("keteranganSurat").innerText}`, 10, 60);
    doc.text("Dengan ini menyatakan bahwa yang bersangkutan adalah benar-benar warga yang tidak mampu.", 10, 70);

    doc.save("Surat_Keterangan_Tidak_Mampu.pdf");
}
