import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Transport SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail, Outlook, Yahoo...
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1) Email pour TOI (Maître Moussa reçoit le message)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `📩 Nouveau message : ${subject}`,
      html: `
        <h3>Vous avez reçu un nouveau message depuis le site</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    // 2) Email automatique pour l’UTILISATEUR
    await transporter.sendMail({
      from: `"Maître Ali Moussa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Votre message a bien été reçu",
      html: `
        <h3>Bonjour ${name},</h3>
        <p>Merci pour votre message concernant <strong>"${subject}"</strong>.</p>
        <p>Je l’ai bien reçu et je vous répondrai dans les plus brefs délais.</p>
        <br/>
        <p>🙏 Avec respect,</p>
        <p><strong>Maître Ali Moussa</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d’envoi d’email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
