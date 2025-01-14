async function Equal() {
    const query = document.getElementById('input').value;
    answer = await eel.calculate(query)();
    document.getElementById('input').value = String(answer);
}

async function WriteSymbol(symbol) {
    const query = document.getElementById('input').value;

    if (query == 'Error!'){ query = '' }

    document.getElementById('input').value = query + symbol;
}

async function Reset() {
    document.getElementById('input').value = '';
}

async function Slice(){
    const query = document.getElementById('input').value;
    document.getElementById('input').value = query.slice(0, -1);
}