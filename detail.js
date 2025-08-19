const content = document.getElementById('detail');
let id = Number(window.location.hash.replace("#", ""))


async function getCharacterDetail(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();


    if (data.error) {
        content.innerHTML = `<p>Personagem não encontrado.</p>`;
        return;
    }


    const details = `
        <h2>${data.name}</h2>
        <img src="${data.image}" alt="${data.name}" style="max-width: 300px;"/>
        <p><strong>Espécie:</strong> ${data.species}</p>
        <p><strong>Gênero:</strong> ${data.gender}</p>
        <p><strong>Dimensão:</strong> ${data.origin.name}</p>
        <p><strong>Status:</strong> ${data.status}</p>
    `;


    content.innerHTML = details;
}


getCharacterDetail(id);
