function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correto cabeçudo!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, ratazana amassada";

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "acertou precheco!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errado seu rato";

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta perereco";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois a soma da minha pica dos catetos é igual ao seu cu!";

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta viado";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errou ludmilo";

        }
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta! tá de hack?";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, pois o céu é azul";

        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta! se é o bixão mesmo";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada precheco";

        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta! eitah como ta de boa";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, pois vc é burro";

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta! parabéns não fez mais que sua obrigação";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errou na ultima retardado";

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!");
        /* comando que alerta questoẽs em branco*/
    }


}