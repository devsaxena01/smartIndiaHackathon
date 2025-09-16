import dotenv from 'dotenv';
dotenv.config({ path: './.env' })
import connectDB from './index.js'
import { Monastry } from '../models/monastry.model.js'; 
import { ChatBot } from '../models/chatbot.model.js';

const seedMonasteries = async () => {
    try {
        const chatbot = [
            {
                name: "Rumtek Monastery",
                tibetan_name: "Dharmachakra Centre",
                sect: "Kagyu",
                district: "East Sikkim",
                founded: 1740,
                altitude: "5800 ft",
                description: "Seat of the Karmapa and one of the most significant monasteries in Sikkim.",
                history: "Built in the mid-18th century by the 12th Karmapa, later rebuilt in the 1960s.",
                festivals: "Losar, Tibetan New Year, Kagyed Dance",
                significance: "Main centre of the Kagyu lineage and houses precious relics.",
                keywords: ["Rumtek", "Kagyu", "East Sikkim", "Dharmachakra"]
            },
            {
                name: "Pemayangtse Monastery",
                tibetan_name: "Padma Yangtse",
                sect: "Nyingma",
                district: "West Sikkim",
                founded: 1705,
                altitude: "7000 ft",
                description: "One of the oldest monasteries in Sikkim, symbolizing pure monks.",
                history: "Founded by Lhatsun Chenpo for the purest lineage of Nyingma monks.",
                festivals: "Cham Dance, Losar",
                significance: "Houses rare murals and the seven-tiered wooden sculpture Sangtok Palri.",
                keywords: ["Pemayangtse", "Nyingma", "West Sikkim", "Ancient"]
            },
            {
                name: "Tashiding Monastery",
                tibetan_name: "Chorten Gonpa",
                sect: "Nyingma",
                district: "West Sikkim",
                founded: 1717,
                altitude: "4800 ft",
                description: "Considered the most sacred monastery in Sikkim.",
                history: "Built by Ngadak Sempa Chempo Phunshok Rigzin during the reign of the third Chogyal.",
                festivals: "Bumchu Festival",
                significance: "Believed that even a glimpse of the monastery cleanses sins.",
                keywords: ["Tashiding", "Nyingma", "Sacred", "West Sikkim"]
            },
            {
                name: "Enchey Monastery",
                tibetan_name: "Solitary Temple",
                sect: "Nyingma",
                district: "East Sikkim",
                founded: 1909,
                altitude: "6200 ft",
                description: "Located in Gangtok, blessed by Lama Druptob Karpo.",
                history: "Built on the site blessed by Lama Druptob Karpo, famous for his flying powers.",
                festivals: "Chaam Dance, Losar",
                significance: "Important centre of Nyingma tradition and protector deities.",
                keywords: ["Enchey", "Nyingma", "East Sikkim", "Chaam"]
            },
            {
                name: "Dubdi Monastery",
                tibetan_name: "Yuksom Monastery",
                sect: "Nyingma",
                district: "West Sikkim",
                founded: 1701,
                altitude: "7200 ft",
                description: "The oldest monastery in Sikkim, near Yuksom.",
                history: "Founded soon after the coronation of the first Chogyal in 1642.",
                festivals: "Losar",
                significance: "Represents the beginning of Buddhism in Sikkim.",
                keywords: ["Dubdi", "Nyingma", "West Sikkim", "Oldest"]
            },
            {
                name: "Ralang Monastery",
                tibetan_name: "Ralang Palchen Choling",
                sect: "Kagyu",
                district: "South Sikkim",
                founded: 1768,
                altitude: "5500 ft",
                description: "One of the most important Kagyu monasteries.",
                history: "Built to commemorate the pilgrimage of the fourth Chogyal.",
                festivals: "Pang Lhabsol, Mahakala Dance",
                significance: "Houses many sacred relics and thangkas.",
                keywords: ["Ralang", "Kagyu", "South Sikkim", "Festival"]
            },
            {
                name: "Phensang Monastery",
                tibetan_name: "Phensang Gonpa",
                sect: "Nyingma",
                district: "North Sikkim",
                founded: 1721,
                altitude: "9000 ft",
                description: "Large monastery in North Sikkim with Nyingma tradition.",
                history: "Established during the reign of Jigme Pawo.",
                festivals: "Chaam Dance before Losar",
                significance: "Known for its scenic setting and large monk community.",
                keywords: ["Phensang", "Nyingma", "North Sikkim", "Chaam"]
            },
            {
                name: "Lingdum Monastery",
                tibetan_name: "Ranka Monastery",
                sect: "Kagyu",
                district: "East Sikkim",
                founded: 1999,
                altitude: "5600 ft",
                description: "Modern Kagyu monastery with traditional architecture.",
                history: "Established as part of the Zurmang Kagyu tradition.",
                festivals: "Kagyed Dance, Losar",
                significance: "A center for meditation and Buddhist studies.",
                keywords: ["Lingdum", "Ranka", "Kagyu", "East Sikkim"]
            }
        ];

        const result = await ChatBot.insertMany(chatbot)
        console.log("Monasteries seeded successfully:", result);
    } catch (error) {
        console.error("Error while seeding monasteries:", error);
    } finally {
        process.exit();
    }
};

const run = async () => {
    await connectDB();
    await seedMonasteries();
};

run();