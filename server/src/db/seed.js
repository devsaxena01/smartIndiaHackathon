import dotenv from 'dotenv';
dotenv.config({ path: './.env' })
import connectDB from './index.js'
import { Monastry } from '../models/monastry.model.js'; 
const seedMonasteries = async () => {
    try {

        const monasteries = [
            {
                name: "Rumtek Monastery",
                location: "Sikkim, India",
                description: "One of the most important and largest monasteries in Sikkim.",
                establishedYear: 1960,
                visitors:"455",
                contactInfo:"9785"
            },
            {
                name: "Pemayangtse Monastery",
                location: "West Sikkim, India",
                description: "Ancient monastery known for its architecture and spiritual significance.",
                establishedYear: 1705,
                panoramicImage:"xyz",
                visitors:"244",
                contactInfo:"9458"
            },
        ];

        const result = await Monastry.insertMany(monasteries);
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
