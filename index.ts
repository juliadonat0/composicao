// EXEMPLO 1

export class Vestuario {
    constructor(public modelo: string) { }
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

function main() {
    const minhaBlusa = new TipoDeVestuario();
    minhaBlusa.listarVestuario();
}
main()


//EXEMPLO 2
export class Dedo {
    constructor(public unha: boolean) { }
}

export class Mao {
    private dedos: Dedo[];

    constructor() {
        this.dedos = [new Dedo(true), new Dedo(false), new Dedo(true), new Dedo(true), new Dedo(true)];
    }

    verificarUnhasPintadas() {
        for (const dedo of this.dedos) {
            if (dedo.unha) {
                console.log(`A unha está pintada`)
            } else {
                console.log(`A unha não está pintada`)
            }
        }

    }
}


function pintar() {
    const pintura = new Mao();
    pintura.verificarUnhasPintadas();
}

pintar()
