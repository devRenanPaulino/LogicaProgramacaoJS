alert("Idade em Dias")
let anos = parseInt(prompt("Digite sua idade em anos: "));
let meses = parseInt(prompt("Digite quantos meses se passaram desde seu último anivesário: "));
let dias = parseInt(prompt("Digite quantos dias falta para completar o seu mêsvesário: "));
let resultado = (anos * 365) + (meses * 30) + (30 - dias)
alert("A sua idade convertida para dias é: " + resultado)