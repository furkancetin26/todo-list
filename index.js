const input = document.getElementById("input");
const liste = document.getElementById("liste");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    gorevEkle();
  }
});

//gorev ekle
function gorevEkle() {
  let li = document.createElement("li");
  li.innerHTML = `${input.value} <i class="fa-solid fa-trash sil fa-lg"></i>`;
  liste.appendChild(li);
  input.value = ""; // Görev eklendikten sonra input'u temizle

  // Silme işlemi
  const sil = li.querySelector(".sil");
  sil.addEventListener("click", () => {
    liste.removeChild(li);
  });
  
  // Görev tamamlandığında arka plan rengini değiştirme
  li.addEventListener('click', function() {
    this.classList.toggle('completed'); // Tamamlandığında stil değiştir
  });
  
}

//Filtrele
function filtrele(type) {
  const tasks = document.querySelectorAll("li"); // Tüm li (görev) öğelerini al
  tasks.forEach(task => {
    task.classList.remove("fade-out");

    let isVisible = true;
    if (type === "completed" && !task.classList.contains("completed")) {
      task.style.display = "none"; // Tamamlanmamış görevleri gizle
    } else if (type === "pending" && task.classList.contains("completed")) {
      task.style.display = "none"; // Tamamlanmış görevleri gizle
    } else {
      task.style.display = "flex"; // Diğer tüm durumlarda, görevleri göster
    }
  });
  
  const butonlar = document.querySelectorAll('.butonlar button')
  butonlar.forEach(btn => btn.classList.remove("active")) // Hepsinden kaldır
  event.target.classList.add("active");
  
  
}

//komple sil
const kompleSil = document.querySelector(".kompleSil")
kompleSil.addEventListener("click", () => {
  const liste = document.querySelector(".listediv ul"); // Listeyi seçiyoruz
  const allLis = liste.querySelectorAll("li");
  allLis.forEach(li => {
    li.remove();
  });
})