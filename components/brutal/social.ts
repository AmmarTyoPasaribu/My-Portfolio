import { Github, Instagram, Linkedin, Mail, type LucideIcon } from 'lucide-react';

export const socialIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram,
  Email: Mail,
};

/** Two-letter monogram for the square "logo" tile on cards. */
export function initials(name: string): string {
  const words = name
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(' ')
    .filter((w) => w.length > 1 || /\d/.test(w));
  const letters = words.slice(0, 2).map((w) => w[0]);
  return (letters.join('') || name.slice(0, 2)).toUpperCase();
}
