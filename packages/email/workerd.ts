import { Resend } from "resend";

const initResend = async (resendApiKey: string) => {
	const resend = new Resend(resendApiKey);
	return resend;
};

export { initResend };
