fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(allData => setData(allData))

function setData(allData) {
    for (const data of allData) {
        const { id, title, body } = data;
        const row = document.getElementById('parent-row');
        const col = document.createElement('div');
        col.classList.add('col-md-4');
        const innerTemplate = `
        <div class="bg-light rounded shadow-lg p-3 position-relative h-100">
                        <span class="position-absolute top-0 start-0 translate-middle p-2 bg-danger  badge rounded-pill">
                            ${id}
                        </span>
                        <h5 class="text-primary">${title}</h5>
                        <p>${body}</p>
                    </div>
        `;
        col.innerHTML = innerTemplate;
        row.append(col);


    }

}