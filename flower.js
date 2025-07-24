const flowerId = localStorage.getItem("flowerId");
const flower = flowers.find(f => f.id == flowerId);

const container = document.getElementById("flower-details");

if (flower) {
  container.innerHTML = `
    <img src="${flower.img}" alt="${flower.name}" />
    <h2>${flower.name}</h2>
    <p><strong>Объём:</strong> ${flower.size}</p>
    <p><strong>Цена:</strong> ${flower.price}</p>
    <p><strong>Описание:</strong> ${flower.description}</p>
    <p><strong>Уход:</strong> ${flower.care}</p>
  `;
} else {
  container.innerHTML = "<p>Цветок не найден 😢</p>";
}