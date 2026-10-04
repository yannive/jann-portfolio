import { profileImage } from "./profileImage";
// Contact details live in contact.ts; the photo is shared by Hero and About.
export const profile = {
  photo: profileImage,
  educationYears: "Years to be added",
};
export const experience: {
  title: string;
  organization: string;
  years: string;
  description: string;
}[] = [];
export const certifications: { title: string; issuer: string; year: string }[] =
  [];
