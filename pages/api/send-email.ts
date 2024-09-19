import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: `Huusko.dev <noreply@huusko.dev>`,
        to: ["aleksi.huusko@gmail.com"],
        subject: `Message from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully", data });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
