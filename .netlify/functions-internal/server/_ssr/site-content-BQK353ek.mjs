import { S as whyChoose, _ as services, a as coreValues, b as valuedClients, c as heroSlides, d as photoForPopularDestination, f as photoForRegion, g as processSteps, h as popularDestinations, i as contact, l as images, m as plane_default, o as destinations, p as photos, t as awards, u as packages, v as testimonials, x as welcomeMessage, y as travelStyles } from "./site-data-KEWOZufF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-content-BQK353ek.js
var service_flight_default = "/assets/service-flight-B15VoTM9.jpg";
var service_hotel_default = "/assets/service-hotel-Cj0gIk_e.jpg";
var service_car_default = "/assets/service-car-DJERn6gw.jpg";
var service_driver_default = "/assets/service-driver-PHkML9AR.jpg";
var service_tour_default = "/assets/service-tour-0ZhOlpfT.jpg";
var service_visa_default = "/assets/service-visa-DXeQN76d.jpg";
var defaultRegionImages = {
	Africa: images.elephants,
	Asia: photos.asiaGreatWall,
	Europe: photos.greeceParthenon,
	"Middle East": "/destinations/wiki/dubai-desert.jpg",
	"South America": photos.machuPicchu,
	Cruises: photos.mscMeraviglia
};
var defaultNav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/destinations",
		label: "Destinations"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/itineraries",
		label: "Itineraries"
	},
	{
		to: "/testimonials",
		label: "Testimonials"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	},
	{
		to: "/book",
		label: "Book"
	}
];
var defaultFooterLinks = [
	{
		to: "/destinations",
		label: "Destinations"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/itineraries",
		label: "Itineraries"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/blog",
		label: "Travel Blog"
	}
];
var defaultQuickServices = [
	{ label: "Flight Bookings" },
	{ label: "Hotel Reservations" },
	{ label: "Corporate Travel" },
	{ label: "Airport Transfers" },
	{ label: "Tailor-made trips" }
];
var defaultTrustStrip = [
	{
		icon: "🌍",
		title: "Global Reach",
		desc: "Worldwide destinations, limitless possibilities."
	},
	{
		icon: "⭐",
		title: "Quality Service",
		desc: "Excellence in service, every step of the way."
	},
	{
		icon: "💼",
		title: "Customer Focus",
		desc: "Your satisfaction is our priority."
	},
	{
		icon: "🛡️",
		title: "Trust & Reliability",
		desc: "Travel with confidence — we've got you covered."
	}
];
var defaultHomeStats = [
	{
		value: "Since 2006",
		label: "Established"
	},
	{
		value: "IATA",
		label: "Accredited"
	},
	{
		value: "14+",
		label: "Airline Awards"
	}
];
var defaultBookServices = [
	{
		key: "flight",
		label: "Flight",
		desc: "Local & international",
		image: service_flight_default,
		tag: "Global routes"
	},
	{
		key: "hotel",
		label: "Hotel",
		desc: "Global accommodation",
		image: service_hotel_default,
		tag: "3★ to 5★ luxury"
	},
	{
		key: "car",
		label: "Car Hire",
		desc: "Sedans · SUVs · vans",
		image: service_car_default,
		tag: "Self-drive ready"
	},
	{
		key: "driver",
		label: "Driver",
		desc: "Professional chauffeur",
		image: service_driver_default,
		tag: "Vetted & trained"
	},
	{
		key: "tour",
		label: "Tour Package",
		desc: "Curated itineraries",
		image: service_tour_default,
		tag: "Handcrafted"
	},
	{
		key: "visa",
		label: "Visa Assist",
		desc: "Application support",
		image: service_visa_default,
		tag: "End-to-end"
	}
];
var defaultNewsletter = {
	kicker: "Stay Inspired · Travel Farther",
	title: "Join Our Newsletter",
	body: "Be first to receive exclusive travel deals, destination guides and insider tips from Best Eastern Travel, Tours & Car Hire.",
	placeholder: "Enter your email address",
	buttonText: "Sign Up",
	successMessage: "✓ Thank you! Check your inbox for a welcome message.",
	privacyText: "We respect your privacy. Unsubscribe at any time.",
	backgroundImage: images.beach,
	benefits: [
		{
			title: "Exclusive Deals",
			sub: "and Offers"
		},
		{
			title: "Travel Guides",
			sub: "& Destination Ideas"
		},
		{
			title: "Latest News",
			sub: "& Travel Updates"
		}
	]
};
var defaultPageSections = {
	packages: {
		kicker: "Travel Packages",
		title: "Four tiers. One promise.",
		heroImage: images.beach,
		badgeText: "Signature",
		ctaText: "Request"
	},
	"packages.request": {
		kicker: "Package Request",
		title: "Tell us about your trip",
		successTitle: "Thank you. Our travel consultant will contact you within 24 hours."
	},
	destinations: {
		kicker: "Destinations",
		title: "The whole world, expertly arranged",
		heroImage: images.vicfalls2,
		badgeLabel: "Region",
		linkText: "Explore country guide",
		body: "Tailored itineraries available"
	},
	about: {
		kicker: "Company Profile",
		title: "About Best Eastern",
		subtitle: "Zambian-owned. IATA-accredited. Trusted since 2006.",
		heroImage: images.lusaka
	},
	"about.welcome": {
		kicker: "Welcome Message",
		title: "From the Managing Director"
	},
	"about.history": {
		kicker: "Our History",
		title: "From one room in Indeco House to nearly two decades of service"
	},
	"about.coreValues": {
		kicker: "Core Values",
		title: "The principles that guide every journey"
	},
	"about.process": {
		kicker: "Our Process",
		title: "How we craft your journey"
	},
	"about.whyChoose": {
		kicker: "Why Choose Best Eastern",
		title: "Reasons clients return, again and again"
	},
	"about.accreditation": {
		kicker: "Accreditation",
		title: "IATA Accredited",
		body: "Best Eastern Travel and Tours is accredited by the International Air Transport Association (IATA). This accreditation reflects our commitment to the highest standards of professionalism, reliability and financial integrity in the global travel industry — enabling us to provide competitive fares, a wide range of travel options and efficient ticketing services worldwide.",
		badgeLabel: "IATA Accredited Agency"
	},
	"about.awards": {
		kicker: "Awards & Recognition",
		title: "Award-winning agency",
		subtitle: "Recognized by leading international and regional airlines."
	},
	"about.clients": {
		kicker: "Our Valued Clients",
		title: "A diverse client base across Zambia and beyond"
	},
	services: {
		kicker: "Our Services",
		title: "A complete travel partner",
		heroImage: images.plane,
		ctaText: "Plan a trip",
		ctaLink: "/contact"
	},
	contact: {
		kicker: "Get in touch",
		title: "Let's plan your next journey",
		heroImage: images.lusaka,
		secondaryTitle: "Talk to a consultant",
		hours: "We're available Monday – Saturday, 8am – 6pm CAT."
	},
	"contact.form": {
		kicker: "Inquiry Form",
		title: "Send us a message",
		subtitle: "We reply within 24 hours — often much sooner.",
		successTitle: "Message received",
		successBody: "A travel consultant will be in touch shortly.",
		disclaimer: "By submitting, you agree to be contacted about your inquiry."
	},
	testimonials: {
		kicker: "What clients say",
		title: "Trusted by travelers worldwide",
		heroImage: images.bali
	},
	blog: {
		kicker: "Journal",
		title: "Travel tips & visa updates",
		heroImage: images.plane,
		secondaryTitle: "Latest from Best Eastern",
		linkText: "Featured articles"
	},
	book: {
		kicker: "Book with confidence",
		title: "Your journey begins here.",
		subtitle: "One request. Flights, hotels, car hire with a driver, curated tour packages and visa assistance — arranged end-to-end by real travel consultants.",
		heroImage: plane_default,
		body: "No booking fees|24hr response|IATA & AFTA members",
		successTitle: "Booking request received",
		successBody: "A dedicated travel consultant will reach out within 24 hours with a tailored quote and next steps."
	},
	"book.step1": {
		title: "What do you need?",
		subtitle: "Pick everything that applies — we bundle it into one seamless quote."
	},
	"book.step2": {
		title: "Trip details",
		subtitle: "Tell us where and when you're travelling."
	},
	"book.step3": {
		title: "How can we reach you?",
		subtitle: "A consultant will confirm your quote within 24 hours."
	},
	"home.hero": {
		ctaText: "Explore Destinations",
		linkText: "View Itineraries"
	},
	"home.travelStyles": {
		kicker: "What we craft",
		title: "Three styles of journey, one standard of excellence",
		linkText: "Learn more →"
	},
	"home.aboutTeaser": {
		kicker: "Your Journey, Our Priority",
		title: "Travel smart. Travel in comfort. Travel with confidence.",
		body: "Best Eastern Travel, Tours & Car Hire is Lusaka's trusted luxury travel consultancy. From boardroom-bound executives to honeymooners chasing sunsets, we deliver world-class travel solutions with Zambian warmth.",
		ctaText: "Read Our Story",
		ctaLink: "/about"
	},
	"home.services": {
		kicker: "Our Services",
		title: "Everything your journey requires"
	},
	"home.popularDestinations": {
		kicker: "Popular Destinations",
		title: "From Victoria Falls to the world's iconic cities",
		badgeText: "📍 Destination",
		linkText: "View all destinations →"
	},
	"home.packages": {
		kicker: "Available Packages",
		title: "Choose your standard of arrival",
		badgeText: "Signature",
		ctaText: "Request Quote"
	},
	"home.testimonials": {
		kicker: "Client Voices",
		title: "What our travelers say",
		linkText: "See all client stories →"
	},
	"home.instagram": {
		kicker: "@besteasterntravel",
		title: "We take you places you've only dreamed of",
		body: "Follow our daily journey across the world's most beautiful destinations.",
		ctaText: "Follow on Instagram"
	}
};
function resolvePackages(overrides) {
	return overrides.packages?.length ? overrides.packages : packages;
}
function resolveServices(overrides) {
	return overrides.services?.length ? overrides.services : services.map((s) => ({
		title: s.title,
		desc: s.desc,
		items: s.items
	}));
}
function resolveTestimonials(_overrides) {
	return testimonials;
}
function resolveHeroSlides(overrides) {
	if (overrides.heroSlides?.length) return overrides.heroSlides;
	if (overrides.heroImages?.length) return heroSlides.map((slide, i) => ({
		...slide,
		image: overrides.heroImages[i % overrides.heroImages.length]
	}));
	return heroSlides;
}
function resolveTravelStyles(overrides) {
	return overrides.travelStyles?.length ? overrides.travelStyles : travelStyles;
}
function resolvePopularDestinations(overrides) {
	return (overrides.popularDestinations?.length ? overrides.popularDestinations : popularDestinations).map((d) => ({
		...d,
		image: photoForPopularDestination(d.name, d.image)
	}));
}
function resolveDestinationRegions(overrides) {
	return (overrides.destinationRegions?.length ? overrides.destinationRegions : Object.entries(destinations).map(([region, places]) => ({
		region,
		places: [...places],
		image: defaultRegionImages[region]
	}))).map((r) => ({
		...r,
		image: photoForRegion(r.region, r.image)
	}));
}
function resolvePageSection(overrides, key) {
	return {
		...defaultPageSections[key] || {},
		...overrides.pageSections?.[key]
	};
}
function resolveBrand(overrides) {
	return {
		name: overrides.brandName || "Best Eastern",
		subtitle: overrides.brandSubtitle || overrides.tagline || "Travel · Tours · Car Hire",
		logoAlt: overrides.logoAlt || "Best Eastern Travel & Tours",
		headerCta: overrides.headerCta || "Book Now"
	};
}
function withoutPackages(items) {
	return items.filter((item) => item.to !== "/packages" && !/package/i.test(item.label));
}
function resolveNavItems(overrides) {
	return withoutPackages(overrides.navItems?.length ? overrides.navItems : defaultNav);
}
function resolveSocialLinks(overrides) {
	const staleInstagram = /instagram\.com\/besteasterntravel\/?$/i;
	const staleTiktok = /tiktok\.com\/@besteasterntravel\/?$/i;
	const instagram = overrides.socialLinks?.instagram;
	const tiktok = overrides.socialLinks?.tiktok;
	return {
		facebook: overrides.socialLinks?.facebook || contact.socials.facebook,
		instagram: instagram && !staleInstagram.test(instagram) ? instagram : contact.socials.instagram,
		tiktok: tiktok && !staleTiktok.test(tiktok) ? tiktok : contact.socials.tiktok
	};
}
function resolveFooter(overrides) {
	return {
		tagline: overrides.footer?.tagline || "Your journey, our priority. Travel smart. Travel in comfort. Travel with confidence.",
		exploreHeading: overrides.footer?.exploreHeading || "Explore",
		contactHeading: overrides.footer?.contactHeading || "Contact",
		copyright: overrides.footer?.copyright || `© ${(/* @__PURE__ */ new Date()).getFullYear()} Best Eastern Travel, Tours & Car Hire. All rights reserved. · We take you there ✈`,
		credit: overrides.footer?.credit || "Developed by Mthunzi-Tech-Labs",
		exploreLinks: withoutPackages(overrides.footer?.exploreLinks?.length ? overrides.footer.exploreLinks : defaultFooterLinks)
	};
}
function resolveContactInfo(overrides) {
	return {
		phone: overrides.phone || contact.phone,
		phone2: overrides.phone2 || contact.phone2,
		email: overrides.email || contact.email,
		whatsapp: overrides.whatsapp || contact.whatsapp,
		address: overrides.address || contact.address,
		mapEmbedUrl: overrides.mapEmbedUrl || "https://www.google.com/maps?q=Rhodes+Park+Lusaka+Zambia&output=embed",
		whatsappMessage: overrides.whatsappMessage || "Hi Best Eastern Travel, I'd like to plan a trip."
	};
}
function resolveAboutMd(overrides) {
	return {
		name: overrides.aboutMdName || welcomeMessage.name,
		title: overrides.aboutMdTitle || welcomeMessage.title
	};
}
function resolveCoreValues(overrides) {
	return overrides.coreValues?.length ? overrides.coreValues : coreValues;
}
function resolveProcessSteps(overrides) {
	return overrides.processSteps?.length ? overrides.processSteps : processSteps;
}
function resolveAwards(overrides) {
	return overrides.awards?.length ? overrides.awards : awards;
}
function resolveValuedClients(overrides) {
	return overrides.valuedClients?.length ? overrides.valuedClients : valuedClients;
}
function resolveWhyChoose(overrides) {
	return overrides.whyChoose?.length ? overrides.whyChoose : whyChoose;
}
function resolveQuickServices(overrides) {
	return overrides.homeQuickServices?.length ? overrides.homeQuickServices : defaultQuickServices;
}
function resolveTrustStrip(overrides) {
	return overrides.homeTrustStrip?.length ? overrides.homeTrustStrip : defaultTrustStrip;
}
function resolveHomeStats(overrides) {
	return overrides.homeStats?.length ? overrides.homeStats : defaultHomeStats;
}
function resolveNewsletter(overrides) {
	return {
		...defaultNewsletter,
		...overrides.newsletter
	};
}
function resolveBookServices(overrides) {
	return overrides.bookServices?.length ? overrides.bookServices : defaultBookServices;
}
function resolveInstagramImages(overrides) {
	if (overrides.instagramImages?.length) return overrides.instagramImages;
	const styles = resolveTravelStyles(overrides);
	return [
		styles[1]?.image,
		styles[0]?.image,
		styles[2]?.image,
		styles[1]?.image2,
		styles[0]?.image2,
		styles[2]?.image2
	].filter(Boolean);
}
function mergeCountryInfo(base, content) {
	const name = content?.name?.trim() || base.name;
	const removed = new Set(content?.removedAttractions || []);
	const baseAttractions = base.attractions.filter((a) => !removed.has(a.name)).map((attraction) => ({
		...attraction,
		name: content?.attractions?.[attraction.name]?.name?.trim() || attraction.name,
		description: content?.attractions?.[attraction.name]?.description?.trim() || attraction.description,
		image: content?.attractions?.[attraction.name]?.image?.trim() || attraction.image
	}));
	const baseNames = new Set(base.attractions.map((a) => a.name));
	const extra = content?.extraAttractions?.filter((a) => a.name && !baseNames.has(a.name) && !removed.has(a.name)).map((a) => ({
		name: a.name,
		description: a.description,
		image: a.image?.trim() || base.heroImage
	})) || [];
	return {
		...base,
		name,
		region: content?.region?.trim() || base.region,
		overview: content?.overview?.trim() || base.overview,
		facts: {
			...base.facts,
			...content?.facts
		},
		attractions: [...baseAttractions, ...extra],
		whatToSeeLabel: content?.whatToSeeLabel?.trim() || "What to see",
		experiencesHeading: content?.experiencesHeading?.trim() || `Signature experiences in ${name}`,
		ctaTitle: content?.ctaTitle?.trim() || `Design your ${name} journey`,
		ctaBody: content?.ctaBody?.trim() || "Tailored itineraries, private guides, five-star lodges and seamless logistics — arranged end-to-end by Best Eastern Travel."
	};
}
//#endregion
export { resolveTravelStyles as C, resolveWhyChoose as E, resolveTestimonials as S, resolveValuedClients as T, resolvePopularDestinations as _, resolveBrand as a, resolveServices as b, resolveDestinationRegions as c, resolveHomeStats as d, resolveInstagramImages as f, resolvePageSection as g, resolvePackages as h, resolveBookServices as i, resolveFooter as l, resolveNewsletter as m, resolveAboutMd as n, resolveContactInfo as o, resolveNavItems as p, resolveAwards as r, resolveCoreValues as s, mergeCountryInfo as t, resolveHeroSlides as u, resolveProcessSteps as v, resolveTrustStrip as w, resolveSocialLinks as x, resolveQuickServices as y };
