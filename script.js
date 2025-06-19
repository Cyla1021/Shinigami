// Simulasi nama pengguna yang sedang login
let user = localStorage.getItem("user") || "Pengguna";

// Tampilkan nama user
document.getElementById("username").textContent = user;

// Ambil status dari localStorage atau buat array kosong
let statusList = JSON.parse(localStorage.getItem("statusList")) || [];

// Tampilkan status ke halaman
function showStatus() {
  let container = document.getElementById("statusList");
  container.innerHTML = "";

  statusList.reverse().forEach((status) => {
    let div = document.createElement("div");
    div.className = "status";
    div.textContent = `${status.user}: ${status.text}`;
    container.appendChild(div);
  });
}

// Fungsi untuk posting status baru
function postStatus() {
  let input = document.getElementById("statusInput");
  let text = input.value.trim();
  if (text !== "") {
    statusList.push({ user: user, text: text });
    localStorage.setItem("statusList", JSON.stringify(statusList));
    input.value = "";
    showStatus();
  }
}

// Fungsi logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html"; // balik ke halaman login
}

// Tampilkan status saat halaman dimuat
showStatus();