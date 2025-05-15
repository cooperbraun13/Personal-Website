import type { Actions, PageServerLoad } from "./$types";

import { zod } from "sveltekit-superforms/adapters";
import { message, superValidate } from "sveltekit-superforms/server";

import { resend } from "@repo/email";
import Email from "@repo/email/templates/basic.html?raw";
import { renderTemplate } from "@repo/email/utils";

import { contactSchema } from "$lib/schemas/contact";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
    const form = await superValidate(zod(contactSchema));
    return { form };
};

export const actions: Actions = {
    contact: async ({ request }) => {
        const form = await superValidate(request, zod(contactSchema));

        if (!form.valid) {
            return message(form, {
                status: 403,
            });
        }

        await resend.emails.send({
            from: "mail@braun.com",
            to: form.data.email,
            subject: "This is an important test email",
            html: renderTemplate(Email, {
                name: form.data.fullName,
            }),
        });

        await resend.emails.send({
            from: "mail@braun.com",
            to: "mail@braun.com",
            subject: "This is an important test email",
            html:
                `<p>Full name: ${form.data.fullName}</p><p>Email: ${form.data.email}</p><p>Information: ${form.data.information}</p><p>Date: ${new Date(Date.now()).toUTCString()}</p>`,
        });

        return redirect(303, "/");
    },
} satisfies Actions;
