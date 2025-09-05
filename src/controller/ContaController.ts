import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Color";

export class ContaController implements ContaRepository {
    
    private listaContas: Array<Conta> = new Array<Conta>();
     
    numero: number = 0;

    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscaNoArray(numero);
        if (buscarConta != null){
            buscarConta.visualizar();
        } else{
            console.log(colors.fg.red, "\nConta número: " + numero + " não encontrada!", colors.reset);
        }
    }

    public buscaNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas){
            if (conta.numero === numero){
                return conta;
            }
        }
        return null;
    }
    
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nConta numero: " + conta.numero + "foi criada com sucesso!", colors.reset);
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public atualizar(conta: Conta): void {
        let buscaConta = this.buscaNoArray(conta.numero);
        if (buscaConta != null){
            
        }
    }
    public deletar(numero: number): void {
        let buscaConta = this.buscaNoArray(numero);
        if (buscaConta != null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nConta numero: " + numero + "foi deletada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA conta numero: " + numero + "não foi encontrada!", colors.reset);
        }
    }
    public sacar(numero: number, valor: number): void {
        let conta = this.buscaNoArray(numero);
        if (conta != null){
            if (conta.sacar(valor) == true){
                console.log(colors.fg.green,"\nO Saque na Conta numero: " + numero + "foi efetuado com sucesso!", colors.reset);
            } else {
                console.log(colors.fg.red, "\nA conta numero: " + numero + "não foi encontrada!", colors.reset);
            }
        }
    }
    public depositar(numero: number, valor: number): void {
        let conta = this.buscaNoArray(numero);
        if (conta != null){
            conta.depositar(valor);
            console.log(colors.fg.green,"\nO Depósito na Conta numero: " + numero + "foi efetuado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA conta numero: " + numero + "não foi encontrada!", colors.reset);
        }
    }
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscaNoArray(numeroOrigem)
        let contaDestino = this.buscaNoArray(numeroDestino)

        if(contaOrigem != null && contaDestino != null){
            contaDestino.depositar(valor);
            console.log(colors.fg.green,"\nA Transferência da Conta numero: " + numeroOrigem + " para a Conta numero: " + numeroDestino + "foi efetuada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA conta numero: " + numeroOrigem + " ou a conta numero: " + numeroDestino + "não foi encontrada!", colors.reset);
        }
    }
}