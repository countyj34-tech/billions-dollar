import greeceParthenon from "@/assets/destinations/greece/parthenon.jpg";
import greeceSantorini from "@/assets/destinations/greece/santorini.jpg";

/** Landmark photos so destination cards match the place they name. */

export const photos = {
  greeceParthenon,
  greeceSantorini,
  greeceMykonos: "/destinations/wiki/mykonos-paraportiani.jpg",
  asiaGreatWall:
    "/destinations/wiki/the_great_wall_of_china_at_jinshanling-edit.jpg",
  capeTownTableMountain: "/destinations/wiki/table_mountain_danievdm.jpg",
  londonBigBen: "/destinations/wiki/london-a.jpg",
  machuPicchu:
    "/destinations/wiki/machu_picchu-_2023_-012-.jpg",
  mscMeraviglia:
    "/destinations/wiki/msc_meraviglia_grand_harbour_malta_20180307_03_-cropped-.jpg",
  newYorkEmpire:
    "/destinations/wiki/view_of_empire_state_building_from_rockefeller_center_new_yo-7d423a97.jpg",
  bangkokGrandPalace:
    "/destinations/wiki/0005574_-_wat_phra_kaew_006.jpg",
  parisEiffel: "/destinations/wiki/eiffel-tower.jpg",
  zanzibarStoneTown: "/destinations/wiki/zanzibar_sultan_palace.jpg",
  thailandIslands:
    "/destinations/wiki/sunset_in_the_sea_off_the_surin_islands-_andaman_sea.jpg",
  baliRiceTerraces:
    "/destinations/wiki/ubud_-49818456887-.jpg",
  turkeyBalloons:
    "/destinations/wiki/cappadocia_balloon_trip-_ortahisar_castle_-11893715185-.jpg",
  italyVenice:
    "/destinations/wiki/view_of_the_grand_canal_from_rialto_to_ca-foscari.jpg",
};

const popularByKeyword: [string, string][] = [
  ["cape town", photos.capeTownTableMountain],
  ["london", photos.londonBigBen],
  ["new york", photos.newYorkEmpire],
  ["bangkok", photos.bangkokGrandPalace],
  ["paris", photos.parisEiffel],
  ["zanzibar", photos.zanzibarStoneTown],
];

export function photoForPopularDestination(name: string, fallback: string): string {
  const key = name.toLowerCase();
  const hit = popularByKeyword.find(([word]) => key.includes(word));
  return hit ? hit[1] : fallback;
}

export function photoForRegion(region: string, fallback: string): string {
  if (region === "Asia") return photos.asiaGreatWall;
  if (region === "Europe") return photos.greeceParthenon;
  if (region === "South America") return photos.machuPicchu;
  if (region === "Cruises") return photos.mscMeraviglia;
  return fallback;
}

export const forcedCountryPhotos: Record<
  string,
  { hero: string; attractions?: Record<string, string> }
> = {
  thailand: {
    hero: photos.thailandIslands,
    attractions: {
      "Grand Palace, Bangkok": photos.bangkokGrandPalace,
      "Phuket & the Andaman Islands": photos.thailandIslands,
    },
  },
  bali: {
    hero: photos.baliRiceTerraces,
    attractions: { Ubud: photos.baliRiceTerraces },
  },
  turkey: {
    hero: "/destinations/wiki/hagia_sophia_-228968325-.jpeg",
    attractions: { Cappadocia: photos.turkeyBalloons },
  },
  italy: {
    hero: photos.italyVenice,
  },
  greece: {
    hero: photos.greeceSantorini,
    attractions: {
      "Acropolis of Athens": photos.greeceParthenon,
      Santorini: photos.greeceSantorini,
      Mykonos: photos.greeceMykonos,
    },
  },
};
