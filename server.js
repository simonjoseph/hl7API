// server.js

const hl7 = require('simple-hl7');

// Crie um servidor TCP para o LIS
const lisServer = hl7.tcp();

lisServer.use(function(req, res, next) {
    // req.msg é a mensagem HL7 recebida
    const hl7Message = req.msg.log();
    console.log('Mensagem HL7 recebida no LIS:', hl7Message);

    // Processa a solicitação (simulação)
    // Aqui você pode adicionar lógica real para processar a mensagem

    // Envia um ACK de volta
    res.end();
});

lisServer.start(7777);
console.log('Servidor de laboratório (LIS) ouvindo na porta 7777...');
