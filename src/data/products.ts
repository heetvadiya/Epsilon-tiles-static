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
      "https://360.epsiloninc.in/uploads/tilesdesign/8451_PINE_CHARCOAL_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8957_PINE_CHARCOAL_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1553_PINE_CHARCOAL_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6116_PINE_CHARCOAL_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5231_PINE_CHARCOAL_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/40e20c26",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/8dfe21b2",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/9c6f6d9e",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2152_BLACKJACK_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5818_BLACKJACK_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9906_BLACKJACK_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1787_BLACKJACK_OAK_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6255_BLACKJACK_OAK_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/c24185e9",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2221_CLASSIC_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7718_CLASSIC_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2937_CLASSIC_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7772_CLASSIC_OAK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/e3463a7b",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/7013_CHICAGO_GRIS_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2189_CHICAGO_GRIS_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3842_CHICAGO_GRIS_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6524_CHICAGO_GRIS_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/6047c881",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/1593_SESSILE_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2962_SESSILE_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8672_SESSILE_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3110_SESSILE_OAK_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9196_SESSILE_OAK_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/7adbbb6a",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/5285_DARK_PADAUK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7993_DARK_PADAUK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9460_DARK_PADAUK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7364_DARK_PADAUK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/87101b2f",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2350_FANCY_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4442_FANCY_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6629_FANCY_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7818_FANCY_OAK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/ca2aefc6",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/8907_CHARNWOOD_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8188_CHARNWOOD_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7721_CHARNWOOD_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9896_CHARNWOOD_OAK_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1688_CHARNWOOD_OAK_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/778e713d",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/1846_CHARNWOOD_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5840_CHARNWOOD_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4970_CHARNWOOD_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9686_CHARNWOOD_OAK_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9008_CHARNWOOD_OAK_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/db51d2c4",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/1127_ASPEN_WHITE_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7017_ASPEN_WHITE_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2346_ASPEN_WHITE_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4069_ASPEN_WHITE_R4.jpg",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/6280_GOLD_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2035_GOLD_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9242_GOLD_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2311_GOLD_OAK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/76dfe28f",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/7145_EUCALYPTUS_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9182_EUCALYPTUS_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8633_EUCALYPTUS_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1725_EUCALYPTUS_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/08cf4557",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/7253_ASH_MIX_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5127_ASH_MIX_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5111_ASH_MIX_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3371_ASH_MIX_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/0477beb5",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/1696_ACACIA_BROWN_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8846_ACACIA_BROWN_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6035_ACACIA_BROWN_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9385_ACACIA_BROWN_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/78900713",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2629_ACACIA_DARK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9438_ACACIA_DARK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1530_ACACIA_DARK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1326_ACACIA_DARK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/62a781c7",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/9459_ALPHIN_GREY_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4044_ALPHIN_GREY_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8600_ALPHIN_GREY_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9326_ALPHIN_GREY_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/95e6f7b7",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/6608_PROTO_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2970_PROTO_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5421_PROTO_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9353_PROTO_OAK_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7038_PROTO_OAK_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/9f103b37",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/3468_MAPLE_BEIGE_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6376_MAPLE_BEIGE_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7739_MAPLE_BEIGE_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6641_MAPLE_BEIGE_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/f914c34d",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2108_MAPLE_BROWN_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9254_MAPLE_BROWN_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8010_MAPLE_BROWN_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9518_MAPLE_BROWN_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/4e5bde2e",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/7793_PARKHURST_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3863_PARKHURST_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4419_PARKHURST_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2471_PARKHURST_OAK_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4919_PARKHURST_OAK_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/ee9206a3",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/7793_GREY_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6475_GREY_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9355_GREY_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5731_GREY_OAK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/507ff23a",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/6720_SANDY_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8213_SANDY_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1242_SANDY_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8399_SANDY_OAK_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8242_SANDY_OAK_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/45a680f0",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/7952_NATURAL_WALNUT_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2156_NATURAL_WALNUT_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8460_NATURAL_WALNUT_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1269_NATURAL_WALNUT_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/42a7a3f6",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/8472_VINTAGE_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6735_VINTAGE_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7704_VINTAGE_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7326_VINTAGE_OAK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/048283ba",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2354_WARM_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3106_WARM_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5581_WARM_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8125_WARM_OAK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/dec54a2b",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/1840_COLUMBIA_BEIGE_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7875_COLUMBIA_BEIGE_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1590_COLUMBIA_BEIGE_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8660_COLUMBIA_BEIGE_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/774c404c",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2286_DALLAS_BROWN_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6753_DALLAS_BROWN_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2215_DALLAS_BROWN_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3575_DALLAS_BROWN_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/7af14566",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/2852_BOSTON_NATURAL_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/6519_BOSTON_NATURAL_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3359_BOSTON_NATURAL_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/9328_BOSTON_NATURAL_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/1332_BOSTON_NATURAL_R5.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8832_BOSTON_NATURAL_R6.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/eb7a0ad0",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/6232_RUSTY-BROWN_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8251_RUSTY-BROWN_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2530_RUSTY-BROWN_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/4115_RUSTY-BROWN_R4.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/5658_RUSTY-BROWN_R5.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/7760a986",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/1918_OAK_ELEGANT_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7603_OAK_ELEGANT_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/2607_OAK_ELEGANT_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/7656_OAK_ELEGANT_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/a8b3788e",
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
      "https://360.epsiloninc.in/uploads/tilesdesign/7911_NATURAL_OAK_R1.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/8954_NATURAL_OAK_R2.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3694_NATURAL_OAK_R3.jpg",
      "https://360.epsiloninc.in/uploads/tilesdesign/3021_NATURAL_OAK_R4.jpg",
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
    viewUrl: "https://webapplication.tilesdisplay.in/share/9965736b",
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
