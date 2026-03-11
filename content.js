const matrix = [
    ["J", "T", "Z", "S", "F", "Q", "G", "L", "T", "L"],
    ["B", "F", "N", "X", "M", "K", "S", "L", "T", "V"],
    ["A", "S", "E", "R", "R", "Z", "G", "Q", "C", "T"],
    ["J", "C", "C", "R", "W", "T", "D", "G", "E", "L"],
    ["U", "G", "R", "X", "O", "P", "F", "R", "N", "Z"],
    ["W", "M", "O", "U", "H", "M", "H", "G", "W", "W"],
    ["T", "U", "I", "H", "N", "P", "Z", "N", "I", "D"]
]

const thAll = document.querySelectorAll("th");

for (let th of thAll) {
    const pos = th.textContent?.trim();
    if (!pos) continue;

    if (pos.includes("[")) {
        //const match = pos.match(/\[([A-Z]),(\d+)\]/);
        const row = Number(pos[3]) - 1;
        const column = pos[1].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);

        const tr = th.closest("tr");
        const input = tr.querySelector("input");
        input.value = matrix[row][column];
    }
}
