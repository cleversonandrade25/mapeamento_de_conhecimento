// spreadsheet-engine.js

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSkw03HQEPcgEVEF_gsnu30z2MpbcJH_pONLecrn09PtVapaBWTobqrUEBelVo4UnH/exec";

function prepararEEnviar(dadosUsuario, questoesRespondidas) {
    const acertos = questoesRespondidas.filter(r => r.status === "SIM").length;
    const tempoTotal = questoesRespondidas.reduce((acc, curr) => acc + parseFloat(curr.tempo), 0).toFixed(2);

    const payload = {
        nome: dadosUsuario.nome,
        re: dadosUsuario.re,
        nota: acertos,
        tempo_total: tempoTotal,
        detalhes: questoesRespondidas 
    };

    console.log("Enviando dados para a planilha...", payload);

    return fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        body: JSON.stringify(payload)
    });
}
