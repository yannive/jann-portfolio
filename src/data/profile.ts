import { aboutImage } from "./profileImage";
// Contact details live in contact.ts; portraits are configured in profileImage.ts.
export const profile = {
  photo: aboutImage,
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
