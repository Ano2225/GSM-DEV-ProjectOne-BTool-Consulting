import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(name: string, email: string,tel:number, message: string) {
  const year = new Date().getFullYear();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Nouveau message de ${name}`,
    text: message,
    html: `     
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Nouveau Message</title>
    </head>
    <body>
       <div class="header">
              <img src="https://imgdb.net/storage/uploads/181e28d3d464accf03f949f16f3c9df84bf6aa38ae4fe641c52e098b9da2e659.png" alt="Logo de l'entreprise">
          </div>
        <h1>Nouveau message de: ${name}</h1>
        <h2>Email: ${email}</h2>
        <p>Numero de telephone : ${tel}</p>
        <p>${message}</p>
        <footer>
            &copy; ${year} B.tool Consulting. Tous droits réservés.
        </footer>
    </body>
    </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, tel, message } = body;

  if (!name || !email || !message|| !tel) {
    return NextResponse.json({ error: 'Les champs ne peuvent etre vides.' }, { status: 400 });
  }

  try {
    await sendEmail(name, email,tel, message);
    return NextResponse.json({ status: 'Success', message: 'Email sent' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ status: 'Error', message: error.toString() }, { status: 500 });
  }
}
