let nomeNave = prompt("Qual o nome da nave?")
let velocityInit = 0
let velocityFinal = 0

function menu() {
    let opcoes = prompt("1: Acelerar a nave a 5km/s\n2: Desacelerar em 5km/s\n3: imprimir dados\n4: Sair")

    switch(opcoes) {
        case "1":
            opcao1()
            break
        case "2":
            opcao2()
            break
        case "3": 
            opcao3()
            break
        case "4":
            opcao4()
            break
        default:
            alert("Essa opção não existe, digite entre as opções já informadas")
            menu()
    }

}


function opcao1() {
    velocityInit += 5
    velocityFinal = velocityInit
    menu()
}

function opcao2() {
    if(velocityFinal == 0) {
        alert("A nave está na velocidade 0")
    }
    if(velocityFinal >= 5) {
        velocityInit -= 5
        velocityFinal = velocityInit
    }
    menu()
}

function opcao3() {
    alert(`Nome da nave: ${nomeNave}\nVelocidade final: ${velocityFinal}`)
    menu()
}

function opcao4() {
    alert("Saindo do programa...")
}

menu()