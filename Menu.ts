import readlinesync = require('readline-sync');

export function main(){

let opcao: number;

while (true) {
    
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("               Banco do Brazil com Z                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("              1- Criar Conta                         ");    
    console.log("              2- Listar Contas                       ");    
    console.log("              3- Buscar Conta por numero             ");
    console.log("              4- Atualizar dados da Conta            ");
    console.log("              5- Apagar Conta                        ");
    console.log("              6- Sacar                               ");
    console.log("              7- Depositar                           ");
    console.log("              8- Transferir Valores entre Contas     ");                     
    console.log("              9- Sair                                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    
    console.log("Entre com a opção desejada: ");
opcao = readlinesync.questionInt("");

if (opcao === 9){
    console.log("\nBanco do Brazil com Z - O seu Futuro Começa Aqui!");
    sobre ();
    process.exit(0); 
}

switch (opcao) {
    case 1:
        console.log("\n\nCriar Conta\n\n");

        break;
    case 2:
        console.log("\n\nListar Contas\n\n");

        break;  
    case 3:
        console.log("\n\nConsultar dados da conta - por número\n\n");

        break;
    case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        break;  
    case 5: 
        console.log("\n\nApagar Conta\n\n");

        break;  
    case 6:
        console.log("\n\nSacar\n\n");

        break;
        case 7:
        console.log("\n\nDepositar\n\n");

        break;
    case 8:
        console.log("\n\nTransferir entre Contas\n\n");

        break;
    default:
        console.log("\n\nOpção Inválida! Tente novamente.\n\n");

        break;
    }
  }

}



export function sobre (): void {
    console.log("\n*****************************************************");
    console.log("Projeto de estudo desenvolvido por: Paulo Henrique Belarmino Santos");
    console.log("Email - paulobelarmino047@gmail.com")
    console.log("https://github.com/Phcode007/Conta_bancaria");
    console.log("*******************************************************");
}
main();