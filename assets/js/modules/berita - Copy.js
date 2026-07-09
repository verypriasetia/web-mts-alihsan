function formatTanggal(tanggal) {

    if (!tanggal) return "-";

    const tgl = new Date(tanggal);

    if (isNaN(tgl.getTime())) return "-";

    return tgl.toLocaleDateString("id-ID", {
        timeZone: "Asia/Makassar",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}

async function tampilkanBerita() {

    const container = document.getElementById("beritaContainer");

    if (!container) return;

    container.innerHTML = "<p>Memuat berita...</p>";

    const semuaBerita = await api.get("berita");

    // Homepage hanya menampilkan 3 berita terbaru
    const berita = semuaBerita.slice(0, 3);

    container.innerHTML = "";

    berita.forEach(item => {

        container.innerHTML += `
        <div class="berita-card">
            <img src="${item.thumbnail || 'assets/images/default.jpg'}" alt="${item.judul}">
            <div class="berita-body">
                <h3>${item.judul}</h3>
                <p class="tanggal">${formatTanggal(item.tanggal)}</p>
                <p>${item.ringkasan}</p>
                <a href="berita.html?slug=${item.slug}" class="btn-more">
                    Selengkapnya
                </a>
            </div>
        </div>
        `;

    });

}

document.addEventListener("DOMContentLoaded", tampilkanBerita);