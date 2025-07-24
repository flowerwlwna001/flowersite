const catalog = document.getElementById("catalog");

flowers.forEach(flower => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${flower.img}" alt="${flower.name}" />
    <div class="card-content">
      <h3>${flower.name}</h3>
      <p>Объём: ${flower.size}</p>
      <p><strong>${flower.price}</strong></p>
    </div>
  `;
  card.onclick = () => {
    localStorage.setItem("flowerId", flower.id);
    window.location.href = "flower.html";
  };
  catalog.appendChild(card);
});