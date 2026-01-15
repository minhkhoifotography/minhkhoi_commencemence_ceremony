// --- DỮ LIỆU GALLERY ---
const photoFolders = [
    {
        name: "Lễ Tốt Nghiệp",
        downloadUrl: "#",
        photos: [
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400", title: "Lễ tốt nghiệp.jpg" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756defe2e?w=400", title: "Kỷ niệm.jpg" }
        ]
    },
    {
        name: "Bạn Bè Thân Thiết",
        downloadUrl: "#",
        photos: [
            { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400", title: "Bạn bè thân thiết.png" },
            { url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400", title: "Nhóm bạn.jpg" }
        ]
    }
];

// --- CÁC HÀM LOGIC GỐC ---
function renderGallery(filter = "") {
    const container = document.getElementById('gallery-container');
    container.innerHTML = "";
    const filtered = photoFolders.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(folder => {
        let html = `<div class="folder-section">...</div>`; // Giữ nguyên cấu trúc HTML bên trong
        container.innerHTML += html;
    });
}

// ... Toàn bộ các hàm showTab, goHome, submitRSVP, submitGuestbook, exportToCSV, toggleFabMenu ...

// --- PHẦN TỐI ƯU HÓA KHÔNG XÂM LẤN Ở CUỐI FILE GỐC ---
(function() {
    const originalContainer = document.getElementById('gallery-container');
    if (originalContainer) {
        const fastRender = () => {
            originalContainer.style.display = 'none';
            requestAnimationFrame(() => { originalContainer.style.display = 'grid'; });
        };
        const observer = new MutationObserver(fastRender);
        observer.observe(originalContainer, { childList: true });
    }
})();

// Khởi tạo gallery khi load trang
window.onload = () => { renderGallery(); };
