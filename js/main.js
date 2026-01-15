let rsvpData = [];
let guestbookData = [];
let rsvpNotifCount = 0;
let gbNotifCount = 0;

function showTab(tabId, element) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');
    if(tabId === 'tab-gallery') renderGallery();
}

function submitRSVP(e) {
    e.preventDefault();
    rsvpData.push({ Name: document.getElementById('rsvp-name').value, Phone: document.getElementById('rsvp-phone').value });
    rsvpNotifCount++;
    updateBadges();
    document.getElementById('rsvp-form').style.display = 'none';
    document.getElementById('rsvp-thank-you').style.display = 'block';
}

function submitGuestbook(e) {
    e.preventDefault();
    guestbookData.push({ Name: document.getElementById('gb-name').value, Msg: document.getElementById('gb-msg').value });
    gbNotifCount++;
    updateBadges();
    document.getElementById('gb-form').style.display = 'none';
    document.getElementById('guestbook-thank-you').style.display = 'block';
}

function updateBadges() {
    document.getElementById('notif-badge-main').innerText = rsvpNotifCount + gbNotifCount;
    document.getElementById('badge-gb').innerText = gbNotifCount;
    document.getElementById('badge-rsvp').innerText = rsvpNotifCount;
}

function toggleFabMenu() {
    const menu = document.getElementById('adminMenu');
    const pass = prompt("Nhập mật khẩu quản trị:");
    if (pass === "Lmk16112008") menu.classList.toggle('active');
    else alert("Sai mật khẩu!");
}

function goHome() {
    location.reload();
}
