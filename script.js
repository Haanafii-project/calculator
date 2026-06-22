// 1. Tangkap elemen DOM yang dibutuhkan
const display = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons-container');

// 2. Variabel state untuk menyimpan input
let currentInput = "";

// 3. Pasang Event Listener pada container (Event Delegation)
buttonsContainer.addEventListener('click', (event) => {
    // Pastikan yang di-klik benar-benar tombol
    const target = event.target;
    if (!target.classList.contains('btn')) return;

    // Ambil nilai dari atribut data-val
    const value = target.getAttribute('data-val');

    // Handle logika berdasarkan tombol yang ditekan
    switch (value) {
        case 'C':
            // Reset kalkulator
            currentInput = "";
            break;
            
        case 'DEL':
            // Hapus karakter terakhir
            currentInput = currentInput.slice(0, -1);
            break;
            
        case '=':
            // Hitung hasil menggunakan fungsi eval aman atau kalkulasi manual
            try {
                if (currentInput !== "") {
                    // eval() sederhana untuk case belajar. 
                    // Kita ganti visual '×' dan '÷' jika ada (di html kita sudah pakai * dan /)
                    let result = eval(currentInput);
                    
                    // Batasi desimal jika hasilnya angka koma panjang
                    currentInput = Number.isInteger(result) ? result.toString() : result.toFixed(4).replace(/\.?0+$/, "");
                }
            } catch (error) {
                currentInput = "Error";
            }
            break;
            
        default:
            // Cegah error jika user memasukkan operator di awal atau double operator berturut-turut
            if (isOperator(value) && (currentInput === "" || isOperator(currentInput.slice(-1)))) {
                // Jangan masukkan operator jika input kosong atau karakter terakhir juga operator
                return;
            }
            // Tambahkan angka/operator ke string input
            currentInput += value;
            break;
    }

    // 4. Update tampilan Layar DOM
    updateDisplay();
});

// Fungsi pembantu untuk mengecek operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Fungsi untuk memperbarui DOM layar
function updateDisplay() {
    display.value = currentInput === "" ? "0" : currentInput;
}