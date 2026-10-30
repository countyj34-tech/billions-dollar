import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import logo from "@/assets/logo.png";
import { useSiteOverrides } from "@/lib/site-store";
import { resolveBrand, resolveNavItems } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const logoTapCount = useRef(0);
  const lastLogoTapAt = useRef(0);
  const [overrides] = useSiteOverrides();
  const navigate = useNavigate();
  const brand = resolveBrand(overrides);
  const nav = resolveNavItems(overrides);

  function onLogoClick(e: React.MouseEvent) {
    const now = Date.now();
    if (now - lastLogoTapAt.current > 4000) logoTapCount.current = 0;
    logoTapCount.current += 1;
    lastLogoTapAt.current = now;
    const count = logoTapCount.current;
    if (count >= 5) {
      e.preventDefault();
      logoTapCount.current = 0;
      navigate({ to: "/admin" });
    }
  }

  const logoSrc = overrides.logoUrl || logo;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group shrink-0 max-w-[min(100%,420px)]"
          onClick={onLogoClick}
        >
          <img
            src={logoSrc}
            alt={brand.logoAlt}
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-auto md:max-w-[160px] object-contain shrink-0 drop-shadow-lg group-hover:scale-105 transition"
          />
          <div className="leading-tight">
            <div className="font-display text-white text-sm sm:text-base md:text-lg whitespace-nowrap">
              {brand.name}
            </div>
            <div className="text-[8px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] text-gold uppercase whitespace-nowrap">
              {brand.subtitle}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-auto shrink-0">
          {nav.map((n) => (
            <Link
              key={n.to + n.label}
              to={n.to}
              className="px-4 py-2 text-sm text-white/80 hover:text-gold transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm text-gold rounded-md" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="ml-3 inline-flex items-center rounded-full bg-gradient-emerald text-navy font-semibold text-sm px-5 py-2.5 shadow-gold hover:brightness-110 transition"
          >
            {brand.headerCta}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <Link
            to="/book"
            className="inline-flex items-center rounded-full bg-gradient-emerald text-navy font-semibold text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 shadow-gold"
          >
            {brand.headerCta}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="text-white p-2"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <div className="px-5 py-4 flex flex-col gap-1">
            <div className="flex items-center gap-3 pb-3 mb-2 border-b border-white/10">
              <img src={logoSrc} alt="" className="h-10 w-10 object-contain" />
              <div className="min-w-0">
                <div className="font-display text-white text-base">{brand.name}</div>
                <div className="text-[9px] tracking-[0.2em] text-gold uppercase">{brand.subtitle}</div>
              </div>
            </div>
            {nav.map((n) => (
              <Link
                key={n.to + n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-white/85 hover:text-gold text-sm"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center rounded-full bg-gradient-emerald text-navy font-semibold text-sm px-5 py-3"
            >
              {brand.headerCta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
