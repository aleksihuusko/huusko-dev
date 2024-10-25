import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { error } = await resend.emails.send({
      from: "Huusko.dev <aleksi@huusko.dev>",
      to: ["aleksi.huusko@gmail.com"],
      replyTo: email,
      subject: `Message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error in POST request:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
