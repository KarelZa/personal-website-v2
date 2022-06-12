import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ResponseData {
	resMessage: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
	const { name, email, subject, message } = req.body;
	// setting-up
	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: 465,
		secure: true,
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASS,
		},
	});
	// sending
	try {
		const emailRes = await transporter.sendMail({
			from: process.env.MAIL_USERNAME,
			to: process.env.MAIL_USERNAME,
			subject: `Contact form submission from ${name}`,
			html: `<h4>You have received a new contact form submission from ${name}</h4>
	  <p><strong>Name: </strong>${name}</p>
	  <p><strong>Email: </strong>${email}</p>
	  <p><strong>Subject: </strong>${subject}</p>
	  <p><strong>Message: </strong><br>${message}</p>`,
		});
		console.log('MESSAGE SENT', emailRes.messageId);
		res.status(200).json({ resMessage: 'Your ✉️ was succesfully sent' });
	} catch (error) {
		console.log(error);
		// res.status(400).json({ messageStatusRes: 'error' });
	}
};
