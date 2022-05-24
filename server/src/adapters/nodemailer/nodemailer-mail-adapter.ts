import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a54cd2de3e69c9',
    pass: '84aa58483a0900'
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <oi@techciampo.com.br>',
      to: 'Victor Hugo <victorhugodelciampo@gmail.com>',
      subject,
      html: body
    });
  }
}
