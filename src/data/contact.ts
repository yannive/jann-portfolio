// Edit your contact details here. Hero, Contact, and Footer share these values.
export const contactInfo = {
  email: "jannirich.cipano@gmail.com",
  phone: "+639429105875",
  facebook: "https://www.facebook.com/janneirich.cip",
  github: "https://github.com/yannive",
  instagram: "https://www.instagram.com/jvnnevv/",
};

export const contactLinks = [
  { name: "Facebook", href: contactInfo.facebook, external: true },
  { name: "GitHub", href: contactInfo.github, external: true },
  { name: "Instagram", href: contactInfo.instagram, external: true },
  { name: "Email", href: `mailto:${contactInfo.email}`, external: false },
  { name: "Phone", href: `tel:${contactInfo.phone}`, external: false },
] as const;
