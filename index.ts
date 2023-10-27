export class Vestuario {
    constructor(public modelo: string){}
}

export class TipoDeVestuario {
    private vestuario: Vestuario[];

    constructor() {
        this.vestuario = [
            new Vestuario("blusa"),
            new Vestuario("calca")
        ]
    }

    listarVestuario() {
        console.log(" Roupas");

        for (const roupa of this.vestuario) {
            console.log(`Minhas roupas são do tipo ${roupa.modelo}`)
        }
    }
}

function main (){
    const minhaBlusa = new TipoDeVestuario();
    minhaBlusa.listarVestuario();
}
main ()