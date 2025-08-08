export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  sizes: string[];
  thickness: {
    core: string;
    options: string[];
  };
  underpad: {
    type: string;
    thickness: string;
  };
  wearLayer: {
    thickness: string;
    options: string[];
  };
  features: string[];
  viewUrl: string;
  related: string[];
}

export const products = [
  {
    id: "african-wenge",
    name: "AFRICAN WENGE",
    category: "Wood Collection",
    description:
      "AFRICAN WENGE brings timeless design with modern durability. Its distinctive dark tones and natural woodgrain finish offer a premium look suited for sophisticated interior styles. The rich textures and authentic patterns create an elegant atmosphere perfect for upscale residential and commercial spaces.",
    image:
      "https://360.epsiloninc.in/uploads/preview/9452_PINE_CHARCOAL.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/tilesdesign/5231_PINE_CHARCOAL_R5.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8451_PINE_CHARCOAL_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8957_PINE_CHARCOAL_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1553_PINE_CHARCOAL_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6116_PINE_CHARCOAL_R4.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://webapplication.tilesdisplay.in/share/african-wenge",
    related: ["ebony-oak", "canyon-oak", "denali-oak-gris"],
  },
  {
    id: "aurora-craft",
    name: "AURORA CRAFT",
    category: "Wood Collection",
    description:
      "AURORA CRAFT brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles. The rich textures and authentic wood patterns create a warm, inviting atmosphere perfect for both residential and commercial spaces.",
    image:
      "https://360.epsiloninc.in/uploads/preview/6508_EMORY_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/tilesdesign/4145_EMORY_OAK__R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9842_EMORY_OAK__R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4431_EMORY_OAK__R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9545_EMORY_OAK__R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4844_EMORY_OAK__R5.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://webapplication.tilesdisplay.in/share/9a110848",
    related: ["campus-grey", "canyon-oak", "creek-oak--brown"],
  },
  {
    id: "campus-grey",
    name: "CAMPUS GREY",
    category: "Wood Collection",
    description:
      "CAMPUS GREY brings timeless design with modern durability. Its sophisticated grey tones and natural woodgrain finish offer a contemporary look that complements modern interior design. Perfect for creating elegant, professional spaces.",
    image:
      "https://360.epsiloninc.in/uploads/preview/1124_BOSTON_GREY.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/tilesdesign/6351_BOSTON_GRAY_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8790_BOSTON_GRAY_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9650_BOSTON_GRAY_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1876_BOSTON_GRAY_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2770_BOSTON_GRAY_R5.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://webapplication.tilesdisplay.in/share/campus-grey",
    related: ["aurora-craft", "denali-oak-gris", "ebony-oak"],
  },
  {
    id: "canyon-oak",
    name: "CANYON OAK",
    category: "Wood Collection",
    description:
      "CANYON OAK brings timeless design with modern durability. Its warm, earthy tones and natural woodgrain finish capture the essence of rustic oak, creating spaces that feel both sophisticated and welcoming.",
    image:
      "https://360.epsiloninc.in/uploads/preview/3885_BLACKJACK_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/3885_BLACKJACK_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/3885_BLACKJACK_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/3885_BLACKJACK_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/3885_BLACKJACK_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://webapplication.tilesdisplay.in/share/canyon-oak",
    related: ["aurora-craft", "foster-honey", "heritage-oak"],
  },
  {
    id: "creek-oak--brown",
    name: "CREEK OAK BROWN",
    category: "Wood Collection",
    description:
      "CREEK OAK BROWN brings timeless design with modern durability. Its rich brown tones and natural woodgrain finish offer a classic, sophisticated look that adds warmth and character to any space.",
    image:
      "https://360.epsiloninc.in/uploads/preview/1756_CLASSIC_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/1756_CLASSIC_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1756_CLASSIC_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1756_CLASSIC_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1756_CLASSIC_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://webapplication.tilesdisplay.in/share/creek-oak-brown",
    related: ["aurora-craft", "canyon-oak", "foster-honey"],
  },
  {
    id: "denali-oak-gris",
    name: "DENALI OAK GRIS",
    category: "Stone Collection",
    description:
      "DENALI OAK GRIS brings timeless design with modern durability. Its distinctive gris tones and stone-inspired finish offer a premium look suited for contemporary interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/3872_CHICAGO_GRIS-DARK_GREY.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/3872_CHICAGO_GRIS-DARK_GREY.jpg",
      "https://360.epsiloninc.in/uploads/preview/3872_CHICAGO_GRIS-DARK_GREY.jpg",
      "https://360.epsiloninc.in/uploads/preview/3872_CHICAGO_GRIS-DARK_GREY.jpg",
      "https://360.epsiloninc.in/uploads/preview/3872_CHICAGO_GRIS-DARK_GREY.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://webapplication.tilesdisplay.in/share/denali-oak-gris",
    related: ["campus-grey", "etherial--horizon", "golden-harvest-oak"],
  },
  {
    id: "ebony-oak",
    name: "EBONY OAK",
    category: "Modern Collection",
    description:
      "EBONY OAK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/1767_SESSILE_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/1767_SESSILE_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1767_SESSILE_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1767_SESSILE_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/ebony-oak",
    related: [],
  },
  {
    id: "enigma-woodcraft",
    name: "ENIGMA WOODCRAFT",
    category: "Wood Collection",
    description:
      "ENIGMA WOODCRAFT brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/5072_DARK_PADAUK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/5072_DARK_PADAUK.jpg",
      "https://360.epsiloninc.in/uploads/preview/5072_DARK_PADAUK.jpg",
      "https://360.epsiloninc.in/uploads/preview/5072_DARK_PADAUK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/enigma-woodcraft",
    related: [],
  },
  {
    id: "etherial--horizon",
    name: "ETHERIAL HORIZON",
    category: "Stone Collection",
    description:
      "ETHERIAL HORIZON brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/1147_FANCY_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/1147_FANCY_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1147_FANCY_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1147_FANCY_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/etherial--horizon",
    related: [],
  },
  {
    id: "foster-honey",
    name: "FOSTER HONEY",
    category: "Wood Collection",
    description:
      "FOSTER HONEY brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/7878_CHARNWOOD_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/7878_CHARNWOOD_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/7878_CHARNWOOD_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/7878_CHARNWOOD_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/foster-honey",
    related: [],
  },
  {
    id: "fumed-oak",
    name: "FUMED OAK",
    category: "Modern Collection",
    description:
      "FUMED OAK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/7455_BEACHWOOD_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/7455_BEACHWOOD_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/7455_BEACHWOOD_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/7455_BEACHWOOD_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/fumed-oak",
    related: [],
  },
  {
    id: "global-oak-white",
    name: "GLOBAL OAK WHITE",
    category: "Wood Collection",
    description:
      "GLOBAL OAK WHITE brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/8272_ASPEN_WHITE.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/8272_ASPEN_WHITE.jpg",
      "https://360.epsiloninc.in/uploads/preview/8272_ASPEN_WHITE.jpg",
      "https://360.epsiloninc.in/uploads/preview/8272_ASPEN_WHITE.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/global-oak-white",
    related: [],
  },
  {
    id: "golden-harvest-oak",
    name: "GOLDEN HARVEST OAK",
    category: "Stone Collection",
    description:
      "GOLDEN HARVEST OAK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/6217_GOLD_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/6217_GOLD_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/6217_GOLD_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/6217_GOLD_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/golden-harvest-oak",
    related: [],
  },
  {
    id: "heritage-oak",
    name: "HERITAGE OAK",
    category: "Wood Collection",
    description:
      "HERITAGE OAK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/6370_EUCALYPTUS.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/6370_EUCALYPTUS.jpg",
      "https://360.epsiloninc.in/uploads/preview/6370_EUCALYPTUS.jpg",
      "https://360.epsiloninc.in/uploads/preview/6370_EUCALYPTUS.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/heritage-oak",
    related: [],
  },
  {
    id: "highland-mix",
    name: "HIGHLAND MIX",
    category: "Wood Collection",
    description:
      "HIGHLAND MIX brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/3239_ASH_MIX.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/3239_ASH_MIX.jpg",
      "https://360.epsiloninc.in/uploads/preview/3239_ASH_MIX.jpg",
      "https://360.epsiloninc.in/uploads/preview/3239_ASH_MIX.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/highland-mix",
    related: [],
  },
  {
    id: "italian-walnut-brown",
    name: "ITALIAN WALNUT BROWN",
    category: "Wood Collection",
    description:
      "ITALIAN WALNUT BROWN brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/2730_ACACIA_BROWN.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/2730_ACACIA_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/2730_ACACIA_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/2730_ACACIA_BROWN.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/italian-walnut-brown",
    related: [],
  },
  {
    id: "italian-walnut--dark",
    name: "ITALIAN WALNUT DARK",
    category: "Wood Collection",
    description:
      "ITALIAN WALNUT DARK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/1740_ACACIA_DARK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/1740_ACACIA_DARK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1740_ACACIA_DARK.jpg",
      "https://360.epsiloninc.in/uploads/preview/1740_ACACIA_DARK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/italian-walnut--dark",
    related: [],
  },
  {
    id: "kati-oak-grey",
    name: "KATI OAK GREY",
    category: "Wood Collection",
    description:
      "KATI OAK GREY brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/6988_ALPHIN_GREY.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/6988_ALPHIN_GREY.jpg",
      "https://360.epsiloninc.in/uploads/preview/6988_ALPHIN_GREY.jpg",
      "https://360.epsiloninc.in/uploads/preview/6988_ALPHIN_GREY.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/kati-oak-grey",
    related: [],
  },
  {
    id: "larch-wood",
    name: "LARCH WOOD",
    category: "Wood Collection",
    description:
      "LARCH WOOD brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/7017_PROTO_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/7017_PROTO_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/7017_PROTO_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/7017_PROTO_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/larch-wood",
    related: [],
  },
  {
    id: "lily-oak--beige",
    name: "LILY OAK BEIGE",
    category: "Wood Collection",
    description:
      "LILY OAK BEIGE brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/lily-oak--beige",
    related: [],
  },
  {
    id: "lily-oak-brown",
    name: "LILY OAK BROWN",
    category: "Wood Collection",
    description:
      "LILY OAK BROWN brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8704_MAPLE_BROWN.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/lily-oak-brown",
    related: [],
  },
  {
    id: "lime-wood",
    name: "LIME WOOD",
    category: "Wood Collection",
    description:
      "LIME WOOD brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/lime-wood",
    related: [],
  },
  {
    id: "marine-slate",
    name: "MARINE SLATE",
    category: "Wood Collection",
    description:
      "MARINE SLATE brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/2182_PARKHURST_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/marine-slate",
    related: [],
  },
  {
    id: "meranti-oak",
    name: "MERANTI OAK",
    category: "Wood Collection",
    description:
      "MERANTI OAK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/9649_SANDY_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/9649_SANDY_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/9649_SANDY_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/9649_SANDY_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/meranti-oak",
    related: [],
  },
  {
    id: "milano-walnut",
    name: "MILANO WALNUT",
    category: "Wood Collection",
    description:
      "MILANO WALNUT brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/6330_NATURAL_WALNUT.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/6330_NATURAL_WALNUT.jpg",
      "https://360.epsiloninc.in/uploads/preview/6330_NATURAL_WALNUT.jpg",
      "https://360.epsiloninc.in/uploads/preview/6330_NATURAL_WALNUT.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/milano-walnut",
    related: [],
  },
  {
    id: "moris-wood",
    name: "MORIS WOOD",
    category: "Wood Collection",
    description:
      "MORIS WOOD brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/6497_VINTAGE_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/6497_VINTAGE_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/6497_VINTAGE_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/6497_VINTAGE_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/moris-wood",
    related: [],
  },
  {
    id: "natural-hickory",
    name: "NATURAL HICKORY",
    category: "Wood Collection",
    description:
      "NATURAL HICKORY brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/4855_WARM_OAK.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/4855_WARM_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/4855_WARM_OAK.jpg",
      "https://360.epsiloninc.in/uploads/preview/4855_WARM_OAK.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/natural-hickory",
    related: [],
  },
  {
    id: "pedy-oak-beige",
    name: "PEDY OAK BEIGE",
    category: "Wood Collection",
    description:
      "PEDY OAK BEIGE brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/3070_COLUMBIA_BEIGE.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/3070_COLUMBIA_BEIGE.jpg",
      "https://360.epsiloninc.in/uploads/preview/3070_COLUMBIA_BEIGE.jpg",
      "https://360.epsiloninc.in/uploads/preview/3070_COLUMBIA_BEIGE.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/pedy-oak-beige",
    related: [],
  },
  {
    id: "teak-wood",
    name: "TEAK WOOD",
    category: "Wood Collection",
    description:
      "TEAK WOOD brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/8463_DALLA_BROWN.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/8463_DALLA_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8463_DALLA_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8463_DALLA_BROWN.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/teak-wood",
    related: [],
  },
  {
    id: "tudor-oak-natural",
    name: "TUDOR OAK NATURAL",
    category: "Wood Collection",
    description:
      "TUDOR OAK NATURAL brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/tudor-oak-natural",
    related: [],
  },
  {
    id: "valley-grove-oak",
    name: "VALLEY GROVE OAK",
    category: "Wood Collection",
    description:
      "VALLEY GROVE OAK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/8752_RUSTY_BROWN.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/8752_RUSTY_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8752_RUSTY_BROWN.jpg",
      "https://360.epsiloninc.in/uploads/preview/8752_RUSTY_BROWN.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/valley-grove-oak",
    related: [],
  },
  {
    id: "vertical-oak-blond",
    name: "VERTICAL OAK BLOND",
    category: "Wood Collection",
    description:
      "VERTICAL OAK BLOND brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/5328_OAK_ELEGANT.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/5328_OAK_ELEGANT.jpg",
      "https://360.epsiloninc.in/uploads/preview/5328_OAK_ELEGANT.jpg",
      "https://360.epsiloninc.in/uploads/preview/5328_OAK_ELEGANT.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/vertical-oak-blond",
    related: [],
  },
  {
    id: "walden-oak",
    name: "WALDEN OAK",
    category: "Wood Collection",
    description:
      "WALDEN OAK brings timeless design with modern durability. Its distinctive tones and natural woodgrain finish offer a premium look suited for a variety of interior styles.",
    image:
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
    images: [
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
      "https://360.epsiloninc.in/uploads/preview/9158_BOSTON_NATURAL.jpg",
    ],
    sizes: ['7" x 48"', '9" x 48"', '9" x 60"'],
    thickness: {
      core: "4.0 / 5.0 / 6.0 mm",
      options: ["4.0 mm", "5.0 mm", "6.0 mm"],
    },
    underpad: { type: "IXPE", thickness: "1.0 & 1.5 mm" },
    wearLayer: { thickness: "12 & 20 mil", options: ["12 mil", "20 mil"] },
    features: [
      "Water Resistant",
      "Highly Durable",
      "Scratch Resistant",
      "Easy to Install",
    ],
    viewUrl: "https://example.com/360/walden-oak",
    related: [],
  }
];

export const categories = [
  "All",
  "Wood Collection",
  "Stone Collection",
  "Modern Collection",
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];

  return product.related
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};
