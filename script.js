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

    // Menambahkan logo jika tersedia
    const img = new Image();
    img.src = 'logo.png';
    img.onload = function() {
        doc.addImage(img, 'PNG', 10, 10, 30, 30);
        doc.setFontSize(16);
        doc.text("PEMERINTAH DESA [NAMA DESA]", 50, 20);
        doc.setFontSize(14);
        doc.text("KECAMATAN [NAMA KECAMATAN]", 50, 30);
        doc.text("KABUPATEN [NAMA KABUPATEN]", 50, 40);
        doc.setFontSize(12);
        doc.text("Alamat: [ALAMAT DESA]", 50, 50);
        doc.setLineWidth(1.0);
        doc.line(10, 60, 200, 60);
        doc.setFontSize(14);
        doc.text("SURAT KETERANGAN TIDAK MAMPU", 105, 70, null, null, 'center');
        doc.setFontSize(12);
        doc.text("Nomor: [NOMOR SURAT]", 10, 80);
        doc.text("Yang bertanda tangan di bawah ini:", 10, 90);
        doc.text(`Nama: ${document.getElementById("namaSurat").innerText}`, 10, 100);
        doc.text(`Alamat: ${document.getElementById("alamatSurat").innerText}`, 10, 110);
        doc.text(`Tanggal Lahir: ${document.getElementById("tglLahirSurat").innerText}`, 10, 120);
        doc.text(`Keterangan: ${document.getElementById("keteranganSurat").innerText}`, 10, 130);
        doc.text("Dengan ini menyatakan bahwa yang bersangkutan adalah benar-benar warga yang tidak mampu.", 10, 140);
        doc.text("[NAMA DESA], [TANGGAL SURAT]", 10, 160);
        doc.text("Kepala Desa [NAMA DESA]", 10, 170);
        doc.text("[NAMA KEPALA DESA]", 10, 200);

        doc.save("Surat_Keterangan_Tidak_Mampu.pdf");
    };
}
