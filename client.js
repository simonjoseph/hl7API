// client.js

const hl7 = require('simple-hl7');

// Crie um cliente TCP para o hospital
const hospitalClient = hl7.Server.createTcpClient('localhost', 7777);

// Crie uma mensagem HL7 (simulação)
const msg = new hl7.Message(
    'IACC',
    'SIGRO',
    'SMS',
    '202205141200',
    'JOHNDOE',
    ['ADT', 'A04'],
    '123456',
    'D',
    '2.5'
);

console.log('Enviando mensagem HL7 para o LIS...');
hospitalClient.send(msg, function(err, ack) {
    if (err) {
        console.error('Erro ao enviar mensagem:', err);
    } else {
        console.log('ACK recebido do LIS:');
        console.log(ack.log());
    }
});
