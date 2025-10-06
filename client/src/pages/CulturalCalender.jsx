import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Calendar } from 'lucide-react';

const CulturalCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Sample events data - you can replace with your actual data
  const events = {
        '2025-09-11': {
      title: 'Pang Lhabsol Festival',
      location: 'Pemayangtse Monastery',
      time: 'Clean Dat 1inme',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Experience the magnificent Pang Lhabsol Festival at Pemayangtse Monastery. This sacred celebration honors the guardian deity of Sikkim with traditional mask dances, ceremonial rituals, and vibrant cultural performances. Witness monks in elaborate costumes performing ancient dances that tell stories of good triumphing over evil.',
      type: 'festival'
    },
    '2025-09-15': {
      title: 'Buddha Purnima Celebration',
      location: 'Rumtek Monastery',
      time: '6:00 AM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1604608672516-f1a1c0db7f63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Join the sacred Buddha Purnima celebration commemorating the birth, enlightenment, and death of Buddha. The monastery will be illuminated with thousands of butter lamps, and special prayers will be conducted throughout the day.',
      type: 'ritual'
    },
    '2025-09-22': {
      title: 'Meditation Workshop',
      location: 'Enchey Monastery',
      time: '9:00 AM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Learn traditional Tibetan meditation techniques in the serene environment of Enchey Monastery. This intensive workshop includes guided meditation sessions, breathing exercises, and teachings on Buddhist philosophy.',
      type: 'workshop'
    },
    '2025-09-28': {
      title: 'Losar Preparation Ritual',
      location: 'Tashiding Monastery',
      time: '7:00 AM - 12:00 PM',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Participate in the traditional preparation rituals for Losar, the Tibetan New Year. Watch as monks prepare ritual items, create intricate sand mandalas, and conduct purification ceremonies.',
      type: 'special'
    },
     "2025-10-02": {
    title: "Gandhi Jayanti",
    location: "Across Sikkim",
    time: "All day",
    image: "https://fortconvent.org/wp-content/uploads/2022/09/Gandhiji-1004x675.jpeg",
    description: "Gandhi Jayanti is celebrated nationwide as the birthday of Mahatma Gandhi, the father of the nation. In Sikkim, the day is observed with ceremonies at government offices, schools, and public spaces. Prayers, tribute marches, and cultural programs highlight Gandhi’s principles of non-violence, truth, and social harmony, inspiring people across the state.",
    type: "festival"
  },
    "2025-10-05": {
    title: "Thangka Painting Workshop",
    location: "Rumtek Monastery",
    time: "9:00 AM - 3:00 PM",
    image: "https://www.thirdrockadventures.com/assets-back/images/trip/gallery/thangka-shop-thamelnTw.jpg",
    description: "Immerse yourself in the sacred art of Thangka painting at Rumtek Monastery. Under the guidance of skilled monastic artists, participants will learn the traditional techniques of Tibetan painting, including preparation of natural pigments, meticulous brushwork, and intricate iconography. The workshop explores Buddhist symbolism in depth, explaining the spiritual meaning behind each deity and mandala.",
    type: "workshop"
  },
  "2025-10-09": {
    title: "Sonam Lhochhar Festival",
    location: "Tamang Community, Sikkim",
    time: "All day",
    image: "https://booking-manager-api-hop-nepal.s3.eu-west-1.amazonaws.com/file-manager/page/image-jhankri-dance-sonam-lhosar.jpg",
    description: "The Tamang New Year marked with traditional dances, folk songs, and community feasts celebrating new beginnings.Visitors can witness mesmerizing cultural performances, taste traditional delicacies, and participate in ceremonial blessings offered by community elders, immersing themselves in Sikkim's rich ethnic heritage.",
    type: "festival"
  },
  "2025-10-12": {
    title: "Mask Dance Ritual",
    location: "Enchey Monastery",
    time: "10:00 AM - 2:00 PM",
    image: "https://i.pinimg.com/736x/fd/3f/83/fd3f8365f68b49a93bf57abdf0a5ef0f.jpg",
    description: "Experience the sacred Cham dance performed by monks at Enchey Monastery, where elaborate masks and costumes bring Buddhist deities and spiritual narratives to life. It symbolizes the triumph of good over evil. The ritual is accompanied by traditional instruments such as cymbals, horns, and drums provide a rhythmic backdrop, enhancing the spiritual atmosphere.",
    type: "ritual"
  },
  "2025-10-18": {
    title: "Monastic Chanting Ceremony",
    location: "Pemayangtse Monastery",
    time: "7:00 AM - 12:00 PM",
    image: "https://i.pinimg.com/1200x/f1/99/44/f199440b64b9c1aa896f897d98708162.jpg",
    description: "A powerful chanting ritual led by senior monks to invoke blessings and purification for devotees and the surrounding community. The session features the recitation of ancient sutras, rhythmic chanting, and ritual offerings, providing a meditative environment that encourages inner reflection. Visitors can participate respectfully and observe the spiritual discipline and devotion central to Tibetan Buddhist practices.",
    type: "ritual"
  },
  '2025-10-22': {
  title: 'Gutor Ceremony Preparation',
  location: 'Pemayangtse Monastery',
  time: '10:00 AM - 3:00 PM',
  image: 'https://kagyuoffice.org/wp-content/uploads/2017/02/2017.02.21.jpg',
  description: 'Engage in the meticulous preparations for the annual Gutor ceremony, a New Year purification ritual at Pemayangtse Monastery. Monks prepare ritual items including ceremonial masks, butter lamps, and intricate sand mandalas. Visitors can observe sacred rituals, learn about the symbolic meanings behind each preparation step, and gain insight into the cultural and spiritual importance of cleansing ceremonies in Tibetan Buddhist tradition.',
  type: 'special'
},
  '2025-10-28': {
  title: 'Evening Chanting & Meditation',
  location: 'Enchey Monastery',
  time: '6:00 PM - 8:00 PM',
  image: 'https://static.wixstatic.com/media/3cb08b_5c9757c3304242f884502c6757e7ce3c~mv2.jpg/v1/fill/w_896,h_414,al_c,q_85,enc_auto/3cb08b_5c9757c3304242f884502c6757e7ce3c~mv2.jpg',
  description: 'Participate in an evening of chanting and meditation for spiritual reflection, relaxation, and mindfulness practice. This reflective event encourages mindfulness, relaxation, and spiritual rejuvenation. Monks lead guided meditation, accompanied by sacred chants and soft musical instruments, providing a serene environment for visitors to experience tranquility and connect with inner peace.',
  type: 'ritual'
},
  "2025-10-26": {
    title: "Chhetra Palden Drup Festival",
    location: "Tashiding Monastery",
    time: "6:00 AM - 6:00 PM",
    image: "https://admin.bhutaninbound.com/public/uploads/sub-packages/1604723104.JPG",
    description: "Attend the Chhetra Palden Drup Festival at Tashiding Monastery, a grand celebration featuring Cham dances, ritual exorcisms, and extensive prayer recitations. The festival is held to invoke peace, prosperity, and spiritual protection for the community. Visitors witness monks performing traditional rites, dramatic masked dances, and community offerings,in Sikkim's hills.",
    type: "festival"
  },
   "2025-11-01": {
    title: "Lakshmi Puja (Diwali)",
    location: "Across Sikkim",
    time: "Evening",
    image: "https://cdn.99pandit.com/images/blogsimg/Diwali-Puja-in-Hyderabad-1.webp",
    description: "Lakshmi Puja is celebrated as part of the Diwali festival, dedicated to Goddess Lakshmi, the deity of wealth and prosperity. Homes and temples are decorated with oil lamps and colorful rangoli patterns to welcome the goddess. Devotees perform prayers and rituals to seek blessings for prosperity and well-being in the coming year. The festival is marked by joyful gatherings, feasts, and lighting of lamps to dispel darkness and invite abundance.",
    type: "festival"
  },
  "2025-11-07": {
    title: "Guru Rinpoche Day",
    location: "Rumtek Monastery",
    time: "9:00 AM - 4:00 PM",
    image: "https://nationaltoday.com/wp-content/uploads/2022/06/Birth-Anniversary-of-Guru-Rinpoche.jpg",
    description: "Guru Rinpoche Day honors Padmasambhava, the tantric master credited with bringing Buddhism to Tibet and the Himalayas. The day involves ritual offerings, chanting, and meditation led by monks at Rumtek Monastery. Devotees seek spiritual blessings and teachings inspired by Guru Rinpoche’s life and accomplishments. The ceremony is a vibrant display of faith and devotion, reinforcing the deep Buddhist traditions in Sikkim.",
    type: "ritual"
  },
  "2025-11-11": {
    title: "Lhabab Duchen",
    location: "Rumtek Monastery",
    time: "9:00 AM - 12:00 PM",
    image: "https://www.india-tours.com/images/festivals/lhabab-duchen-festival-sikkim/lhabab-duchen2.jpg",
    description: "Commemorate the day when Buddha descended from the Tushita heaven to the earthly realm. The monastery hosts special prayers and rituals, and devotees gather to celebrate this significant event in Buddhist history.",
    type: "ritual"
  },
   "2025-11-12": {
    title: "Community Handicraft Revival Workshop",
    location: "Enchey Monastery, Gangtok",
    time: "10:00 AM - 4:00 PM",
    image: "https://1001things.org/wp-content/uploads/2016/08/Handicraft-items.jpg",
    description: "Learn traditional Sikkimese crafts including bamboo weaving, wool work, and mask-making. Local artisans share sustainable techniques passed down through generations. Participants create their own handcrafted souvenirs.",
    type: "workshop"
  },
   "2025-11-16": {
    title: "Kagyu Monlam Prayer Festival",
    location: "Rumtek Monastery",
    time: "8:00 AM - 4:00 PM",
    image: "https://www.kagyumonlam.org/images/content/Kagyu-Monlam/articles/SliderPhoto_011.jpg",
    description: "The Kagyu Monlam Prayer Festival is a major spiritual gathering held at Rumtek Monastery where monks and devotees assemble for extensive prayer sessions. This important Buddhist festival is dedicated to world peace and compassion, featuring the recitation of sacred texts, collective chanting, and butter lamp offerings. Special rituals and teachings are conducted by senior lamas, creating an atmosphere of mindfulness and unity among all attendees.",
    type: "festival"
  },
   "2025-11-27": {
    title: "Kartik Purnima",
    location: "Temples & Monasteries statewide",
    time: "Evening & Full Moon Night",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3z3q71_YTE3O9MraRr2-6vm_RYo1ni_RMMQ&s",
    description: "Mark the full moon of Kartik with lamps and offerings. Devotees visit temples, recite prayers, and observe rituals under the moonlight. A spiritually significant night for reflection and religious observance.",
    type: "festival"
  },
   "2025-11-30": {
    title: "Monastic Food Preparation Demonstration",
    location: "Enchey Monastery Kitchen",
    time: "11:00 AM - 2:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/8fc6d711-6de3-4138-9345-b6d312171da4/Picture+14+.jpg",
    description: "Witness the preparation of traditional monastic vegetarian meals using local Himalayan ingredients. This special event focuses on mindful cooking techniques, dietary customs in monastic life, and the spiritual value of food as nourishment for body and mind.",
    type: "special"
  },
  "2025-12-05": {
    title: "Sakewa Festival",
    location: "Rai communities across Sikkim",
    time: "All day",
    image: "https://sikkimproject.org/wp-content/uploads/2021/09/DSC_9638-copy.jpg",
    description: "Sakewa is a deeply spiritual festival for the Kirat Khambu Rai community, conducted as an homage to Mother Earth. The multi-day celebration begins with Bhumi Puja (earth worship), followed by communal dances accompanied by vibrant drumming and cymbals. It celebrates nature's bounty and reaffirms the community’s reverence for the environment and ancestors through rituals and joyous festivities.",
    type: "festival"
  },
  "2025-12-08": {
  title: "Avalokiteshvara Puja",
  location: "Rumtek Monastery",
  time: "9:00 AM - 1:00 PM",
  image: "https://pbs.twimg.com/media/E9IFodAVkAQdIwh.jpg:large",
  description: "A special prayer dedicated to Avalokiteshvara, the Bodhisattva of Compassion. Monks chant mantras and perform offerings, invoking compassion and peace for all beings.",
  type: "ritual"
},
   "2025-12-10": {
    title: "Zanstso Dance Festival",
    location: "Pemayangtse Monastery",
    time: "Daytime",
    image: "https://www.indianholiday.com/wordpress/wp-content/uploads/2024/08/zanskar-festival-830-1.jpeg",
    description: "The Zanstso Dance Festival features masked cham performances signifying the closure of the harvest season, invoking blessings for future prosperity. Monks don elaborate costumes and masks, enacting stories from Buddhist lore amid traditional melodies and drumbeats, creating a spectacle of spiritual fervor and cultural pride.",
    type: "festival"
  },
  "2025-12-15": {
    title: "Butter Lamp Offering Ceremony",
    location: "Ralong Monastery, South Sikkim",
    time: "5:00 PM - 8:00 PM",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Lamp_Filling_Ritual_in_a_Buddhist_Temple_in_Sikkim_India.JPG",
    description: "A sacred evening where hundreds of butter lamps are lit to dispel darkness and obstacles. Monks and devotees chant prayers while arranging rows of glowing lamps, symbolizing wisdom and compassion. This special ritual is believed to bring peace, longevity, and prosperity to the community.",
    type: "special"
  },
   "2025-12-23": {
    title: "Prayer Wheel Ceremony",
    location: "Various Monasteries",
    time: "Morning to Noon",
    image: "https://www.shutterstock.com/image-photo/prayer-wheel-swayambhunath-swayambhu-ancient-600w-2150067779.jpg",
    description: "Prayer Wheel Ceremony is a devotional event where monks and devotees spin prayer wheels inscribed with mantras. This act is believed to release spiritual energy and blessings into the world. It is a serene ritual aimed at purification and collective merit accumulation for the community’s welfare.",
    type: "ritual"
  },
   "2025-12-25": {
    title: "Christmas Day",
    location: "Churches and Communities across Sikkim",
    time: "All day",
    image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/10/Christmas-Celebrate-in-India.jpg?fit=1024%2C685&ssl=1",
    description: "Christmas Day is celebrated joyously among the Christian communities in Sikkim with church services, carol singing, and festive gatherings. Houses and churches are decorated with lights and nativity scenes. The holiday brings families and communities together to commemorate the birth of Jesus Christ, sharing meals, gifts, and goodwill.",
    type: "festival"
  },

  "2025-12-28": {
    title: "Winter Meditation Workshop",
    location: "Enchey Monastery",
    time: "9:00 AM - 4:00 PM",
    image: "https://www.greatnepaltreks.com/wp-content/uploads/2023/03/Meditation.jpeg",
    description: "This workshop focuses on traditional Buddhist meditation techniques adapted to the introspective winter months. It includes guided meditation, breathing exercises, and Dharma teachings designed to enhance mindfulness, inner peace, and spiritual resilience during the colder season.",
    type: "workshop"
  },
  "2025-12-29": {
    title: "Kagyed Dance Festival",
    location: "Rumtek and Phodong Monasteries",
    time: "Daytime",
    image: "https://www.hlimg.com/images/events/738X538/event_1528354607m1.jpg?w=400&dpr=2.6",
    description: "This highly revered Buddhist festival showcases masked monks performing ritual dances symbolizing annihilation of negativity and triumph of righteousness. The Kagyed Dance narrates scenes from Buddhist mythology and concludes with symbolic burning of effigies to cleanse the mind and environment, inviting peace and prosperity for the coming year.",
    type: "festival"
  },
  "2026-01-02": {
    title: "Losar Preparatory Workshop",
    location: "Rumtek Monastery",
    time: "9:00 AM - 3:00 PM",
    image: "https://i.ytimg.com/vi/-OeSo19z96s/maxresdefault.jpg",
    description: "Prepare for Tibetan New Year with teachings on traditional offerings, sand mandalas, and prayer flag rituals.",
    type: "workshop"
  },
  "2026-01-05": {
    title: "Nyenpa Guzom Purification Ritual",
    location: "Enchey Monastery",
    time: "Morning to afternoon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST51PVt2x6Ik0FfGORjiqUYkr-mX59Nz195g&s",
    description: "A powerful purification ritual aimed at cleansing spiritual impurities from the community and environment. Monks chant protective mantras accompanied by ritual offerings and fire ceremonies. This event prepares the monastery and devotees for auspicious new beginnings and cosmic harmony.",
    type: "ritual"
  },
  "2026-01-14": {
    title: "Maghe Sankranti Festival",
    location: "Enchey Monastery",
    time: "7:00 AM - 12:00 PM",
    image: "https://www.collegenp.com/uploads/2022/01/Maghe-Sankranti-and-Maghi-Festival-in-Nepal.jpg",
    description: "A holy day observed with pujas, butter lamps, and special prayers for purification and blessings at the monastery.",
    type: "festival"
  },
  "2026-01-17": {
    title: "Mask Dance Festival",
    location: "Tashiding Monastery",
    time: "10:00 AM - 3:00 PM",
    image: "https://www.japjitravel.com/blog/wp-content/uploads/2024/04/Sikkim-Festivals.webp",
    description: "Monks perform traditional cham dances adorned with vividly colored masks and costumes. These sacred dances depict stories of deities, demons, and morality tales intended to confer blessings and remove obstacles. The festival is both a spiritual offering and a visual spectacle attracting locals and pilgrims.",
    type: "festival"
  },
  "2026-01-22": {
    title: "Buddhist Teaching and Chanting",
    location: "Enchey Monastery",
    time: "9:00 AM - 5:00 PM",
    image: "https://image.volunteerworld.com/e7ce0789f915931c4f50a8f9436bb29caf4d07a6/12307591_693678107435686_7733203293205726219_o.jpg",
    description: "A day dedicated to Buddhist doctrinal teachings and chanting rituals led by senior monks. Devotees deepen their spiritual understanding and partake in collective prayers cultivating mindfulness and compassion. This event strengthens community bonds and promotes peace.",
    type: "ritual"
  },
   "2026-01-26": {
    title: "Republic Day",
    location: "Gangtok and Major Towns in Sikkim",
    time: "All day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdi9-vjTit7R1tYeOE4K-i1WVQhlqyfyOKQQ&s",
    description: "Republic Day marks the adoption of the Indian Constitution and is celebrated with great pride across Sikkim. Official flag hoisting ceremonies, parades, cultural programs, and patriotic events are organized in towns and cities. The day is a tribute to Indian democracy, unity, and the country’s diverse heritage.",
    type: "festival"
  },
  "2026-01-29": {
    title: "New Year Cultural Fair",
    location: "Gangtok Monastery Grounds",
    time: "All day",
    image: "https://sikkimtourism.org/wp-content/uploads/2022/04/Saga-Dawa.jpg",
    description: "A cultural fair showcasing Sikkim’s rich heritage of art, dance, handicrafts, and cuisine within the sacred spaces surrounding Gangtok’s monasteries. The fair serves as a platform for cultural exchange, preserving traditional crafts and fostering community pride while inviting tourists to experience Sikkim's spiritual culture.",
    type: "special"
  },
   "2026-02-04": {
    title: "Chotrul Duchen Festival",
    location: "Rumtek Monastery",
    time: "6:00 AM - 8:00 PM",
    image: "https://www.shutterstock.com/image-photo/koh-chang-thailand-february-25-260nw-131915846.jpg",
    description: "Celebrating Buddha’s miraculous deeds, this festival includes butter lamp offerings, special prayers, and Cham dances.",
    type: "festival"
  },
   "2026-02-12": {
    title: "Silent Retreat",
    location: "Enchey Monastery",
    time: "8:00 AM - 5:00 PM",
    image: "https://bookretreats.com/assets/photo/retreat/0m/40k/40038/p_1615379/1000_1725517330.jpg",
    description: "Spend a day in complete silence, practicing meditation and mindfulness under the guidance of senior monks.",
    type: "workshop"
  },
   "2026-02-15": {
    title: "Medicine Buddha Healing Ritual",
    location: "Pemayangtse Monastery",
    time: "8:00 AM - 11:00 AM",
    image: "https://media-en.thaythichtructhaiminh.com/files/huyen_anh/2024/02/22/the-medicine-buddha-ceremony-0828.jpg",
    description: "A ritual dedicated to the Medicine Buddha, believed to promote healing, purification, and spiritual awakening. Monks chant special mantras, offer medicinal herbs, and perform healing visualizations. Devotees seek blessings for health and relief from life’s obstacles during this deeply restorative monastic ritual.",
    type: "ritual"
  },
  "2026-02-18": {
    title: "Losar Festival (New Year)",
    location: "Rumtek and Phodong Monasteries",
    time: "All day",
    image: "https://www.india-tours.com/images/festivals/losar-festival/losar-festival2.jpg",
    description: "Losar marks the Tibetan New Year and is celebrated with spectacular ceremonies at prominent monasteries. Monks perform cham mask dances, prayers, and offer butter lamps to dispel negativity and welcome good fortune. Families gather for festive meals, and devotees participate in community purification rituals and vibrant cultural performances symbolizing renewal and prosperity.",
    type: "festival"
  },
  "2026-02-28": {
    title: "Monastic Debate Session",
    location: "Pemayangtse Monastery",
    time: "2:00 PM - 5:00 PM",
    image: "https://www.jennyfaraway.com/wp-content/uploads/2015/05/DSC_0959.jpg",
    description: "Observe monks engaging in lively debates on Buddhist philosophy, a traditional monastic practice for sharpening knowledge.",
    type: "special"
  },
  "2026-03-03": {
    title: "Bhumchu Festival",
    location: "Tashiding Monastery",
    time: "All day",
    image: "https://dics.co/uploads/2023/05/1683789573bumchu-663.jpeg",
    description: "Bhumchu is a sacred Buddhist festival held at Tashiding Monastery, where the holy Bhumchu water vase is opened to predict Sikkim's fate for the year ahead. Monks perform powerful prayers and devotees receive blessed water believed to bring healing and good fortune. Pilgrims from Nepal, Bhutan, and India gather for this mystical ritual, considered one of Sikkim's holiest events.",
    type: "ritual"
  },
  "2026-03-04": {
    title: "Holi Festival",
    location: "Monasteries and Communities across Sikkim",
    time: "All day",
    image: "https://media.assettype.com/outlookindia/2024-03/ab5aeb9e-7ce3-44b5-af86-216764634842/Holi_Festival_Celebrations_1.jpg??w=1080&auto=format%2Ccompress&fit=max",
    description: "Holi, the Festival of Colors, is celebrated joyfully across Sikkim. Monasteries host prayers for new beginnings, and communities gather for music, dance, and the throwing of vibrant powders. The event fosters unity, joy, and cultural exchange, blending Buddhist prayers with traditional Indian festivities.",
    type: "festival"
  },
    "2026-03-15": {
    title: "Monastic Prayer & Meditation Retreat",
    location: "Various Monastery",
    time: "All day",
    image: "https://www.buddhistmonasteries.org/wp-content/uploads/2025/04/meditation-retreate-in-Nepal-1024x432.jpeg",
    description: "A full-day retreat focused on prayer, chanting, and meditation. Senior lamas lead teachings and practices to cultivate mindfulness and compassion. Guests and locals participate in guided sessions, benefiting from the serene monastic atmosphere.",
    type: "ritual"
  },
   "2026-03-20": {
    title: "Guru Padmasambhava Festival",
    location: "Pemayangtse Monastery and all over Sikkim",
    time: "6:00 AM - 7:00 PM",
    image: "https://www.tourmyindia.com/genral_information/fair_festival/images/hemis-festival1.jpg",
    description: "A vibrant festival honoring Guru Rinpoche with mask dances, chanting, and community feasts.",
    type: "festival"
  },
   "2026-03-21": {
    title: "Butter Sculpture Workshop",
    location: "Enchey Monastery",
    time: "9:00 AM - 4:00 PM",
    image: "https://i0.wp.com/tnp.org/wp-content/uploads/finished-Tibetan-butter-sculptures-for-Losar.jpg?resize=625%2C274&ssl=1",
    description: "Learn the intricate art of creating butter sculptures used in rituals and ceremonies.",
    type: "workshop"
  },
  "2026-03-26": {
    title: "Rama Navami (Chaitey Dasain)",
    location: "Monasteries and Communities across Sikkim",
    time: "10:28 AM - 12:55 PM",
    image: "https://vedicfeed.com/wp-content/uploads/2023/03/ram_navami-1024x576.webp",
    description: "Rama Navami, or Chaitey Dasain, is a festival honoring Lord Rama. Monasteries and Hindu temples conduct rituals, prayers, and communal feasts. This occasion strengthens interfaith harmony and marks a major spring celebration in Sikkim.",
    type: "festival"
  },
   "2026-03-28": {
    title: "Lampokhari Tourism Festival",
    location: "Aritar District, Near Monasteries",
    time: "All day",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1Hvgeedd0l1rAT0f5ok-DyqQrDFFOjzuKRMz4BjJnIe7VNk_Yh56_yuE5njVvRFoVB0Juu7Ya40imUx82rmNu4vwhOJUyi8CE5NpY5ulCwRQc8oxV2XryKeRS8Tv_Uoq_NGsf5Q_CYtg/s1600/bdcopy.jpg",
    description: "The Lampokhari Tourism Festival blends cultural activities and monastery visits in the scenic district of Aritar. The festival features folk songs, dance performances, local food stalls, and excursions to monasteries and lakes, making it a lively annual spring event in Sikkim.",
    type: "special"
  },
   '2026-04-08': {
    title: 'Rabong Discovered Festival (Ravangla Crafts & Culture)',
    location: 'Cho-zo Lake area, Ravangla, South Sikkim',
    time: 'All day / multiple days (8–12 April)',
    image: 'https://i.pinimg.com/736x/da/46/92/da4692c299b6e4d41f7ac2623e926d80.jpg',
    description: 'A 5-day crafts and culture festival held every year in the second week of April. Local artisans from Sikkim, other Northeast states, and Bhutan showcase handicrafts. The festival includes music & fashion shows, food stalls, boating, horse riding and cultural exhibitions. (Source: eSikkim Tourism) :contentReference[oaicite:0]{index=0}',
    type: 'festival'
  },
  '2026-04-09': {
    title: 'Ravangla Tourist Festival – Day 2',
    location: 'Cho-zo Lake, Ravangla',
    time: 'Morning to evening',
    image: 'https://i.pinimg.com/1200x/ab/cc/98/abcc98acb709f00cbff168fbf33364f6.jpg',
    description: 'Continuation of the Ravangla festival: emphasis on tourism, cultural performances, local community participation, and various fun activities in mountain settings. (Source: Namchi district site) :contentReference[oaicite:1]{index=1}',
    type: 'festival'
  },
  '2026-04-10': {
    title: 'Khecheopalri Lake Ritual / Fair',
    location: 'Khecheopalri Lake, Pelling area, West Sikkim',
    time: 'Evening / dusk ritual & lamp offerings',
    image: 'https://i.pinimg.com/1200x/c2/70/3f/c2703fc282f5a303e6e4e23c19ada489.jpg',
    description: 'In Maghe Purne (March/April period), this ritual fair at Khecheopalri Lake involves devotees offering food, lighting butter lamps on bamboo boats tied with khadas, chanting prayers, and collecting sacred water as prasad. (Source: Wikipedia / lake festival) :contentReference[oaicite:2]{index=2}',
    type: 'festival'
  },
  '2026-04-11': {
    title: 'Kamsil Ceremony (Tholung Monastery)',
    location: 'Tholung Monastery, Dzongu, North Sikkim',
    time: 'Morning to afternoon (to be confirmed)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYrtQ-QIsMB4WfRmu_Y3DUDUNYm2pwiDiCA&s',
    description: 'Every three years, Tholung Monastery unveils sacred relics/artifacts in its Kamsil ceremony, exposing them to devotees and pilgrims. This rare ritual typically occurs in April. (Source: Wikipedia / Tholung) :contentReference[oaicite:3]{index=3}',
    type: 'ritual'
  },
  '2026-04-12': {
    title: 'Tendong Gumpa / Tshechu Ritual',
    location: 'Tendong Gumpa, Damthang, Namchi (South Sikkim)',
    time: 'Morning (when lunar calendar Tshechu aligns)',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npAMgiGRwv7NTEHYGfhzmC95nFa1HrnSQ3AQgvN2BiNDCvI6HTg8Uq9MASfk9HagwH8pSVodRiOhAOE279mAASnF4Q36qva79_BHyIp6kT8agkS1KoRUG2LT070DyAjmClkkqw=w270-h312-n-k-no',
    description: 'At Tendong Gumpa, there is a local Tshechu (religious gathering) in March–April. The tenth day of the Tibetan lunar month sometimes aligns then. Local people visit and offer prayers for harvest / prosperity. (Source: Tendong Gumpa site) :contentReference[oaicite:4]{index=4}',
    type: 'ritual'
  },
 '2026-05-05': {
    title: 'Sakewa Festival',
    location: 'Villages of Kirat Khambhu Rai community (various across Sikkim)',
    time: 'All day / village ceremonies',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwhXORN0f0WY8qGTftSHTZgeMVqCli4fTEw&s',
    description: 'Sakewa (also known as Bhumi Puja / Land Worship) is observed by the Kirat Khambhu Rai community, especially in Sikkim villages, in May. It involves ritual offerings, ceremonies to bless the land and crops. (Namchi district source) ',
    type: 'festival'
  },
  '2026-05-10': {
    title: 'International Flower & Garden Festival',
    location: 'White Hall / Exhibition Garden, Gangtok',
    time: 'Daily exhibitions, 10:00 AM – 6:00 PM (approx)',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjI28x2YGvNKBSFhqm9j38kpNsIaEgp2iesZFlM_2jPUTmuVh-tD7doaZIjuvaikT-aMMINHlT-9n91v85MY5knFnSiW_bGeb_eqFM3sU',
    description: 'A month-long flower exhibition and garden festival held in May. Showcases orchids, roses, alpine plants, and horticultural displays by local growers. (Deyor Sikkim festivals) ',
    type: 'festival'
  },
  '2026-05-14': {
    title: 'Ram Navami / Chaite Dasain',
    location: 'Temples & Hindu communities across Sikkim',
    time: 'Morning to afternoon (varies with rituals)',
    image: 'https://i.pinimg.com/1200x/56/ce/2a/56ce2a64c57ac2914ba0b660785d4e2b.jpg',
    description: 'Ram Navami celebrates the birth of Lord Rama. Among Nepali Hindu communities in Sikkim, it overlaps with “Chaite Dasain.” Devotees visit temples, perform pujas, and offer prayers. (Sikkim government festivals list) ',
    type: 'ritual'
  },
  '2026-05-25': {
    title: 'Saga Dawa Observance Start',
    location: 'Monasteries across Sikkim (e.g. Tsuklakhang, Rumtek)',
    time: 'Evening prayers and butter lamp offerings',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYGAhnMzJuqldo0hnFZCk9HY6O35vGbMS8w&s',
    description: 'Saga Dawa commemorates the birth, enlightenment, and parinirvana of Buddha. Devotees offer butter lamps, prayers, and recite sutras in monasteries. This may begin in late May. (Sikkim tourism festival calendar) ',
    type: 'festival'
  },
'2026-06-05': {
    title: 'Ganga Dussehra Observance',
    location: 'Teesta River banks / local rivers in Sikkim',
    time: 'Morning to noon (ritual bathing & aarti)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbKs2tClQrtjHGFSEZlXL9crgVqac5IG1cg&s',
    description: 'Ganga Dussehra is a Hindu festival celebrating the descent of the Ganga River to earth. Devotees may take ritual baths in the Teesta or tributaries, perform aarti, and offer prayers by rivers. (Mentioned in Sikkim June festival lists) ',
    type: 'festival'
  },
  '2026-06-11': {
    title: 'Saga Dawa Main Day (Full Moon)',
    location: 'Tsuklakhang, Rumtek & Monasteries across Sikkim',
    time: 'All day – special pujas, processions & lamp offerings',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNM14cDhAoSadX81ckMRgbJwhO0pFR4hCfbw&s',
    description: 'Saga Dawa commemorates Buddha’s birth, enlightenment, and parinirvana. The full moon day is especially sacred: devotees visit monasteries, light butter lamps, and participate in processions. (Sikkim tourism – Saga Dawa) ',
    type: 'festival'
  },
  '2026-06-09': {
    title: 'Ashadha Ekadashi',
    location: 'Temples across Sikkim, especially Hindu communities',
    time: 'Morning rituals & fasting till evening',
    image: 'https://c.ndtvimg.com/2025-07/nu69eb34_ashadhi-ekadashi_625x300_05_July_25.jpeg',
    description: 'Ashadha Ekadashi is a sacred fasting day dedicated to Lord Vishnu, falling on the 11th day (Ekadashi) of the bright fortnight of the Ashadha month (June–July). (Mentioned in June festival lists) ',
    type: 'ritual'
  },
  '2026-06-20': {
    title: 'Rath Yatra Procession',
    location: 'Temples / major Hindu localities in Sikkim (e.g. Gangtok)',
    time: 'Afternoon procession & festivities',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5D2tdDznPHRy1Xz9b1UHn1o_HMSRI53TA&s',
    description: 'The chariot procession of Lord Jagannath (along with Balabhadra and Subhadra) moves through streets. Devotees pull the chariot, sing hymns, and celebrate. (Listed in Sikkim June festival coverage) ',
    type: 'festival'
  },
  '2026-06-15': {
    title: 'Monsoon Cultural Fair / Rain-Season Fest (tentative)',
    location: 'District cultural centers or open grounds in Sikkim',
    time: 'Evening performances & stalls',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmKwIUw7DoI183BDl0LCAp3SHLu6eFGmeVg&s',
    description: 'As the monsoon approaches, local communities often host cultural fairs including folk dance, music, handicraft stalls, and cuisine exhibitions to welcome rains. (General practice in monsoon season) ',
    type: 'festival'
  },
'2026-07-13': {
    title: 'Bhanu Jayanti',
    location: 'Gangtok & other Nepali-speaking communities, Sikkim',
    time: 'All day / cultural programs in the evening',
    image: 'https://i0.wp.com/eastmojo.com/wp-content/uploads/2023/07/Untitled-design-2023-07-13T170228.590.png?fit=1280%2C720&ssl=1',
    description: 'Celebration of the birth anniversary of Bhanubhakta Acharya, the first poet of Nepali literature. Includes poetry recitals, cultural shows and community gatherings. (Nepali literature & heritage event) ',
    type: 'special'
  },
  '2026-07-15': {
    title: 'Drukpa Tshechi Festival',
    location: 'Rumtek Monastery & other Drukpa monasteries in Sikkim',
    time: 'Morning to evening, with masked dances (chaam), prayers & rituals',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwms7sXrEMVJu80BYryfid8IQI5trVcFidw&s',
    description: 'A major Buddhist festival commemorating Emperor Tsangpa Gyare and the beginning of the Drukpa lineage’s prominence. Monastic dance performances, gatherings of monks, and devotees offering prayers. ',
    type: 'festival'
  },
  '2026-07-20': {
    title: 'Tsungkar Tshechu (Birth of Guru Padmasambhava)',
    location: 'Rumtek Monastery & other major monasteries',
    time: 'Full day ceremonies and Chaam dances',
    image: 'https://sikkimtourism.org/wp-content/uploads/2023/11/Tsungkar-Tshechu.jpg',
    description: 'Commemoration of Guru Padmasambhava’s birth, known for elaborate masked dances, scripture recitals, large gatherings of devotees seeking blessings. ',
    type: 'festival'
  },
  '2026-07-22': {
    title: 'Buriakhang Bazaar Festival',
    location: 'Pelling (Buriakhang Hill & nearby villages)',
    time: 'Multi-day bazaar / evening cultural programs',
    image: 'https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/Buriakhang-Bazaar-Festival.webp',
    description: 'A cultural fair showcasing music, local dance, food stalls, handicrafts of the Limboo community & neighboring communities. Opportunity to see tribal costumes and local arts. ',
    type: 'ritual'
  },
  '2026-07-25': {
    title: 'Rakey Mela',
    location: 'Namchi district villages, South Sikkim',
    time: 'Afternoon to evening fair events',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCm4og0_F2eKYV2I4khUiZRSrbl4wNJYkxXA&s',
    description: 'Local fair involving folk dances, games, food stalls; community event to mark seasonal transitions and social gathering. ',
    type: 'workshop'
  },
  '2026-07-28': {
    title: 'Varsha Mangal Festival',
    location: 'Throughout Sikkim (Hindu communities)',
    time: 'Morning prayers & evening rituals',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCp8F_b43Xlg7gxLSJVyy0-fW5mErZS1pmWA&s',
    description: 'Celebration of the advent of monsoons (Shravan month). Devotees offer prayers to Lord Shiva, fast, chant hymns, hoping for bountiful rains and successful crops. ',
    type: 'festival'
  },
  '2026-07-30': {
    title: 'Tendong Lho Rum Faat (Lepcha Thanksgiving)',
    location: 'Tendong Hill / Ravangla / South Sikkim',
    time: 'All day pilgrimage & offerings',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_INBUC--S3JGz8nTsJdu_AjlDwIKUTw7rA&s',
    description: 'One of the oldest Lepcha festivals. A thanksgiving festival to Mount Tendong, believed to have protected the Lepcha people during a great flood. Includes pilgrimage, prayers, traditional dances and offerings. ',
    type: 'festival'
  },
  '2026-07-18': {
    title: 'Monsoon Blessing Ritual / Sacred Rain Prayers',
    location: 'Temples & traditional community sites across Sikkim',
    time: 'Early morning & evening',
    image: 'https://religionworld.s3.ap-south-1.amazonaws.com/uploads/2020/06/indra-jatra-the-most-vibrant-festival-in-kathmandu.jpeg',
    description: 'Community ritual praying for safe monsoon rains, protection from natural disasters, and a good agricultural season. Local families unite for offerings, pujas, chants. ',
    type: 'ritual'
  },
 "2026-08-04": {
    title: "Guru Rinpoche's Thungkar Tshechu",
    location: "Various monasteries across Sikkim",
    time: "All day / main rituals in morning and afternoon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVs0UBLlVqjWcrvNZkq_IjipzeVbmHT7sRMg&s",
    description: "A religious festival honoring Guru Rinpoche with prayers, masked dances, and rituals performed in monasteries across Sikkim.",
    type: "ritual"
  },
  "2026-08-08": {
    title: "Tendong Lho Rum Faat",
    location: "Namchi, South Sikkim",
    time: "Daytime / evening rituals",
    image: "https://utsav.gov.in/public/uploads/event_picture_image/event_449/16565138102029257042.JPG",
    description: "A three-day Lepcha festival commemorating ancestors' escape from a great flood. Celebrated with prayers, dances, and mask rituals.",
    type: "festival"
  },
  "2026-08-15": {
    title: "Independence Day",
    location: "Statewide across Sikkim",
    time: "Morning flag hoisting / day events",
    image: "https://i.pinimg.com/736x/8b/fd/9f/8bfd9f2b3a7a320bf1b53bde0c5a71e5.jpg",
    description: "National holiday celebrating India's independence. Marked with flag hoisting, parades, and cultural programs throughout Sikkim.",
    type: "special"
  },
  "2026-08-20": {
    title: "Nepali Bhasa Manyata Diwas",
    location: "Statewide",
    time: "Daytime cultural programs",
    image: "https://i.pinimg.com/736x/7f/bd/33/7fbd3388a40f5a5b208036ef782f39cb.jpg",
    description: "Commemorates the recognition of the Nepali language in Sikkim. Celebrated with cultural programs, literary events, and community gatherings.",
    type: "festival"
  },
  "2026-08-31": {
    title: "Pang Lhabsol Festival",
    location: "Rabong / Namchi District",
    time: "All day / main rituals in afternoon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6StcNeBR3ntcvpQ2rR5nooloVIA7x6ZxHg&s",
    description: "Honors Mount Kanchenjunga as the guardian deity of Sikkim. Masked ‘Cham’ dances, offerings, and rituals are performed at monasteries and public venues.",
    type: "festival"
  },
    "2026-09-06": {
    title: "Indrajatra (Indra Jatra)",
    location: "Gangtok / Newar community areas",
    time: "Daytime procession & rituals",
    image: "https://i0.wp.com/eastmojo.com/wp-content/uploads/2022/09/Untitled-design-2022-09-08T174754.010.png?fit=1920%2C1080&ssl=1",
    description: "A festival among the Newar Hindu community invoking Lord Indra (god of rain). Colorful chariot processions, masked dances, and drumming in streets.",
    type: "ritual"
  },
  "2026-09-19": {
    title: "Dashain – Start of Navaratri period",
    location: "Hindu communities across Sikkim",
    time: "Evening pujas & rituals",
    image: "https://im.whatshot.in/img/2020/Oct/d3-1603278467.jpg?wm=1&w=1200&h=630&cc=1",
    description: "Dashain (Navaratri) begins in late September. Marks the worship of Goddess Durga over several days with rituals and family gatherings.",
    type: "festival"
  },
  "2026-09-30": {
    title: "Cherry Blossom / Autumn Viewing & Local Cultural Fair",
    location: "Higher altitudes / hill towns (Yuksam, Lachung, etc.)",
    time: "Daytime walks, evening cultural performances",
    image: "https://utsav.gov.in/public/uploads/event_cover_image/event_43/16491603531668131798.jpg",
    description: "As monsoon recedes, Sikkim’s hills often see blooming cherry blossoms. Local communities sometimes hold cultural fairs, music and dance performances.",
    type: "workshop"
  } 
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'festival': return 'bg-red-600';
      case 'ritual': return 'bg-orange-500';
      case 'workshop': return 'bg-blue-500';
      case 'special': return 'bg-purple-600';
      default: return 'bg-gray-500';
    }
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDateKey = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  const selectDate = (day) => {
    const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(day);
    if (events[dateKey]) {
      setSelectedEvent(events[dateKey]);
    } else {
      setSelectedEvent(null);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
      const hasEvent = events[dateKey];
      const isSelected = selectedDate === day;

      days.push(
        <div
          key={day}
          onClick={() => selectDate(day)}
          className={`h-12 flex items-center justify-center cursor-pointer relative transition-all duration-200 hover:bg-slate-700/50 rounded-lg ${
            isSelected ? 'bg-orange-500 text-white' : 'text-slate-300'
          }`}
        >
          <span className="text-sm font-medium">{day}</span>
          {hasEvent && (
            <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${getEventTypeColor(hasEvent.type)}`}></div>
          )}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" style={{
      backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Sacred Sikkim</h1>
          </div>
          <h2 className="text-2xl text-slate-300 mb-2">Cultural Calendar</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Embark on an immersive journey through ancient monasteries and vibrant culture of Sikkim. 
            Explore sacred festivals, meditation workshops, and spiritual celebrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-300" />
                </button>
                <h3 className="text-xl font-semibold text-white">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                </button>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-slate-300">Festivals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-slate-300">Rituals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-slate-300">Workshops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                  <span className="text-slate-300">Special Events</span>
                </div>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="h-10 flex items-center justify-center">
                    <span className="text-sm font-medium text-slate-400">{day}</span>
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {renderCalendarDays()}
              </div>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 sticky top-8">
              {selectedEvent ? (
                <div>
                  <div className="mb-6">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {selectedEvent.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                      <span className="text-sm">{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Clock className="w-4 h-4 mr-2 text-orange-500" />
                      <span className="text-sm">{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className={`px-3 py-1 rounded-full text-xs text-white ${getEventTypeColor(selectedEvent.type)}`}>
                        {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {selectedEvent.description}
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                    Book Experience
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-400 mb-2">
                    Select a Date
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Click on any highlighted date to view event details and book your spiritual journey.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalCalendar;
