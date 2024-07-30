import { Resend } from 'resend';
import {EmailTemplate} from '@/app/_components/email-templet.jsx';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['aymanmae12@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'Ayman' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
