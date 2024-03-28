import ContactFormEmail from "@/email/contact-form";
import { Resend } from "resend";
import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: any) {
  const { senderEmail, message } = JSON.parse(req.body);

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const { data } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "jonathancho.jc@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: getErrorMessage(error) });
  }
}
