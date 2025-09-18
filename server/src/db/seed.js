import dotenv from 'dotenv';
dotenv.config({ path: './.env' })
import connectDB from './index.js'
import { Monastry } from '../models/monastry.model.js'; 
const seedMonasteries = async () => {
    try {

        const monasteries = [
           {
    "name": "OLD RUMTEK MONASTERY",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757788123859!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VnclQ2VXc.!2m2!1d27.28856332077909!2d88.56169007799076!3f160.22137!4f0!5f0.7820865974627469",
    "description": "A historic Buddhist monastery in Sikkim, belonging to the Kagyu sect, known for its relics and panoramic views.",
    "location": "Rumtek, East Sikkim, India",
    "visitors": "Open to tourists and pilgrims year-round.",
    "establishedYear": 1730,
    "contactInfo": "Not available"
  },
  {
    "name": "KATHOG DORJEDEN MONASTERY",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757788657826!6m8!1m7!1soai7Ta_mV-kIkOmeBVeusw!2m2!1d27.24064035522526!2d88.58755568983742!3f71.61437!4f0!5f0.7820865974627469",
    "description": "Built in 1840, this Kagyu monastery is known for its vibrant murals, intricate woodwork, and religious teachings.",
    "location": "Pakshikha, East Sikkim, India",
    "visitors": "Open for monks, devotees, and tourists.",
    "establishedYear": 1840,
    "contactInfo": "Not available"
  },
  {
    "name": "ENCHEY MONASTERY",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757788702204!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0pzTXEzOWdF!2m2!1d27.33593677395685!2d88.61916587167339!3f44.015686!4f0!5f0.7820865974627469",
    "description": "Founded in 1909, Enchey Monastery follows the Nyingma order and is famous for its Cham dances and Pang Lhabsol festival.",
    "location": "Gangtok, East Sikkim, India",
    "visitors": "Accessible to tourists and devotees.",
    "establishedYear": 1909,
    "contactInfo": "Not available"
  },
  {
    "name": "Machong Gumpa",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757789270817!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRC01WTJneWdF!2m2!1d27.22769614198259!2d88.6676427935114!3f285.60263!4f0!5f0.7820865974627469",
    "description": "A serene Buddhist monastery in East Sikkim known for meditation and traditional rituals.",
    "location": "East Sikkim, India",
    "visitors": "Open to monks and local devotees.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Phodong Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757789577988!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGg0OURqV3c.!2m2!1d27.41303405816734!2d88.58375766744783!3f161.06181!4f0!5f0.7820865974627469",
    "description": "One of the six major monasteries of Sikkim, Phodong was built in the 18th century and is known for Cham dances and murals.",
    "location": "Phodong, North Sikkim, India",
    "visitors": "Visited by pilgrims and tourists year-round.",
    "establishedYear": 1740,
    "contactInfo": "Not available"
  },
  {
    "name": "Linkdum Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757789938880!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ011T2JkcmdF!2m2!1d27.33118603686677!2d88.5790941249777!3f281.10345!4f0!5f0.7820865974627469",
    "description": "A lesser-known monastery in Sikkim, offering peace and cultural significance for the local community.",
    "location": "Sikkim, India",
    "visitors": "Open to locals and monks.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Kartok Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757789999598!6m8!1m7!1soai7Ta_mV-kIkOmeBVeusw!2m2!1d27.24064035522526!2d88.58755568983742!3f70.86992026959928!4f6.371139200361043!5f0.7820865974627469",
    "description": "Kartok Monastery is noted for its colorful prayer flags and serene surroundings, drawing both pilgrims and visitors.",
    "location": "Yuksom, West Sikkim, India",
    "visitors": "Tourists and devotees year-round.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Labrang Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757790056148!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2szZEwzbUFF!2m2!1d27.41800011005887!2d88.57945887534423!3f114.68343!4f0!5f0.7820865974627469",
    "description": "Labrang Monastery is among the important Kagyu monasteries in North Sikkim, known for murals and sacred traditions.",
    "location": "North Sikkim, India",
    "visitors": "Accessible to pilgrims and tourists.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Pemayangtse Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757790244724!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f29.149603!4f0!5f0.7820865974627469",
    "description": "Pemayangtse is one of the oldest and premier monasteries in Sikkim, established in the 17th century. It belongs to the Nyingma sect and is known for its sacred relics and annual Cham dances.",
    "location": "Pelling, West Sikkim, India",
    "visitors": "Open to pilgrims and tourists, especially during Losar festival.",
    "establishedYear": 1705,
    "contactInfo": "Not available"
  },
  {
    "name": "Dubdi Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757790314444!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFVpdHkxNndF!2m2!1d27.36655288826205!2d88.22999220879571!3f326.35718!4f0!5f0.7820865974627469",
    "description": "Dubdi Monastery, also known as the 'Hermit's Cell,' was built in 1701 after the coronation of the first Chogyal of Sikkim. It is regarded as the oldest monastery in Sikkim.",
    "location": "Yuksom, West Sikkim, India",
    "visitors": "Accessible to devotees and trekkers.",
    "establishedYear": 1701,
    "contactInfo": "Not available"
  },
  {
    "name": "Sanga Choeling Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757790404246!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVnS3p0dlFF!2m2!1d27.29775170700695!2d88.22168671699492!3f245.1103!4f0!5f0.7820865974627469",
    "description": "Founded in the 17th century by Lama Lhatsun Chempo, this monastery is one of the oldest in Sikkim. It is renowned for its ancient statues and scenic hilltop setting.",
    "location": "Near Pelling, West Sikkim, India",
    "visitors": "Popular among pilgrims and trekkers.",
    "establishedYear": 1697,
    "contactInfo": "Not available"
  },
  {
    "name": "Tashiding Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757790445096!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f337.7484!4f0!5f0.7820865974627469",
    "description": "Tashiding Monastery, founded in 1641, is one of the most sacred monasteries in Sikkim. It is associated with Guru Padmasambhava and is famous for the annual Bumchu festival.",
    "location": "West Sikkim, India",
    "visitors": "Major pilgrimage center, especially during Bumchu festival.",
    "establishedYear": 1641,
    "contactInfo": "Not available"
  },
  {
    "name": "Rinchen Choling Tamu Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757790818514!6m8!1m7!1szygGDdJNnf-dHcv5-ZDzXg!2m2!1d27.2431810951169!2d88.27109407783493!3f293.52338!4f0!5f0.7820865974627469",
    "description": "Rinchen Choling Tamu Monastery is a local monastery in Sikkim known for serving the Tamang Buddhist community and preserving rituals and traditions.",
    "location": "Sikkim, India",
    "visitors": "Open to devotees and visitors.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Ralang New Monastery",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757791025677!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDh5NUc4RGc.!2m2!1d27.3284964274141!2d88.33524768412993!3f152.78369!4f0!5f0.7820865974627469",
    "description": "Ralang Monastery is one of the most famous monasteries of Sikkim, established by the 9th Karmapa. Known for its annual Pang Lhabsol and Cham dances.",
    "location": "South Sikkim, India",
    "visitors": "Major tourist and pilgrimage destination.",
    "establishedYear": 1768,
    "contactInfo": "Not available"
  },
  {
    "name": "Likir Gompa",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757862576383!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2NpT3YwY0E.!2m2!1d34.29319671424501!2d77.21510996942627!3f78.10030872937611!4f-4.930867186634316!5f0.7820865974627469",
    "description": "Although geographically in Ladakh, Likir Gompa is sometimes listed due to Buddhist connections. It is known for its giant statue of Maitreya Buddha.",
    "location": "Ladakh, India",
    "visitors": "Popular tourist and pilgrimage spot.",
    "establishedYear": 1065,
    "contactInfo": "Not available"
  },
  {
    "name": "Mamring Gumpa",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757863251737!6m8!1m7!1s2mAkp7h6ywTqaA8A40MMKg!2m2!1d27.2254908168888!2d88.63102974032593!3f321.63794!4f0!5f0.7820865974627469",
    "description": "A small monastery in Sikkim, significant to the local Buddhist community for spiritual practices and festivals.",
    "location": "Mamring, East Sikkim, India",
    "visitors": "Open to local devotees.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Bakcham Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "Bakcham Monastery has limited public records but is known to serve as a place of prayer and meditation for locals.",
    "location": "Sikkim, India",
    "visitors": "Open to local devotees.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Pema Woeling Nunnery with Yeshe Dorje Stupa",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757863735934!6m8!1m7!1sz_kGoN1xKTfchkIWC6XBqQ!2m2!1d27.34219152623186!2d88.58439990636735!3f234.40912!4f0!5f0.7820865974627469",
    "description": "A Buddhist nunnery in Sikkim notable for its spiritual ambiance and the presence of the Yeshe Dorje Stupa.",
    "location": "East Sikkim, India",
    "visitors": "Accessible to devotees and pilgrims.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Urgen Pema Choling Gumpa",
    "image": [],
    "panoramicImage": "https://www.google.com/maps/embed?pb=!4v1757868619450!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGs3dW1wMkFF!2m2!1d27.33880807145229!2d88.60838991436862!3f10.066199829377723!4f-6.530987795502199!5f0.5672819593898257",
    "description": "A small monastery in Sikkim, known for its peaceful ambiance and prayer rituals followed by the local Buddhist community.",
    "location": "East Sikkim, India",
    "visitors": "Open to devotees and occasional visitors.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Dechen Choeling Monastries",
    "image": [],
    "panoramicImage": "",
    "description": "A Buddhist monastery cluster in Sikkim, preserving ancient rituals and teachings of the Tibetan tradition.",
    "location": "Sikkim, India",
    "visitors": "Welcomes devotees and tourists.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Dolepchen Boudha Sanskrit Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "A monastery blending Buddhist and Sanskrit learning traditions, serving as a center for Buddhist studies.",
    "location": "Sikkim, India",
    "visitors": "Open to monks and local scholars.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Duchi Gyalton Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "A lesser-known monastery of Sikkim, preserving Buddhist rituals and sacred art.",
    "location": "Sikkim, India",
    "visitors": "Accessible to devotees.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Tashi Choling Monastries",
    "image": [],
    "panoramicImage": "",
    "description": "A monastery complex known for its Tibetan-style architecture and spiritual teachings.",
    "location": "Sikkim, India",
    "visitors": "Welcomes pilgrims and visitors.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Pema Choling Monastries",
    "image": [],
    "panoramicImage": "",
    "description": "Pema Choling Monastery is an important Buddhist learning center in Sikkim, focusing on scripture and meditation.",
    "location": "Sikkim, India",
    "visitors": "Open to devotees, monks, and researchers.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Chorten Deshig Tsekpa",
    "image": [],
    "panoramicImage": "",
    "description": "A sacred stupa-monastery site in Sikkim, regarded as a place for prayer and meditation.",
    "location": "Sikkim, India",
    "visitors": "Accessible to devotees and tourists.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Ranka Monastries",
    "image": [],
    "panoramicImage": "",
    "description": "Also known as Lingdum Monastery, Ranka Monastery is a large Buddhist monastery famous for its architecture and scenic views.",
    "location": "Near Gangtok, East Sikkim, India",
    "visitors": "Popular among tourists and pilgrims.",
    "establishedYear": 1998,
    "contactInfo": "Not available"
  },
  {
    "name": "Ngadak Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "Originally built in the 17th century during the reign of Chogyal Gyurmed Namgyal, this monastery is one of the oldest in Sikkim.",
    "location": "Namchi, South Sikkim, India",
    "visitors": "Visited by tourists and locals, especially during festivals.",
    "establishedYear": 17,
    "contactInfo": "Not available"
  },
  {
    "name": "Doling Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "A monastery in South Sikkim, associated with Guru Padmasambhava. It is known for sacred relics and holy footprint marks.",
    "location": "South Sikkim, India",
    "visitors": "Pilgrimage destination and cultural site.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Ralang New Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "Ralang Monastery, rebuilt as the New Ralang, is one of the most famous monasteries of Sikkim. It belongs to the Kagyu sect and is known for the annual Pang Lhabsol and Cham dance festivals.",
    "location": "South Sikkim, India",
    "visitors": "Major tourist and pilgrimage destination.",
    "establishedYear": 1768,
    "contactInfo": "Not available"
  },
  {
    "name": "Gonjang Monastreis",
    "image": [],
    "panoramicImage": "",
    "description": "Gonjang Monastery was established in 1981 by H.E. Tingkye Gonjang Rimpoche. It preserves Nyingma and Kagyu traditions and also runs monastic education programs.",
    "location": "Near Tashi View Point, Gangtok, Sikkim, India",
    "visitors": "Welcomes monks, devotees, and visitors.",
    "establishedYear": 1981,
    "contactInfo": "Not available"
  },
  {
    "name": "Bon Monastries",
    "image": [],
    "panoramicImage": "",
    "description": "A Bon monastery in Sikkim that preserves the ancient Bon religion, which predates Buddhism. It is an important cultural heritage site.",
    "location": "Sikkim, India",
    "visitors": "Open to devotees and cultural researchers.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Bermiok Tokal Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "Bermiok Tokal Monastery is a small monastery located in West Sikkim, offering peaceful surroundings and traditional rituals.",
    "location": "West Sikkim, India",
    "visitors": "Visited by local devotees and occasional tourists.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Kewzing Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "Kewzing Monastery, also known as the Kewzing Bön Monastery, is one of the few Bon monasteries in Sikkim. It plays a key role in preserving Bon traditions.",
    "location": "Kewzing, South Sikkim, India",
    "visitors": "Open to researchers, devotees, and visitors.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Norbu Choeling Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "Founded in 1730, Norbu Choeling is a prominent monastery in West Sikkim. It is known for its beautiful murals and traditional architecture.",
    "location": "Yuksom, West Sikkim, India",
    "visitors": "Open to monks and tourists.",
    "establishedYear": 1730,
    "contactInfo": "Not available"
  },
  {
    "name": "Boomtar Gumpa",
    "image": [],
    "panoramicImage": "",
    "description": "A small Buddhist monastery in South Sikkim, serving as a local center for rituals and prayer.",
    "location": "South Sikkim, India",
    "visitors": "Accessible to devotees and villagers.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Perbing Samtenling Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "A monastery located in South Sikkim, offering Buddhist teachings and spiritual practices.",
    "location": "South Sikkim, India",
    "visitors": "Welcomes local devotees and monks.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Maniram Peri Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "A lesser-known monastery in Sikkim, maintaining traditional Buddhist learning and meditation.",
    "location": "Sikkim, India",
    "visitors": "Open to local devotees.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Kyegue Dhagmo Chosling Nunnery",
    "image": [],
    "panoramicImage": "",
    "description": "A Buddhist nunnery in Sikkim dedicated to the education and training of nuns, preserving Tibetan Buddhist practices.",
    "location": "Sikkim, India",
    "visitors": "Accessible to nuns, devotees, and researchers.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Do Drun Choten",
    "image": [],
    "panoramicImage": "",
    "description": "Do Drul Chorten is the largest stupa in Sikkim, built in 1945. It is surrounded by prayer wheels and is one of the most important Buddhist sites.",
    "location": "Gangtok, East Sikkim, India",
    "visitors": "Major pilgrimage and tourist site.",
    "establishedYear": 1945,
    "contactInfo": "Not available"
  },
  {
    "name": "Serdup Choling Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "A monastery in South Sikkim with traditional Buddhist rituals and religious festivals.",
    "location": "South Sikkim, India",
    "visitors": "Open to monks and devotees.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Tendong Gumpa",
    "image": [],
    "panoramicImage": "",
    "description": "Located on Tendong Hill, this monastery is surrounded by lush forests and is associated with the Lepcha community. It is a sacred site of worship.",
    "location": "South Sikkim, India",
    "visitors": "Accessible to devotees, trekkers, and tourists.",
    "establishedYear": null,
    "contactInfo": "Not available"
  },
  {
    "name": "Samudruptse",
    "image": [],
    "panoramicImage": "",
    "description": "Samdruptse Monastery is famous for its giant statue of Guru Padmasambhava, which is one of the tallest in the world at 135 feet.",
    "location": "Namchi, South Sikkim, India",
    "visitors": "Major tourist and pilgrimage destination.",
    "establishedYear": 2004,
    "contactInfo": "Not available"
  },
  {
    "name": "Ngadak Thupten Shedup Dhargey Choeling Monastery",
    "image": [],
    "panoramicImage": "",
    "description": "Ngadak Thupten Shedup Dhargey Choeling is a new monastery built near the ancient Ngadak Monastery, continuing the spiritual lineage of the Nyingma tradition.",
    "location": "Namchi, South Sikkim, India",
    "visitors": "Accessible to monks, pilgrims, and tourists.",
    "establishedYear": null,
    "contactInfo": "Not available"
  }
        ];
        await Monastry.deleteMany({});
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













