import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./index.js";
import { Archives } from "../models/archives.model.js";

const archives = [
  {
    title: "Dharma Chakra Manuscript",
    type: "Manuscript",
    monastery: "Rumtek Monastery",
    era: "17th Century",
    description:
      "Ancient manuscript detailing the sixty-four forms of Chakrasamvara, written in gold ink on palm leaves.",
    image:
      "https://www.christies.com/img/LotImages/2022/NYR/2022_NYR_21866_0014_012(a_rare_ritual_manuscript_of_chakrasamvaras_sixty-four_forms_a_double-s-d6389798041733).jpg?mode=max",
  },
  {
    title: "Mandala of Compassion (Mural)",
    type: "Mural",
    monastery: "Pemayangtse Monastery",
    era: "18th-19th Century",
    description:
      "Intricate mural depicting Avalokiteshvara surrounded by compassionate deities, painted with natural pigments.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMkKkvQXGocz_03IwzLD-CCrWXNinMSMGSw&s",
  },
  {
    title: "Royal Edict of Chogyal",
    type: "Document",
    monastery: "Phodong Monastery",
    era: "Early 20th Century",
    description:
      "Official decree by the Chogyal establishing land grants and religious privileges for the monastery.",
    image:
      "https://images.prismic.io/fiftytwo/e5161b0d-9ac1-41e4-82f3-c0112fc8bf22_Fiftytwo-Blog-chogyal-of-sikkim-4.png?auto=compress,format&rect=0,84,200,108&w=1200&h=650",
  },
  {
    title: "Monastic Rituals (Photo Series)",
    type: "Photograph",
    monastery: "Tashiding Monastery",
    era: "Early 20th Century",
    description:
      "Rare photographs documenting traditional ceremonies and daily life of monks during the British colonial period.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ICPyj_hhWcV9d4IU1k8oMihH1K90lXoW2Q&s",
  },
  {
    title: "Precious Sutra Scrolls",
    type: "Manuscript",
    monastery: "Rumtek Monastery",
    era: "17th Century",
    description:
      "Collection of Prajnaparamita sutras written in classical Tibetan script on handmade paper.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQglfrMaAma982OYYoAdTr9iTyQcMh9u2CpQ&s",
  },
  {
    title: "Guardian Deities (Mural)",
    type: "Mural",
    monastery: "Rabdentse Ruins",
    era: "18th-19th Century",
    description:
      "Weathered but magnificent murals of protective deities guarding the ancient royal palace ruins.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6f0xcwkP80sxJGbU_1PynCBM4rGR8NYIfkA&s",
  },
  {
    title: "Land Grant Records",
    type: "Document",
    monastery: "Gangtok Central Archive",
    era: "Modern Era",
    description:
      "Administrative documents detailing monastery land ownership and taxation records from the 20th century.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQE1j_3EkQPg3Sud2qabmtQwliKNVRibUtGw&s",
  },
  {
    title: "Life in the Sangha (Photo)",
    type: "Photograph",
    monastery: "Phodong Monastery",
    era: "Modern Era",
    description:
      "Documentary photography capturing the contemporary monastic life and community practices.",
    image:
      "https://library.88guru.com/wp-content/uploads/2022/12/the-sangha-3.jpg",
  },
  {
    title: "Cham Dance Masks",
    type: "Artifact",
    monastery: "Ralang Monastery",
    era: "19th Century",
    description:
      "Handcrafted masks used in Cham dances, representing wrathful and protective deities.",
    image:
      "https://i.etsystatic.com/19140247/r/il/b94c83/3423813798/il_fullxfull.3423813798_rqt3.jpg",
  },
  {
    title: "Golden Stupa Relics",
    type: "Relic",
    monastery: "Enchey Monastery",
    era: "20th Century",
    description:
      "Sacred relics preserved inside a golden stupa, believed to hold blessings of Guru Padmasambhava.",
    image:
      "https://www.kechara.com/wp-content/uploads/elementor/thumbs/TheGoldenRelicStupa-fea-pmdfwv4yajz7t2jigxm95io5csszqt3q1fyqroeq68.jpg",
  },
  {
    title: "Festival of Bumchu (Photo)",
    type: "Photograph",
    monastery: "Tashiding Monastery",
    era: "Contemporary Era",
    description:
      "Photographic documentation of the sacred Bumchu festival, where monks unveil the holy water vase predicting the year’s fortunes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkO3EfZCrLSTOSDsuj0pC0GyueSovMM2JQ9w&s",
  },
  {
    title: "Sacred Bell of Sikkim",
    type: "Artifact",
    monastery: "Pemayangtse Monastery",
    era: "18th Century",
    description:
      "A massive bronze bell inscribed with sacred mantras, rung during annual rituals to purify the surroundings.",
    image:
      "https://as2.ftcdn.net/jpg/00/85/24/27/1000_F_85242796_vd7CDOSnKwQUr7AQIfPGqBdiRA5vrB9d.jpg",
  },
  {
    title: "Thangka of Guru Padmasambhava",
    type: "Painting",
    monastery: "Rumtek Monastery",
    era: "19th Century",
    description:
      "A vibrant thangka depicting Guru Rinpoche surrounded by eight manifestations, painted on silk.",
    image:
      "https://norbulingka.org/cdn/shop/files/THPGCB018-1.webp?v=1718817144&width=2048",
  },
  {
    title: "Monastic Drum",
    type: "Musical Instrument",
    monastery: "Ralang Monastery",
    era: "20th Century",
    description:
      "Large ceremonial drum played during tantric rituals, believed to drive away negative energies.",
    image:
      "https://thumbs.dreamstime.com/b/sikkim-india-asia-rumtek-tibetan-monastery-large-ceremonial-drum-rumtek-tibetan-monastery-204187200.jpg",
  },
  {
    title: "Enchey Mask Dance (Cham)",
    type: "Photograph",
    monastery: "Enchey Monastery",
    era: "Contemporary Era",
    description:
      "Photograph series capturing the colorful Cham mask dance, performed by monks for spiritual cleansing.",
    image:
      "https://images.indianexpress.com/2023/05/cham-2023-new.png",
  },
  {
    title: "Sacred Butter Lamps",
    type: "Artifact",
    monastery: "Tashiding Monastery",
    era: "19th Century",
    description:
      "Bronze butter lamps kept burning continuously as offerings to deities, symbolizing wisdom and compassion.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtijQro9RhKfN41Gy67W2qkGHBPLPJ33L4A&s",
  },
  {
    title: "Wooden Printing Blocks",
    type: "Tool",
    monastery: "Phodong Monastery",
    era: "18th Century",
    description:
      "Wooden blocks used for printing sacred Buddhist texts and prayers in Tibetan script.",
    image:
      "https://m.media-amazon.com/images/I/816++WcMuuL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "Sacred Relics Casket",
    type: "Relic",
    monastery: "Pemayangtse Monastery",
    era: "17th Century",
    description:
      "A silver casket containing relics of revered lamas, enshrined within the monastery’s altar.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/BimaranCasket2.JPG",
  }
];
const seedArchives = async () => {
  try {
    await Archives.deleteMany(); // optional: clear old data
    const result = await Archives.insertMany(archives);
    console.log("Archives seeded successfully:", result);
  } catch (error) {
    console.error("Error while seeding archives:", error);
  } finally {
    process.exit();
  }
};

const run = async () => {
  await connectDB();
  await seedArchives();
};

run();
