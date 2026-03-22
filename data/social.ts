export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/kinrujikorn", icon: "/images/github.png" },
  { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=100009686763652", icon: "/images/facebook.png" },
  { platform: "Instagram", url: "https://www.instagram.com/kinrujikorn/", icon: "/images/instagram.png" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/", icon: "/images/linkedin.png" },
];

export const contactInfo: ContactInfo = {
  email: "rujikornkin96@gmail.com",
  phone: "098-936-9396",
  location: "Bangkok, Thailand",
};
