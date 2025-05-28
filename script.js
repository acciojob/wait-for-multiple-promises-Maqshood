function createPromise(name) {
    const delay = Math.random() * 2000 + 1000; // 1000-3000 ms (1-3 s)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name, time: (delay / 1000).toFixed(3) }); // return seconds
        }, delay);
    });
}

const promises = [
    createPromise("Promise 1"),
    createPromise("Promise 2"),
    createPromise("Promise 3")
];

Promise.all(promises).then(results => {
    const tbody = document.getElementById("output");
    tbody.innerHTML = ""; // Clear "Loading..." row

    results.forEach(p => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${p.name}</td><td>${p.time}</td>`;
        tbody.appendChild(row);
    });

    // Calculate total (maximum time)
    const maxTime = Math.max(...results.map(p => parseFloat(p.time))).toFixed(3);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td><td>${maxTime}</td>`;
    tbody.appendChild(totalRow);
});