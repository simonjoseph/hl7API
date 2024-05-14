// Simulação do Servidor de Laboratório (LIS)
const hl7 = require('simple-hl7');
const server = hl7.tcp();

server.use(function(req, res, next) {
    console.log('Mensagem HL7 recebida:');
    console.log(req.msg.log());

    // Processa a solicitação (simulação)
    // Aqui você pode adicionar lógica real para processar a mensagem

    // Envia um ACK de volta
    res.end();
});

server.start(7777);

// Simulação do Cliente de Hospital
const client = hl7.Server.createTcpClient('localhost', 7777);

// Crie uma mensagem HL7 (simulação)
const msg = new hl7.Message(
    'HOSPITAL',
    'HOSPITALADT',
    'SMS',
    '202205141200',
    'JOHNDOE',
    ['ADT', 'A04'],
    '123456',
    'D',
    '2.5'
);

console.log('Enviando mensagem HL7:');
client.send(msg, function(err, ack) {
    console.log('ACK recebido:');
    console.log(ack.log());
});
