import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ResponseData {
	resMessage: string;
	severity: string;
}

interface ContactData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

// Providing
const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASS,
	},
});

async function sendEmail(request: ContactData) {
	const emailOptions = {
		from: process.env.MAIL_USERNAME,
		to: process.env.MAIL_USERNAME,
		subject: `Contact form submission: ${request.subject}`,
		html: `Email generated from form submission
	  <p><strong>Name: </strong>${request.name}</p>
	  <p><strong>Email: </strong>${request.email}</p>
	  <p><strong>Subject: </strong>${request.subject}</p>
	  <p><strong>Message: </strong><br>${request.message}</p>`,
	};

	// This will send the email with the `emailOptions` above.
	return transporter.sendMail(emailOptions);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	const { name, email, subject, message } = req.body;
	if (req.method === 'POST') {
		const emailRes = await sendEmail({ name, email, subject, message });

		if (emailRes.messageId) {
			return res
				.status(200)
				.json({ severity: 'success', resMessage: 'Your ✉️ was succesfully sent' });
		}

		return res.status(400).json({
			severity: 'error',
			resMessage: 'Your ✉️ did not go through, please try again',
		});
	}

	return res.status(400).json({
		severity: 'error',
		resMessage: `Incorrect Method ${req.method}, did you mean POST?`,
	});
}
