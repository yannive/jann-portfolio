export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
// Replace this adapter with an API request when a contact endpoint is available.
// Keep server-side validation, spam protection and error handling on that endpoint.
export async function submitContact(
  data: ContactMessage,
): Promise<{ draft: string }> {
  return {
    draft: `From: ${data.name} <${data.email}>\nSubject: ${data.subject}\n\n${data.message}`,
  };
}
