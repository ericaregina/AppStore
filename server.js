const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    
    const mailOptions = {
        from: email,
        to: 'ribeiroericacomc@gmail.com',
        subject: `Nova mensagem de ${name}`,
        text: message
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao enviar o email' });
        }
        res.status(200).json({ message: 'Email enviado com sucesso' });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');  
});
