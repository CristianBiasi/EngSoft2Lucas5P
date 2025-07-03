const API_URL = "http://localhost:8800/imoveis";

document.addEventListener("DOMContentLoaded", () => {
  loadImoveis();

  const form = document.getElementById("imovelForm");
  form.addEventListener("submit", handleFormSubmit);
});

async function loadImoveis() {
  const res = await fetch(API_URL);
  const imoveis = await res.json();

  const tbody = document.getElementById("imoveisTableBody");
  tbody.innerHTML = "";

  imoveis.forEach((imovel) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${imovel.id}</td>
      <td>${imovel.fone}</td>
      <td>R$ ${imovel.preco}</td>
      <td>${imovel.endereco}</td>
      <td>${imovel.corretora}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editImovel(${JSON.stringify(imovel).replace(/"/g, '&quot;')})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteImovel(${imovel.id})">Excluir</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const id = document.getElementById("imovelId").value;
  const fone = document.getElementById("fone").value;
  const preco = document.getElementById("preco").value;
  const endereco = document.getElementById("endereco").value;
  const corretora = document.getElementById("corretora").value;

  const data = { fone, preco, endereco, corretora };

  if (id) {
    // Atualizar
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } else {
    // Criar
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  resetForm();
  loadImoveis();
}

function editImovel(imovel) {
  document.getElementById("imovelId").value = imovel.id;
  document.getElementById("fone").value = imovel.fone;
  document.getElementById("preco").value = imovel.preco;
  document.getElementById("endereco").value = imovel.endereco;
  document.getElementById("corretora").value = imovel.corretora;
}

async function deleteImovel(id) {
  if (confirm("Tem certeza que deseja excluir este imóvel?")) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    loadImoveis();
  }
}

function resetForm() {
  document.getElementById("imovelForm").reset();
  document.getElementById("imovelId").value = "";
}
