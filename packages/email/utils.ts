export function renderTemplate(template: string, data: Record<string, string>) {
    return template.replace(/\{\{([^}]+)\}\}/g, (match, p1) => data[p1] || match);
}