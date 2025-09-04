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

    atualizar(conta: Conta): void {
        let buscaConta = this.buscaNoArray(conta.numero);
        if (buscaConta != null){
            
        }
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
}