export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export type ContactErrors = Partial<Record<keyof ContactMessage, string>>;
export function validateContact(data: ContactMessage): ContactErrors {
  const errors: ContactErrors = {};
  if (data.name.trim().length < 2)
    errors.name = "Please enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (data.subject.trim().length < 3)
    errors.subject = "Add a subject of at least 3 characters.";
  if (data.message.trim().length < 10)
    errors.message = "Tell me a little more (at least 10 characters).";
  return errors;
}
export type ContactResult = { mode: "demo" | "sent"; draft: string };
// Integration boundary: replace the demo delay with a POST to your provider/API.
// Return mode: "sent" only after a successful server response; throw on failure.
// Keep server-side validation, rate limits and secret keys on the backend.
export async function submitContact(
  data: ContactMessage,
): Promise<ContactResult> {
  if (Object.keys(validateContact(data)).length)
    throw new Error("Invalid form data");
  await new Promise((resolve) => setTimeout(resolve, 850));
  return {
    mode: "demo",
    draft: `From: ${data.name} <${data.email}>\nSubject: ${data.subject}\n\n${data.message}`,
  };
}
