// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Pesawat extends Kendaraan {
    constructor() {
        super('Pesawat');
    }

    terbang() {
        console.log(`${this.jenis} terbang di udara.`);
    }
}

class Sepeda extends Kendaraan {
    constructor() {
        super('Sepeda');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di darat.`);
    }
}

// Penggunaan
const pesawat = new Pesawat();
pesawat.terbang(); // Output: Pesawat terbang di udara.

const sepeda = new Sepeda();
sepeda.bergerak(); // Output: Sepeda bergerak di darat.
