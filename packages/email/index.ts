import { config } from "dotenv";
import { Resend } from "resend";

config();

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
	throw new Error("RESEND_API_KEY is not set");
}

const resend = new Resend(RESEND_API_KEY);

export { resend };
