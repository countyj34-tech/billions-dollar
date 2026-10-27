import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useSiteOverrides } from "@/lib/site-store";
import { resolveBrand, resolveContactInfo, resolveFooter, resolveSocialLinks } from "@/lib/site-content";

export function SiteFooter() {
  const [overrides] = useSiteOverrides();
  const logoSrc = overrides.logoUrl || logo;
  const brand = resolveBrand(overrides);
  const footer = resolveFooter(overrides);
  const social = resolveSocialLinks(overrides);
  const contact = resolveContactInfo(overrides);

  return (
    <footer className="bg-navy-deep text-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoSrc} alt={brand.logoAlt} className="h-12 w-12 rounded-full ring-2 ring-gold/60" />
            <div>
              <div className="font-display text-white text-lg">{brand.name}</div>
              <div className="text-[10px] tracking-[0.25em] text-gold uppercase">{brand.subtitle}</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60">{footer.tagline}</p>
          <div className="flex gap-3 mt-5">
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition" aria-label="Facebook"><Facebook size={16}/></a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition" aria-label="Instagram"><Instagram size={16}/></a>
            <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 7.2a6.6 6.6 0 0 1-3.9-1.3v8.5a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.9a2.7 2.7 0 1 0 1.9 2.6V2h2.8a4 4 0 0 0 3.9 3.5v1.7Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">{footer.exploreHeading}</h4>
          <ul className="space-y-2 text-sm">
            {(footer.exploreLinks || []).map((link) => (
              <li key={link.to + link.label}><Link to={link.to} className="hover:text-gold">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-4">{footer.contactHeading}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} className="text-gold mt-0.5"/> <a href={`tel:${contact.phone}`} className="hover:text-gold">{contact.phone}</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-gold mt-0.5"/> <a href={`mailto:${contact.email}`} className="hover:text-gold break-all">{contact.email}</a></li>
            <li className="flex gap-2"><MapPin size={16} className="text-gold mt-0.5"/> <span>{contact.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        <div>{footer.copyright}</div>
        <div className="mt-2 text-[10px] tracking-widest text-white/30 uppercase">{footer.credit}</div>
      </div>
    </footer>
  );
}
