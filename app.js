const FEATURED_ORDER = ["white", "nacpan", "banul", "cloud9", "alona", "kota", "saud", "puerto-white", "kalanggaman", "kaputian"];

const seedBeaches = [
  {
    id: "white",
    name: "White Beach, Boracay",
    location: "Boracay, Aklan",
    region: "Visayas",
    vibe: "Classic island escape",
    type: "Fine white sand",
    best: "Swimming and sunsets",
    intro: "Powdery white sand, calm swimming spots, and classic sunset views along Boracay's western coast.",
    lat: 11.967,
    lon: 121.924,
    rating: 4.9,
    description: "Boracay's best-known shoreline, with pale sand and a lively beachfront scene. Follow local swimming flags and environmental rules.",
    highlights: [
      "Fine white sand along Stations 1, 2, and 3",
      "Wide beachfront path for walking and sunset viewing",
      "Generally calmer sea conditions during Amihan season"
    ],
    bestTime: "December to May (dry / Amihan season) generally offers calmer waters and clearer skies.",
    activities: [
      "Swimming in designated zones and beachfront walks",
      "Sunset viewing along the western shore",
      "Boat tours or island-hopping arranged through accredited local operators"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to Caticlan Airport (MPH) or Kalibo International Airport (KLO).",
        "From Caticlan Airport, take a tricycle or van to Caticlan Jetty Port.",
        "Ride a pump boat or ferry across to Cagban Port, then take a tricycle or e-trike to White Beach."
      ],
      fromHub: [
        "From Caticlan Jetty Port: take a boat to Cagban Port, then ride a tricycle or e-trike to your station.",
        "From Kalibo: take a bus or van to Caticlan Jetty Port, then transfer by boat and tricycle/e-trike."
      ],
      fares: [
        { mode: "Flight (Manila–MPH / KLO)", route: "Air travel to Caticlan or Kalibo", estimate: "Varies by airline & date" },
        { mode: "Bus / Van", route: "Kalibo to Caticlan Jetty Port", estimate: "Approx. ₱300–₱500" },
        { mode: "Ferry / Pump Boat", route: "Caticlan to Cagban Port (boat fare only)", estimate: "Approx. ₱50–₱100 (terminal/environmental fees separate)" },
        { mode: "Tricycle / E-Trike", route: "Airport or port to White Beach", estimate: "Approx. ₱50–₱250" }
      ]
    },
    image: "https://i.pinimg.com/1200x/15/f5/b1/15f5b1013b38b6b110c098dc5368c20c.jpg?auto=format&fit=crop&w=1100&q=85",
    gallery: [
      "https://i.pinimg.com/1200x/44/2e/3c/442e3c54c89b16359a41b5fd903490cd.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/d9/fc/b6/d9fcb6fbe7fc2e698e8b4cfb4c5f1197.jpg?dpr=2&fit=crop&height=500&quality=80&width=700",
      "https://i.pinimg.com/736x/24/ef/e4/24efe4fe46d4be1dc8184c9ff224122e.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "nacpan",
    name: "Nacpan Beach",
    location: "El Nido, Palawan",
    region: "Luzon",
    vibe: "Golden-hour kind of day",
    type: "Long sandy shore",
    best: "Sunset strolls",
    intro: "A sweeping stretch of golden sand north of El Nido with open coastal views and a laid-back pace.",
    lat: 11.285,
    lon: 119.414,
    rating: 4.8,
    description: "A long stretch of golden sand north of El Nido, loved for its open shoreline and coastal views. Conditions vary by season; ask local guides about swimming conditions.",
    highlights: [
      "Long, wide golden-sand coastline north of El Nido town",
      "Open horizon views and relaxed coastal atmosphere",
      "Viewpoint overlook near the approach to the beach"
    ],
    bestTime: "December to May generally brings drier weather and smoother overland/coastal travel.",
    activities: [
      "Shoreline walks and late-afternoon sunset viewing",
      "Relaxing along the open beach away from town crowds",
      "Overland transfers via tricycle, van, or rented transport"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to El Nido Airport (ENI) or fly to Puerto Princesa Airport (PPS).",
        "From Puerto Princesa, take a van or bus to El Nido town (around 5–6 hours).",
        "From El Nido town, head north to Nacpan Beach by tricycle, shuttle van, or motorbike."
      ],
      fromHub: [
        "From El Nido town proper: ride a tricycle, van, or private transfer north to Nacpan Beach.",
        "From Puerto Princesa terminal/airport: take a tourist van or bus to El Nido, then connect to Nacpan."
      ],
      fares: [
        { mode: "Flight (Manila–ENI / PPS)", route: "Air travel to Palawan gateway", estimate: "Varies by airline & date" },
        { mode: "Van / Bus", route: "Puerto Princesa to El Nido", estimate: "Approx. ₱500–₱800" },
        { mode: "Tricycle / Van Transfer", route: "El Nido town to Nacpan Beach", estimate: "Approx. ₱300–₱1,500 depending on vehicle & group" }
      ]
    },
    image: "https://i.pinimg.com/736x/a7/f8/31/a7f83152d8b8f2ee175f1081cd818e6a.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/09/0a/2b/090a2b069549bf963b41b24ef0f3f0e6.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/736x/72/6d/b8/726db8ce998ca8271e010a030a22485b.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/84/80/b1/8480b1ba0bba8ec61cc06a92a02e2d4f.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "banul",
    name: "Banul Beach",
    location: "Coron, Palawan",
    region: "Luzon",
    vibe: "Limestone island escape",
    type: "Island beach",
    best: "Scenic day trips",
    intro: "A compact island cove in Coron framed by clear water and karst scenery, typically reached by boat.",
    lat: 11.987,
    lon: 120.205,
    rating: 4.8,
    description: "A well-known small beach in the Coron area, often visited as part of island-hopping trips. Confirm current access, environmental fees, and sea conditions with authorized local operators.",
    highlights: [
      "Clear island waters framed by Coron's scenic coastline",
      "Popular stop on island-hopping routes",
      "Compact shore ideal for short boat-tour stops"
    ],
    bestTime: "January to May usually offers calmer seas for boat transfers around Coron.",
    activities: [
      "Island-hopping boat stops and coastal sightseeing",
      "Swimming where permitted and advised by boat crew",
      "Photography of surrounding waters and limestone formations"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to Busuanga Airport (USU), which serves Coron.",
        "Take a van or shuttle from Busuanga Airport to Coron town proper.",
        "Board a licensed island-hopping boat from Coron port toward Banul Beach."
      ],
      fromHub: [
        "From Busuanga Airport (USU): take an airport van/shuttle to Coron town.",
        "From Coron town port: join a shared boat route or charter an authorized boat transfer."
      ],
      fares: [
        { mode: "Flight (Manila–USU)", route: "Air transfer to Busuanga / Coron", estimate: "Varies by airline & date" },
        { mode: "Airport Van / Shuttle", route: "Busuanga Airport to Coron town", estimate: "Approx. ₱150–₱300" },
        { mode: "Outrigger Boat / Tour Boat", route: "Coron port to island route (shared or charter)", estimate: "Approx. ₱1,200–₱2,500+ per person/boat" }
      ]
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=85",
    gallery: [
      "https://i.pinimg.com/1200x/6f/f4/c7/6ff4c78b7e6d7cb630188ca1969b8c7f.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/77/00/15/7700153d5067a257a2e0107627bba595.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/43/2d/ce/432dcef7d95a2a64df4a8b2466caf56e.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "cloud9",
    name: "Cloud 9",
    location: "General Luna, Siargao",
    region: "Mindanao",
    vibe: "Surf-town energy",
    type: "Surf destination",
    best: "Watching the surf",
    intro: "Siargao's iconic surf break and wooden boardwalk in General Luna, known for swells and coastal energy.",
    lat: 9.806,
    lon: 126.163,
    rating: 4.7,
    description: "A famous surf area with a boardwalk and viewing spots. The main break is not suitable for beginners; seek qualified local instruction and check surf conditions.",
    highlights: [
      "Well-known surf break and raised viewing boardwalk",
      "Active surf-town route along General Luna",
      "Strong coastal swells suited to experienced surfers"
    ],
    bestTime: "August to November typically brings stronger swells, while March to May offers gentler conditions.",
    activities: [
      "Walking the Cloud 9 boardwalk and watching surfers",
      "Surfing with local instructors at appropriate breaks",
      "Coastal rides via tricycle or motorbike around General Luna"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to Siargao Airport (IAO) in Del Carmen (direct or via Cebu).",
        "Take a van or tricycle from Siargao Airport to General Luna.",
        "Ride a tricycle or motorbike from General Luna to the Cloud 9 area."
      ],
      fromHub: [
        "From Siargao Airport (IAO): take a van or tricycle toward General Luna.",
        "From General Luna center: take a tricycle or motorbike along Tourism Road to Cloud 9."
      ],
      fares: [
        { mode: "Flight (Manila–IAO)", route: "Air transfer to Siargao", estimate: "Varies by airline & date" },
        { mode: "Van / Shuttle", route: "Siargao Airport to General Luna", estimate: "Approx. ₱250–₱350" },
        { mode: "Tricycle / Motorbike", route: "Around General Luna to Cloud 9", estimate: "Approx. ₱20–₱100" }
      ]
    },
    image: "https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1100&q=85",
    gallery: [
      "https://i.pinimg.com/1200x/0b/05/15/0b051563a9600b83783af3caa7a29dc7.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/6a/3e/a8/6a3ea8d156b96b0335365b54cd8cdd69.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/43/15/a4/4315a4ab877b130442d9b0afdccf3ab2.jpg?dpr=2&fit=crop&height=500&quality=80&width=700"
    ]
  },
  {
    id: "alona",
    name: "Alona Beach",
    location: "Panglao, Bohol",
    region: "Visayas",
    vibe: "Easygoing and social",
    type: "Beachfront hub",
    best: "Island-hopping base",
    intro: "A lively Panglao shoreline that serves as a convenient jump-off point for Bohol marine excursions.",
    lat: 9.548,
    lon: 123.772,
    rating: 4.5,
    description: "A popular Panglao beach area with places to stay, eat, and arrange marine excursions. Choose responsible operators and respect marine-life viewing rules.",
    highlights: [
      "Accessible beachfront area on Panglao Island",
      "Common jump-off point for island and marine tours",
      "Easy road links from Tagbilaran and Panglao airport"
    ],
    bestTime: "January to May generally provides calmer seas and drier days in Bohol.",
    activities: [
      "Boat departures for nearby islands and marine sanctuaries",
      "Beachfront strolls and relaxed coastal afternoons",
      "Overland transfers across Panglao and Tagbilaran"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to Bohol–Panglao International Airport (TAG).",
        "From the airport, ride a tricycle, van, or taxi to Alona Beach in Panglao.",
        "Alternatively, take a ferry from Cebu to Tagbilaran Port and ride a tricycle, jeepney, or van to Alona."
      ],
      fromHub: [
        "From Bohol–Panglao Airport (TAG): take a tricycle, van, or car transfer to Alona Beach.",
        "From Tagbilaran City / Port: ride a jeepney, van, or tricycle to Panglao and Alona Beach."
      ],
      fares: [
        { mode: "Flight (Manila–TAG)", route: "Air transfer to Bohol–Panglao", estimate: "Varies by airline & date" },
        { mode: "Ferry (Cebu–Tagbilaran)", route: "Sea crossing to Bohol", estimate: "Approx. ₱500–₱900" },
        { mode: "Tricycle / Van / Taxi", route: "Airport or Tagbilaran to Alona Beach", estimate: "Approx. ₱100–₱500" }
      ]
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zMZnBG--dISmlWoqxW8PahOuPfWsOlcevi_N55bAR0-c0GPak64dPDHu&s=10",
    gallery: [
      "https://i.pinimg.com/736x/bd/88/c9/bd88c9a0c183624c8c98dfb6a8136f48.jpg?dpr=2&fit=crop&height=500&quality=80&width=700",
      "https://i.pinimg.com/736x/11/3c/1f/113c1fcc52e23cf9e5aafe38867b7ecc.jpg?auto=format&fit=crop&w=500&q=80",
      "https://www.panglaotourism.com/wp-content/uploads/2026/02/sunset-at-alona-beach.png?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "kota",
    name: "Kota Beach",
    location: "Santa Fe, Bantayan Island, Cebu",
    region: "Visayas",
    vibe: "Soft sand and stillness",
    type: "White-sand shoreline",
    best: "Unhurried afternoons",
    intro: "A peaceful white-sand shoreline in Santa Fe on Bantayan Island, known for quiet coastal views.",
    lat: 11.153,
    lon: 123.802,
    rating: 4.6,
    description: "A much-loved Bantayan shoreline known for pale sand and coastal scenery. Local conditions and available facilities vary by season.",
    highlights: [
      "Pale sand and calm island-town setting in Santa Fe",
      "Quiet coastal stretches for slow mornings and afternoons",
      "Short tricycle ride from Santa Fe port"
    ],
    bestTime: "February to May typically offers drier weather and pleasant sea conditions.",
    activities: [
      "Unhurried walks along the sandbar and shoreline",
      "Sunrise and late-afternoon coastal viewing",
      "Tricycle or bike trips around Santa Fe"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to Mactan–Cebu International Airport (CEB).",
        "Take a bus or van from Cebu City to Hagnaya Port, then ride a ferry to Santa Fe Port on Bantayan Island.",
        "From Santa Fe Port, take a tricycle to Kota Beach."
      ],
      fromHub: [
        "From Cebu City North Bus Terminal / van hubs: ride to Hagnaya Port, then take a ferry to Santa Fe.",
        "From Santa Fe Port: ride a local tricycle directly to Kota Beach."
      ],
      fares: [
        { mode: "Flight (Manila–CEB)", route: "Air transfer to Cebu", estimate: "Varies by airline & date" },
        { mode: "Bus / Van", route: "Cebu City to Hagnaya Port", estimate: "Approx. ₱200–₱300" },
        { mode: "Ferry", route: "Hagnaya Port to Santa Fe Port", estimate: "Approx. ₱250–₱400" },
        { mode: "Tricycle", route: "Santa Fe Port to Kota Beach", estimate: "Approx. ₱20–₱60" }
      ]
    },
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1100&q=85",
    gallery: [
      "https://i.pinimg.com/1200x/04/20/77/042077902b8e4e3d5bceba1012cbaca9.jpg?w=1400&h=-1&s=1?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/9e/30/23/9e3023dba0932c7d31b925f4e114a8a4.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/49/f6/37/49f637d79fe41f54940c7051ccd3797a.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "saud",
    name: "Saud Beach",
    location: "Pagudpud, Ilocos Norte",
    region: "Luzon",
    vibe: "Quiet northern coast",
    type: "Coastal scenery",
    best: "Slow beach days",
    intro: "A scenic cove in northern Ilocos Norte with pale sand, coconut trees, and a relaxed northern vibe.",
    lat: 18.567,
    lon: 120.789,
    rating: 4.6,
    description: "A scenic northern Luzon shoreline with pale sand and a relaxed feel. Sea conditions can change quickly; check local advice before swimming.",
    highlights: [
      "Calm cove setting along Pagudpud's northern coast",
      "Lined with coconut palms and open sea views",
      "Accessible by highway bus from Metro Manila and Central/Northern Luzon"
    ],
    bestTime: "January to May generally brings drier skies and milder northern winds.",
    activities: [
      "Relaxed beach days and coastal walks",
      "Checking local sea advisories before entering the water",
      "Tricycle or van transfers around Pagudpud"
    ],
    travel: {
      fromManila: [
        "Ride a northbound provincial bus from Metro Manila (e.g., Cubao or Pasay) to Pagudpud, Ilocos Norte.",
        "Alternatively, fly from Manila to Laoag International Airport (LAO), then take a bus, van, or tricycle north to Pagudpud.",
        "From Pagudpud town/highway, take a tricycle to Saud Beach."
      ],
      fromHub: [
        "From Laoag City / Laoag Airport (LAO): take a northbound bus, mini-bus, or van to Pagudpud, then ride a tricycle to Saud Beach.",
        "From Pagudpud highway stop: take a local tricycle directly to Saud Beach."
      ],
      fares: [
        { mode: "Provincial Bus", route: "Manila to Pagudpud", estimate: "Approx. ₱900–₱1,300" },
        { mode: "Bus / Van", route: "Laoag to Pagudpud", estimate: "Approx. ₱100–₱200" },
        { mode: "Tricycle", route: "Pagudpud town/highway to Saud Beach", estimate: "Approx. ₱30–₱100" }
      ]
    },
    image: "https://i.pinimg.com/1200x/a3/be/a0/a3bea02de90dfa67906c987def9cab2d.jpg",
    gallery: [
      "https://i.pinimg.com/736x/3b/be/bf/3bbebfc24cb1ac62816382325347c9ef.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/736x/c3/4e/dc/c34edced7e4fc2c49221017cc4f10747.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/5e/6b/9b/5e6b9b0c2cd1e197280352613c434335.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "puerto-white",
    name: "White Beach, Puerto Galera",
    location: "Puerto Galera, Oriental Mindoro",
    region: "Luzon",
    vibe: "Classic seaside getaway",
    type: "Beachfront destination",
    best: "Beach days and local dining",
    intro: "A well-known Mindoro beach getaway reached via a short bus and ferry trip south of Manila.",
    lat: 13.503,
    lon: 120.954,
    rating: 4.6,
    description: "A popular beach destination in Puerto Galera with a lively visitor area. Check current boat schedules, local advisories, beach conditions, and environmental rules before travelling.",
    highlights: [
      "Accessible weekend beach destination from Luzon",
      "Short ferry/boat crossing into Puerto Galera",
      "Active beachfront area with coastal views"
    ],
    bestTime: "January to May typically offers smoother sea crossings in the Verde Island Passage.",
    activities: [
      "Beachfront relaxation and coastal strolls",
      "Boat rides and local water activities when weather permits",
      "Trike or boat transfers from arrival ports"
    ],
    travel: {
      fromManila: [
        "Take a bus from Manila to Batangas Port (around 2–3 hours).",
        "Board a passenger ferry or roll-on/roll-off boat from Batangas Port to Puerto Galera / White Beach.",
        "Take a local tricycle or boat transfer to your spot along White Beach if arriving at another pier."
      ],
      fromHub: [
        "From Batangas Port: ride an accredited ferry or boat to Puerto Galera / White Beach.",
        "From Muelle or Balatero Port in Puerto Galera: take a tricycle or short boat ride to White Beach."
      ],
      fares: [
        { mode: "Bus", route: "Manila to Batangas Port", estimate: "Approx. ₱200–₱350" },
        { mode: "Passenger Ferry / Boat", route: "Batangas Port to Puerto Galera (boat fare only)", estimate: "Approx. ₱350–₱600 (port/environmental fees separate)" },
        { mode: "Tricycle", route: "Puerto Galera pier to White Beach", estimate: "Approx. ₱30–₱150" }
      ]
    },
    image: "https://i.pinimg.com/1200x/6b/bb/19/6bbb19dc5525e992e7aeba682a3fd376.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/94/6b/b5/946bb582faf58735e6fc2439fbefa446.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/736x/97/86/f2/9786f20cb9296dc6c7df56d8efa84cf8.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/0a/c7/7d/0ac77d1f6fad39fe6243f50c8f7a4eaf.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "kalanggaman",
    name: "Kalanggaman Island",
    location: "Palompon, Leyte",
    region: "Visayas",
    vibe: "A sandbar in the sea",
    type: "Island sandbar",
    best: "Day trips and photos",
    intro: "A narrow sandbar island off Palompon, Leyte, surrounded by clear water and open sea views.",
    lat: 11.205,
    lon: 124.376,
    rating: 4.8,
    description: "A small island known for its long sandbar. Visitor numbers and access may be regulated; arrange trips with authorized local operators.",
    highlights: [
      "Distinctive long sandbar surrounded by clear water",
      "Open-sea island setting off Palompon, Leyte",
      "Regulated visitor entry to protect the sandbar"
    ],
    bestTime: "March to June usually offers calmer seas for the open-water boat crossing from Palompon.",
    activities: [
      "Walking along the sandbar and taking coastal photos",
      "Swimming in designated clear-water areas",
      "Boat crossings arranged through Palompon tourism or authorized boats"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to Tacloban Airport (TAC) or Ormoc Airport (OMC).",
        "Take a van or bus to Palompon, Leyte.",
        "Complete registration at the Palompon tourism office and ride an authorized boat to Kalanggaman Island."
      ],
      fromHub: [
        "From Tacloban or Ormoc: ride a van or bus to Palompon town proper.",
        "From Palompon port: take an authorized boat crossing to Kalanggaman Island."
      ],
      fares: [
        { mode: "Flight (Manila–TAC / OMC)", route: "Air transfer to Leyte gateway", estimate: "Varies by airline & date" },
        { mode: "Van / Bus", route: "Tacloban or Ormoc to Palompon", estimate: "Approx. ₱150–₱300" },
        { mode: "Authorized Boat", route: "Palompon to Kalanggaman Island (boat transfer)", estimate: "Approx. ₱4,500–₱6,000+ per boat depending on group size" }
      ]
    },
    image: "https://i.pinimg.com/1200x/a5/36/b5/a536b59a55b2f49cdbfc8883a7a92b0c.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/2a/c0/57/2ac057ed0ad01a0a33b2d92ef539ed39.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/736x/41/e8/47/41e847958832781db73de697c50cfb85.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/09/f9/98/09f9984c54ec3cdc9308b1ad05e75c5b.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "kaputian",
    name: "Kaputian Beach",
    location: "Samal Island, Davao del Norte",
    region: "Mindanao",
    vibe: "Tropical hideaway",
    type: "Island beach",
    best: "Relaxed day trips",
    intro: "A relaxed beach spot on Samal Island near Davao, reached via a short ferry crossing and island road trip.",
    lat: 6.944,
    lon: 125.706,
    rating: 4.4,
    description: "A beach destination on Samal Island with coastal scenery and a relaxed pace. Confirm access, fees, and conditions with local tourism offices.",
    highlights: [
      "Easy ferry access from Davao City to Samal Island",
      "Laid-back island setting suited to day trips",
      "Coastal views along Samal's shoreline"
    ],
    bestTime: "February to May generally brings drier weather and calmer waters in the Davao Gulf.",
    activities: [
      "Relaxed beach day trips and shoreline strolls",
      "Ferry crossing across Davao Gulf",
      "Jeepney, tricycle, or van transfers across Samal Island"
    ],
    travel: {
      fromManila: [
        "Fly from Manila to Francisco Bangoy International Airport (DVO) in Davao City.",
        "Take a taxi, jeepney, or van to a Davao ferry wharf (such as Sasa Wharf or Sta. Ana).",
        "Ride a barge/ferry to Samal Island, then take a jeepney, tricycle, or van to Kaputian."
      ],
      fromHub: [
        "From Davao City wharf (such as Sasa or Sta. Ana): take a ferry or barge across to Samal Island.",
        "From Samal ferry landing: ride a tricycle, jeepney, or van toward Kaputian Beach."
      ],
      fares: [
        { mode: "Flight (Manila–DVO)", route: "Air transfer to Davao City", estimate: "Varies by airline & date" },
        { mode: "Taxi / Jeepney / Van", route: "Davao airport or city to ferry wharf", estimate: "Approx. ₱20–₱350" },
        { mode: "Ferry / Barge", route: "Davao to Samal Island (passenger fare)", estimate: "Approx. ₱20–₱100 per passenger" },
        { mode: "Tricycle / Jeepney", route: "Samal pier to Kaputian Beach", estimate: "Approx. ₱30–₱200+" }
      ]
    },
    image: "https://i.pinimg.com/1200x/fd/b1/01/fdb101a6310f32e7b2ddd43a924f9ecd.jpg?auto=format&fit=crop&w=1100&q=85",
    gallery: [
      "https://i.pinimg.com/1200x/47/1f/3c/471f3cfbf50c662f9dc086949eb9c20a.jpg?auto=format&fit=crop&w=500&q=80",
      "https://i.pinimg.com/1200x/54/77/b7/5477b76a80838d2705175cf49aaa5bc1.jpg?dpr=2&fit=crop&height=500&quality=80&width=700",
      "https://i.pinimg.com/736x/85/e9/a3/85e9a3554222efcb86f4f479873e1969.jpg?auto=format&fit=crop&w=500&q=80"
    ]
  }
];

const STORE = "twe-v1-";
const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(STORE + key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => localStorage.setItem(STORE + key, JSON.stringify(value));

let beaches = read("beaches", seedBeaches);
const seedById = new Map(seedBeaches.map(b => [b.id, b]));
const existingById = new Map(beaches.map(b => [b.id, b]));

// Merge enriched Phase 2 fields from seedBeaches when missing on locally stored items
beaches = [
  ...FEATURED_ORDER.map(id => {
    const base = seedById.get(id);
    const local = existingById.get(id);
    if (!base && !local) return null;
    if (!base) return local;
    if (!local) return base;
    return {
      ...base,
      ...local,
      intro: local.intro || base.intro,
      highlights: local.highlights || base.highlights,
      bestTime: local.bestTime || base.bestTime,
      activities: local.activities || base.activities,
      travel: local.travel || base.travel
    };
  }).filter(Boolean),
  ...beaches.filter(b => !FEATURED_ORDER.includes(b.id))
];

let saved = read("saved", []);
let reviews = read("reviews", {});
let profile = read("profile", null);
let region = "All";
let savedOnly = false;
let activeId = null;
let map = null;
let markers = [];
let pendingReviewPhotoData = null;

const $ = id => document.getElementById(id);

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function escUrl(u) {
  return String(u ?? "").replace(/'/g, "%27");
}

function toast(msg) {
  $("toast").textContent = msg;
  $("toast").classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $("toast").classList.remove("show"), 2300);
}

function allReviews(id) {
  return reviews[id] || [];
}

function approvedReviews(id) {
  return allReviews(id).filter(r => r.approved !== false);
}

function visibleReviewsForUser(id) {
  const currentName = (profile?.name || "").trim().toLowerCase();
  return allReviews(id).filter(r => {
    if (r.approved !== false) return true;
    return currentName && String(r.name || "").trim().toLowerCase() === currentName;
  });
}

function average(b) {
  const r = approvedReviews(b.id);
  return r.length ? r.reduce((a, x) => a + Number(x.rating || 0), 0) / r.length : b.rating;
}

function getVisibleBeaches() {
  const q = $("searchInput").value.trim().toLowerCase();
  return beaches.filter(b =>
    (region === "All" || b.region === region) &&
    (!savedOnly || saved.includes(b.id)) &&
    (!q || [b.name, b.location, b.region, b.vibe].join(" ").toLowerCase().includes(q))
  );
}

function render() {
  const list = getVisibleBeaches();
  $("beachGrid").innerHTML = list.map(b => {
    const count = approvedReviews(b.id).length;
    return `
      <article class="beach-card" data-card="${esc(b.id)}">
        <div class="card-photo" style="background-image:url('${escUrl(b.image)}')">
          <span class="tag">${esc(b.region)}</span>
          <button class="heart ${saved.includes(b.id) ? "saved" : ""}" data-save="${esc(b.id)}" aria-label="Save ${esc(b.name)}">${saved.includes(b.id) ? "♥" : "♡"}</button>
        </div>
        <div class="card-body">
          <h3>${esc(b.name)}</h3>
          <p class="card-location">⌖ ${esc(b.location)}</p>
          <div class="rating">★ <strong>${Number(average(b)).toFixed(1)}</strong> <span class="muted">(${count} ${count === 1 ? "review" : "reviews"})</span></div>
          <div class="card-bottom">
            <span class="vibe">${esc(b.vibe || "Island escape")}</span>
            <button class="link-btn" data-open="${esc(b.id)}">Explore ↗</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  $("emptyState").hidden = !!list.length;
  $("resultCount").textContent = savedOnly
    ? `${list.length} saved destinations`
    : `Showing ${list.length} of ${beaches.length} destinations`;
  $("savedCount").textContent = saved.length;
  updateMap(list);
}

function syncSaveButton(id) {
  const isSaved = saved.includes(id);
  const btn = $("saveDetail");
  if (!btn) return;
  btn.classList.toggle("saved", isSaved);
  btn.setAttribute("aria-pressed", String(isSaved));
  if ($("saveDetailIcon")) $("saveDetailIcon").textContent = isSaved ? "♥" : "♡";
  if ($("saveDetailText")) $("saveDetailText").textContent = isSaved ? "Saved" : "Save destination";
}

function openDestination(id, { updateHash = true } = {}) {
  const b = beaches.find(x => x.id === id);
  if (!b) return;
  activeId = id;

  $("home").hidden = true;
  $("destinationDetailView").hidden = false;

  if (updateHash) {
    try { history.replaceState(null, "", `#destination/${encodeURIComponent(b.id)}`); } catch {}
  }

  $("breadcrumbCurrent").textContent = b.name;
  $("detailImage").style.backgroundImage = `url('${escUrl(b.image)}')`;
  $("detailImage").setAttribute("aria-label", `${b.name} photo`);
  $("detailRegion").textContent = `${b.region} · DESTINATION GUIDE`;
  $("detailTitle").textContent = b.name;
  $("detailLocation").textContent = `⌖ ${b.location}`;
  $("detailIntro").textContent = b.intro || b.vibe || "";

  $("detailDescription").textContent = b.description || "";
  const highlights = Array.isArray(b.highlights) && b.highlights.length ? b.highlights : [b.type || "Coastal shoreline"];
  $("detailHighlights").innerHTML = highlights.map(item => `<li>${esc(item)}</li>`).join("");
  $("detailBestTime").textContent = b.bestTime || b.best || "Check seasonal weather and local conditions before travelling.";
  const activities = Array.isArray(b.activities) && b.activities.length ? b.activities : [b.best || "Beach sightseeing"];
  $("detailActivities").innerHTML = activities.map(act => `<li>${esc(act)}</li>`).join("");

  const travel = b.travel || {};
  const manilaSteps = Array.isArray(travel.fromManila) && travel.fromManila.length
    ? travel.fromManila
    : ["Check flights, buses, or ferries from Manila to the nearest gateway."];
  const hubSteps = Array.isArray(travel.fromHub) && travel.fromHub.length
    ? travel.fromHub
    : ["Use local public transport or accredited transfers from the nearest airport, port, or terminal."];

  $("routeFromManila").innerHTML = manilaSteps.map(step => `<li>${esc(step)}</li>`).join("");
  $("routeFromHub").innerHTML = hubSteps.map(step => `<li>${esc(step)}</li>`).join("");

  const fares = Array.isArray(travel.fares) ? travel.fares : [];
  $("fareBreakdown").innerHTML = fares.length
    ? fares.map(f => `
        <div class="fare-card">
          <strong>${esc(f.mode)}</strong>
          <span class="tiny muted">${esc(f.route)}</span>
          <span class="fare-amount">${esc(f.estimate)}</span>
        </div>
      `).join("")
    : `<p class="tiny muted">Transport fares vary by operator, route, and season.</p>`;

  const photos = Array.isArray(b.gallery) && b.gallery.length ? b.gallery : [b.image].filter(Boolean);
  $("detailGallery").innerHTML = photos.map(src => `<img src="${esc(src)}" alt="${esc(b.name)} view" loading="lazy">`).join("");

  renderReviews(id, $("reviewSort")?.value || "newest");
  syncSaveButton(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeDestination({ targetSection = "destinations" } = {}) {
  if (!activeId && $("destinationDetailView").hidden) return;
  activeId = null;
  $("destinationDetailView").hidden = true;
  $("home").hidden = false;

  if (location.hash.startsWith("#destination/")) {
    try { history.replaceState(null, "", `#${targetSection}`); } catch {}
  }
  if (map) setTimeout(() => map.invalidateSize(), 120);
  const el = $(targetSection);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function renderReviews(id, sortBy = "newest") {
  const b = beaches.find(x => x.id === id);
  const approvedList = approvedReviews(id);
  const list = visibleReviewsForUser(id);

  const sorted = [...list].sort((a, c) => {
    if (sortBy === "highest") return (Number(c.rating || 0) - Number(a.rating || 0)) || (new Date(c.created) - new Date(a.created));
    return new Date(c.created) - new Date(a.created);
  });

  const avg = approvedList.length
    ? (approvedList.reduce((sum, r) => sum + Number(r.rating || 0), 0) / approvedList.length).toFixed(1)
    : (b?.rating ? Number(b.rating).toFixed(1) : "—");

  $("detailRating").innerHTML = `
    <span class="rating">★ <strong>${avg}</strong></span>
    <span class="muted tiny">(${approvedList.length} ${approvedList.length === 1 ? "review" : "reviews"})</span>
  `;

  $("reviewsList").innerHTML = sorted.length
    ? sorted.map(r => {
        const isPending = r.approved === false;
        return `
          <article class="review-item ${isPending ? "pending-review" : ""}">
            <div class="review-meta">
              <div>
                <strong>${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)} · ${esc(r.name)}</strong>
                ${isPending ? `<span class="pending-badge" style="margin-left:8px">Pending admin approval</span>` : ""}
              </div>
              <span class="tiny muted">${r.created ? new Date(r.created).toLocaleDateString("en-PH") : ""}</span>
            </div>
            <p>${esc(r.text)}</p>
            ${r.photo ? `<img class="review-photo" src="${esc(r.photo)}" alt="Photo shared with review" loading="lazy">` : ""}
          </article>
        `;
      }).join("")
    : `<p class="tiny muted">No approved visitor reviews yet. Be the first to share a helpful note.</p>`;
}

function clearReviewPhotoPreview() {
  pendingReviewPhotoData = null;
  if ($("reviewPhoto")) $("reviewPhoto").value = "";
  if ($("reviewPhotoPreview")) $("reviewPhotoPreview").src = "";
  if ($("reviewPhotoName")) $("reviewPhotoName").textContent = "";
  if ($("reviewPhotoPreviewBox")) $("reviewPhotoPreviewBox").hidden = true;
}

function closeModal(id) {
  $(id).hidden = true;
  document.body.style.overflow = "";
}

function toggleSave(id) {
  saved = saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id];
  write("saved", saved);
  render();
  if (activeId === id) syncSaveButton(id);
  toast(saved.includes(id) ? "Destination saved" : "Removed from saved list");
}

function initMap() {
  const loader = $("mapWaveLoader");
  if (!window.L) {
    if (loader) loader.innerHTML = '<span class="loader-label">Map could not load. Please check your connection.</span>';
    return;
  }
  map = L.map("philippinesMap", { scrollWheelZoom: false }).setView([12.3, 122.5], 5);
  const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  let loaderRemoved = false;
  const hideLoader = () => {
    if (loaderRemoved) return;
    loaderRemoved = true;
    if (loader) {
      loader.classList.add("is-hidden");
      setTimeout(() => loader.remove(), 450);
    }
  };
  tiles.once("load", hideLoader);
  setTimeout(hideLoader, 6500);
  updateMap(getVisibleBeaches());
  setTimeout(() => map.invalidateSize(), 150);
}

function updateMap(visible = beaches) {
  if (!map) return;
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  visible.forEach(b => {
    if (!Number.isFinite(Number(b.lat)) || !Number.isFinite(Number(b.lon))) return;
    const icon = L.divIcon({
      className: "",
      html: '<div class="wave-marker"><span>≈</span></div>',
      iconSize: [34, 34],
      iconAnchor: [17, 30],
      popupAnchor: [0, -28]
    });
    const popup = `<button type="button" class="map-popup-photo" data-map-open="${esc(b.id)}" aria-label="Open ${esc(b.name)} details"><img src="${esc(b.image || "")}" alt="${esc(b.name)} beach"></button><div class="map-popup-name">${esc(b.name)}</div>`;
    const m = L.marker([Number(b.lat), Number(b.lon)], { icon }).addTo(map).bindPopup(popup, { minWidth: 170, maxWidth: 190 });
    m.on("popupopen", () => {
      const el = document.querySelector(`[data-map-open="${CSS.escape(String(b.id))}"]`);
      if (el) el.addEventListener("click", () => openDestination(b.id), { once: true });
    });
    m._beachId = b.id;
    markers.push(m);
  });
}

function focusBeachOnMap(id) {
  const b = beaches.find(x => x.id === id);
  if (!b || !map || !Number.isFinite(Number(b.lat)) || !Number.isFinite(Number(b.lon))) return;
  const marker = markers.find(m => m._beachId === id);
  $("map-section").scrollIntoView({ behavior: "smooth", block: "start" });
  map.setView([Number(b.lat), Number(b.lon)], Math.max(map.getZoom(), 9), { animate: true });
  if (marker) setTimeout(() => marker.openPopup(), 350);
}

function navigateToHomeSection(hash) {
  const id = (hash || "#home").replace(/^#/, "");
  if (!$("destinationDetailView").hidden) {
    closeDestination({ targetSection: id || "home" });
  } else {
    const target = $(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }
}

$("beachGrid").addEventListener("click", e => {
  const s = e.target.closest("[data-save]");
  const o = e.target.closest("[data-open]");
  const card = e.target.closest("[data-card]");
  if (s) {
    e.stopPropagation();
    toggleSave(s.dataset.save);
  } else if (o) {
    openDestination(o.dataset.open);
  } else if (card) {
    focusBeachOnMap(card.dataset.card);
  }
});

$("backToExploreBtn").addEventListener("click", () => closeDestination({ targetSection: "destinations" }));
document.querySelector('[data-detail-nav="home"]').addEventListener("click", e => {
  e.preventDefault();
  closeDestination({ targetSection: "home" });
});
document.querySelector('[data-detail-nav="explore"]').addEventListener("click", e => {
  e.preventDefault();
  closeDestination({ targetSection: "destinations" });
});

document.querySelectorAll(".brand, .main-nav a, .hero a[href='#destinations'], .cta a[href='#destinations']").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    if (!$("destinationDetailView").hidden) {
      e.preventDefault();
      navigateToHomeSection(href);
    }
  });
});

$("shareDestinationBtn").addEventListener("click", async () => {
  if (!activeId) return;
  const b = beaches.find(x => x.id === activeId);
  const shareUrl = `${location.origin}${location.pathname}#destination/${encodeURIComponent(activeId)}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: `${b?.name || "Destination"} · The Wave Explorer`, url: shareUrl });
      return;
    } catch (err) {
      if (err && err.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(shareUrl);
    toast("Destination link copied");
  } catch {
    toast(shareUrl);
  }
});

$("reviewSort").addEventListener("change", () => {
  if (activeId) renderReviews(activeId, $("reviewSort").value);
});

$("searchInput").addEventListener("input", render);
document.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
  region = c.dataset.region;
  document.querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === c));
  render();
}));

$("clearFilters").addEventListener("click", () => {
  $("searchInput").value = "";
  region = "All";
  savedOnly = false;
  document.querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x.dataset.region === "All"));
  render();
});

$("savedFilter").addEventListener("click", () => {
  savedOnly = !savedOnly;
  $("savedFilter").innerHTML = `♡ <span>${savedOnly ? "All" : "Saved"}</span> <b>${saved.length}</b>`;
  if (!$("destinationDetailView").hidden) {
    closeDestination({ targetSection: "destinations" });
  } else {
    render();
    $("destinations").scrollIntoView({ behavior: "smooth" });
  }
});

$("saveDetail").addEventListener("click", () => activeId && toggleSave(activeId));

$("reviewPhoto")?.addEventListener("change", () => {
  const file = $("reviewPhoto").files[0];
  if (!file) {
    clearReviewPhotoPreview();
    return;
  }
  if (!file.type.startsWith("image/")) {
    clearReviewPhotoPreview();
    toast("Please choose a valid image file");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    clearReviewPhotoPreview();
    toast("Choose an image under 2 MB");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    pendingReviewPhotoData = reader.result;
    const sizeKb = Math.max(1, Math.round(file.size / 1024));
    if ($("reviewPhotoPreview")) $("reviewPhotoPreview").src = reader.result;
    if ($("reviewPhotoName")) $("reviewPhotoName").textContent = `${file.name} (${sizeKb} KB)`;
    if ($("reviewPhotoPreviewBox")) $("reviewPhotoPreviewBox").hidden = false;
  };
  reader.readAsDataURL(file);
});

$("removeReviewPhotoBtn")?.addEventListener("click", () => {
  clearReviewPhotoPreview();
  toast("Photo removed");
});

$("reviewForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!activeId) return;
  if (!profile) {
    toast("Create a demo profile before posting a review");
    $("accountBackdrop").hidden = false;
    document.body.style.overflow = "hidden";
    return;
  }
  const text = $("reviewText").value.trim();
  if (!text) return;

  const entry = {
    id: "rev-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
    name: profile.name,
    rating: Number($("reviewRating").value),
    text,
    photo: pendingReviewPhotoData || null,
    created: new Date().toISOString(),
    approved: false
  };

  reviews[activeId] = allReviews(activeId).concat(entry);
  try {
    write("reviews", reviews);
  } catch {
    toast("This photo is too large for browser storage. Try a smaller image.");
    return;
  }

  $("reviewForm").reset();
  clearReviewPhotoPreview();
  renderReviews(activeId, $("reviewSort").value);
  toast("Submitted for admin approval");
});

$("budgetDestination").innerHTML = beaches.map(b => `<option value="${esc(b.id)}">${esc(b.name)} — ${esc(b.location)}</option>`).join("");
$("budgetForm").addEventListener("submit", e => {
  e.preventDefault();
  const people = Math.max(1, Math.min(20, Number($("travellers").value) || 1));
  const days = Math.max(1, Math.min(30, Number($("days").value) || 1));
  const food = Math.max(0, Number($("foodCost").value) || 0);
  const activities = Math.max(0, Number($("activityCost").value) || 0);
  const transport = Math.max(0, Number($("transportCost").value) || 0);
  const lodging = 1200 * people * days;
  const total = transport + (food + activities) * people * days + lodging;
  $("budgetResult").innerHTML = `Estimated group total<strong>₱${Math.round(total).toLocaleString("en-PH")}</strong>Approx. ₱${Math.round(total / people).toLocaleString("en-PH")} per traveller · includes a placeholder lodging estimate of ₱1,200/person/night. Excludes flights, fees, and unexpected costs.`;
});

$("accountBtn").addEventListener("click", () => {
  if (profile) {
    if (confirm(`Signed in locally as ${profile.name}. Sign out?`)) {
      profile = null;
      write("profile", null);
      updateAccount();
      if (activeId) renderReviews(activeId, $("reviewSort")?.value || "newest");
    }
  } else {
    $("accountBackdrop").hidden = false;
    document.body.style.overflow = "hidden";
  }
});

$("accountForm").addEventListener("submit", e => {
  e.preventDefault();
  profile = { name: $("accountName").value.trim(), email: $("accountEmail").value.trim() };
  write("profile", profile);
  closeModal("accountBackdrop");
  updateAccount();
  if (activeId) renderReviews(activeId, $("reviewSort")?.value || "newest");
  toast("Demo profile ready");
});

function updateAccount() {
  $("accountBtn").textContent = profile ? profile.name.split(" ")[0] : "Sign in";
}

document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", () => closeModal(b.dataset.close)));
document.querySelectorAll(".modal-backdrop").forEach(bg => bg.addEventListener("click", e => {
  if (e.target === bg) closeModal(bg.id);
}));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-backdrop:not([hidden])").forEach(x => closeModal(x.id));
  }
});

$("menuToggle").addEventListener("click", () => document.querySelector(".main-nav").classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => document.querySelector(".main-nav").classList.remove("open")));

function getPendingReviews() {
  const pending = [];
  beaches.forEach(b => {
    allReviews(b.id).forEach(r => {
      if (r.approved === false) {
        pending.push({ beachId: b.id, beachName: b.name, review: r });
      }
    });
  });
  return pending;
}

function getApprovedReviewsList() {
  const approved = [];
  beaches.forEach(b => {
    allReviews(b.id).forEach(r => {
      if (r.approved !== false) {
        approved.push({ beachId: b.id, beachName: b.name, review: r });
      }
    });
  });
  return approved;
}

function renderAdmin() {
  const pending = getPendingReviews();
  const approved = getApprovedReviewsList();
  const totalReviews = Object.values(reviews).reduce((n, r) => n + r.length, 0);

  $("adminStats").innerHTML = `
    <div class="stat"><strong>${beaches.length}</strong>Destinations</div>
    <div class="stat"><strong>${totalReviews}</strong>Total reviews (${pending.length} pending)</div>
    <div class="stat"><strong>${saved.length}</strong>Saved on this device</div>
  `;

  const pendingHtml = pending.length
    ? `
      <h3 class="admin-subhead">Pending reviews (${pending.length})</h3>
      <div class="admin-list" id="pendingReviewsList">
        ${pending.map(({ beachId, beachName, review }) => `
          <div class="admin-row">
            <div>
              <strong>${esc(beachName)}</strong> · ${"★".repeat(review.rating)} by ${esc(review.name)}
              <span class="admin-status-pill pending">Pending</span>
              <div class="tiny muted">${esc(review.text)}</div>
            </div>
            <div style="display:flex;gap:8px;flex-shrink:0">
              <button type="button" data-approve-beach="${esc(beachId)}" data-approve-id="${esc(review.id)}" style="color:#176a78;font-weight:700">Approve</button>
              <button type="button" data-reject-beach="${esc(beachId)}" data-reject-id="${esc(review.id)}">Remove</button>
            </div>
          </div>
        `).join("")}
      </div>
    `
    : `<p class="tiny muted" style="margin-top:14px">No pending reviews waiting for approval.</p>`;

  const approvedHtml = approved.length
    ? `
      <h3 class="admin-subhead">Approved reviews (${approved.length})</h3>
      <div class="admin-list" id="approvedReviewsList">
        ${approved.map(({ beachId, beachName, review }) => `
          <div class="admin-row">
            <div>
              <strong>${esc(beachName)}</strong> · ${"★".repeat(review.rating)} by ${esc(review.name)}
              <span class="admin-status-pill approved">Approved</span>
              <div class="tiny muted">${esc(review.text)}</div>
            </div>
            <div style="display:flex;gap:8px;flex-shrink:0">
              <button type="button" data-unapprove-beach="${esc(beachId)}" data-unapprove-id="${esc(review.id)}">Move to pending</button>
              <button type="button" data-reject-beach="${esc(beachId)}" data-reject-id="${esc(review.id)}">Remove</button>
            </div>
          </div>
        `).join("")}
      </div>
    `
    : `<p class="tiny muted" style="margin-top:10px">No approved visitor reviews yet.</p>`;

  $("adminBeachList").innerHTML = `
    ${pendingHtml}
    ${approvedHtml}
    <h3 class="admin-subhead">Destination content</h3>
    <div class="admin-list">
      ${beaches.map(b => `
        <div class="admin-row">
          <span>${esc(b.name)} · ${esc(b.region)}</span>
          <button type="button" data-delete="${esc(b.id)}">Remove</button>
        </div>
      `).join("")}
    </div>
  `;
}

function adminOpen() {
  renderAdmin();
  $("adminBackdrop").hidden = false;
  document.body.style.overflow = "hidden";
}

$("addBeachForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("newBeachName").value.trim();
  const location = $("newBeachLocation").value.trim();
  const region = $("newBeachRegion").value;
  const image = $("newBeachImage").value.trim() || "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80";
  const description = $("newBeachDescription").value.trim();

  beaches.push({
    id: "custom-" + Date.now(),
    name,
    location,
    region,
    vibe: "New destination",
    type: "Beach destination",
    best: "Explore responsibly",
    intro: description,
    highlights: [location, `${region} coastal destination`],
    bestTime: "Check local weather advisories before travelling.",
    activities: ["Coastal sightseeing and local transport transfers"],
    travel: {
      fromManila: ["Check available flights, buses, or ferries from Manila to the nearest gateway."],
      fromHub: ["Coordinate local public transport or accredited transfers to the beach."],
      fares: []
    },
    rating: 0,
    description,
    image,
    gallery: [image]
  });

  write("beaches", beaches);
  e.target.reset();
  render();
  renderAdmin();
  toast("Destination added to this browser");
});

$("adminBeachList").addEventListener("click", e => {
  const approveBtn = e.target.closest("[data-approve-id]");
  if (approveBtn) {
    const beachId = approveBtn.dataset.approveBeach;
    const revId = approveBtn.dataset.approveId;
    reviews[beachId] = allReviews(beachId).map(r => r.id === revId ? { ...r, approved: true } : r);
    write("reviews", reviews);
    if (activeId === beachId) renderReviews(beachId, $("reviewSort")?.value || "newest");
    render();
    renderAdmin();
    toast("Review approved");
    return;
  }

  const unapproveBtn = e.target.closest("[data-unapprove-id]");
  if (unapproveBtn) {
    const beachId = unapproveBtn.dataset.unapproveBeach;
    const revId = unapproveBtn.dataset.unapproveId;
    reviews[beachId] = allReviews(beachId).map(r => r.id === revId ? { ...r, approved: false } : r);
    write("reviews", reviews);
    if (activeId === beachId) renderReviews(beachId, $("reviewSort")?.value || "newest");
    render();
    renderAdmin();
    toast("Review moved back to pending");
    return;
  }

  const rejectBtn = e.target.closest("[data-reject-id]");
  if (rejectBtn) {
    const beachId = rejectBtn.dataset.rejectBeach;
    const revId = rejectBtn.dataset.rejectId;
    reviews[beachId] = allReviews(beachId).filter(r => r.id !== revId);
    write("reviews", reviews);
    if (activeId === beachId) renderReviews(beachId, $("reviewSort")?.value || "newest");
    render();
    renderAdmin();
    toast("Pending review removed");
    return;
  }

  const delBtn = e.target.closest("[data-delete]");
  if (!delBtn) return;
  beaches = beaches.filter(x => x.id !== delBtn.dataset.delete);
  write("beaches", beaches);
  if (activeId === delBtn.dataset.delete) closeDestination({ targetSection: "destinations" });
  render();
  renderAdmin();
});

$("openAdminBtn")?.addEventListener("click", adminOpen);

$("year").textContent = new Date().getFullYear();
updateAccount();
initMap();
render();

// Support direct #destination/<id> hash on load or hash change
function syncHashDestination() {
  const match = location.hash.match(/^#destination\/(.+)$/);
  if (match && match[1]) {
    const targetId = decodeURIComponent(match[1]);
    if (beaches.some(b => b.id === targetId)) {
      openDestination(targetId, { updateHash: false });
      return;
    }
  }
  if (!$("destinationDetailView").hidden) {
    closeDestination({ targetSection: "home" });
  }
}
window.addEventListener("hashchange", syncHashDestination);
syncHashDestination();

// Demo admin shortcut: open dashboard with Ctrl+Shift+A.
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") adminOpen();
});

// English / Filipino interface toggle. Destination details stay in English.
const translations = {
  en: {
    navHome: "Home",
    navExplore: "Explore",
    navAbout: "About",
    heroKicker: "THE PHILIPPINES IS CALLING",
    heroLine1: "Chase the tide.",
    heroLine2: "Find your paradise.",
    heroText: "Discover beautiful beaches, local favorites, and unforgettable island experiences across the Philippines.",
    heroCta: "Explore destinations",
    mapEyebrow: "SEE WHERE THE JOURNEY TAKES YOU",
    mapTitle: "Explore the islands",
    mapHelp: "Select a pin to discover a beach.",
    aboutEyebrow: "OUR STORY",
    aboutTitle: "Made for the love of the islands.",
    aboutText: "The Wave Explorer is a Philippine beach discovery guide built to help travelers and local explorers find coastlines, learn about destinations, and plan thoughtful trips. We celebrate local places, encourage responsible travel, and keep improving our directory as destination information is checked."
  },
  fil: {
    navHome: "Tahanan",
    navExplore: "Mag-explore",
    navAbout: "Tungkol",
    heroKicker: "TARA, LAKBAYIN ANG PILIPINAS",
    heroLine1: "Sundan ang alon.",
    heroLine2: "Hanapin ang paraiso mo.",
    heroText: "Tuklasin ang magagandang dalampasigan, mga paboritong lokal na lugar, at di-malilimutang karanasan sa mga isla ng Pilipinas.",
    heroCta: "Tuklasin ang mga destinasyon",
    mapEyebrow: "SUNDAN KUNG SAAN KA DADALHIN NG BIYAHE",
    mapTitle: "Galugarin ang mga isla",
    mapHelp: "Pumili ng marker para makilala ang isang dalampasigan.",
    aboutEyebrow: "ANG AMING KUWENTO",
    aboutTitle: "Para sa pagmamahal sa mga isla.",
    aboutText: "Ang The Wave Explorer ay gabay sa pagtuklas ng mga dalampasigan sa Pilipinas. Tinutulungan nito ang mga biyahero at lokal na explorer na makahanap ng mga baybayin, makilala ang mga destinasyon, at magplano ng makabuluhang biyahe. Ipinagdiriwang natin ang mga lokal na lugar at isinusulong ang responsableng paglalakbay habang patuloy na sinusuri at pinauunlad ang aming direktoryo."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === "fil" ? "fil" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-lang]").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("twe-language", lang); } catch {}
}

document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
let initialLanguage = "en";
try { initialLanguage = localStorage.getItem("twe-language") || "en"; } catch {}
setLanguage(initialLanguage);