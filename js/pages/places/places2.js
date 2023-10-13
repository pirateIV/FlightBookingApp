const details = "Flights · Hotels · Resorts";
const imgPath = "../public/img/cards/";
const hotelImagesPath = "../public/img/hotels/";
const bookingImgPath = "../public/img/cards/card/"

export const places = [
  {
    img: imgPath + "istanbul.png",
    place: "Istanbul",
    country: "Turkey",
    placeDetails:
      "Istanbul is known for its rich history, stunning architecture, and vibrant culture that seamlessly blends Eastern and Western influences. Popular tourist attractions include the Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar, and the Bosphorus Strait.",
    hotels: [
      {
        name: "Four Seasons Hotel Istanbul at Sultanahmet",
        stars: 5,
        qualities: [
          "Luxury accommodations",
          "Central location",
          "Historic architecture",
        ],
        features: [
          "Spa and wellness center",
          "Fine dining restaurants",
          "Concierge service",
        ],
        description:
          "Set in a century-old neoclassical prison, this luxury hotel is a minute's walk from the Hagia Sophia museum and a 9-minute walk from the iconic Blue Mosque.",
        address:
          "Tevkifhane Sokak No. 1, Sultanahmet-Eminönü, Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "fourseasons.com/istanbul/",
      },
      {
        name: "Raffles Istanbul",
        stars: 5,
        qualities: [
          "Panoramic views",
          "Contemporary design",
          "High-end amenities",
        ],
        features: ["Rooftop pool", "Fine dining options", "Business center"],
        description:
          "Located in the heart of the city, this upscale hotel offers breathtaking views of the Bosphorus and the Prince Islands.",
        address:
          "Levazim Mahallesi, Visnezade Mah. Acisu Sok. No:19, Beşiktaş, Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "raffles.com/istanbul/",
      },
      {
        name: "Shangri-La Bosphorus, Istanbul",
        stars: 5,
        qualities: [
          "Bosphorus views",
          "Elegant interiors",
          "Top-notch service",
        ],
        features: [
          "Indoor pool",
          "Spa and wellness facilities",
          "Executive lounge",
        ],
        description:
          "Overlooking the scenic Bosphorus, this luxurious hotel offers a tranquil escape with its elegant rooms and world-class amenities.",
        address:
          "Sinanpasa Mah. Hayrettin Iskelesi Sok. No. 1, Beşiktaş, Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "shangri-la.com/istanbul/shangrila/",
      },
      {
        name: "The Ritz-Carlton, Istanbul",
        stars: 5,
        qualities: [
          "Waterfront location",
          "Opulent décor",
          "Personalized service",
        ],
        features: [
          "Turkish bath",
          "Gourmet dining options",
          "Meeting and event spaces",
        ],
        description:
          "Situated along the Bosphorus, this lavish hotel offers stunning views and a blend of modern luxury and traditional Turkish elements.",
        address:
          "Suzer Plaza, Askerocagi Caddesi No: 15, Sisli, Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "ritzcarlton.com/istanbul",
      },
      {
        name: "InterContinental Istanbul",
        stars: 5,
        qualities: [
          "City views",
          "Contemporary rooms",
          "Convenient access to attractions",
        ],
        features: [
          "Fitness center",
          "Multiple dining options",
          "Business services",
        ],
        description:
          "With its prime location in Taksim Square, this sophisticated hotel offers easy access to Istanbul's main attractions and a luxurious retreat in the bustling city center.",
        address:
          "Tahsin Duru Sk. No: 2, 34437 Taksim, Beyoğlu, Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "ihg.com/intercontinental/hotels/us/en/istanbul/istha/hoteldetail",
      },
      {
        name: "Legacy Ottoman Hotel",
        stars: 4,
        qualities: [
          "Historic charm",
          "Elegant rooms",
          "Convenient central location",
        ],
        features: ["Indoor pool", "Traditional Turkish bath", "Fitness center"],
        description:
          "Housed in a renovated 19th-century building, this hotel offers a blend of Ottoman architecture and modern comfort, providing a memorable stay in the heart of Istanbul.",
        address:
          "Hobyar Mahallesi, Hamidiye Cd. No:16, 34112 Sirkeci/Fatih/Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "legacyottomanhotel.com/",
      },
      {
        name: "The Galata Istanbul Hotel - MGallery",
        stars: 4,
        qualities: [
          "Boutique luxury",
          "Stylish interiors",
          "Panoramic rooftop terrace",
        ],
        features: [
          "Gourmet restaurant",
          "Wellness center",
          "Meeting facilities",
        ],
        description:
          "Nestled in the vibrant Beyoglu district, this boutique hotel offers a sophisticated experience with its stylish rooms and stunning views of the Golden Horn.",
        address:
          "Sahkulu Mah. Galata Kulesi Sk. No:2, 34420 Beyoğlu/Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "galatahotel.com/",
      },
      {
        name: "Ottoman Elegance Hotel",
        stars: 3,
        qualities: [
          "Charming boutique hotel",
          "Comfortable rooms",
          "Friendly staff",
        ],
        features: ["Free Wi-Fi", "Airport shuttle", "Concierge service"],
        description:
          "Located in the heart of the Old City, this boutique hotel offers cozy accommodations and easy access to major attractions like the Grand Bazaar and the Topkapi Palace.",
        address:
          "Binbirdirek, Klodfarer Cad. No 29, 34122 Fatih/Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "ottomanelegancehotel.com/",
      },
      {
        name: "Sura Hagia Sophia Hotel",
        stars: 3,
        qualities: [
          "Modern amenities",
          "Convenient location",
          "Rooftop terrace with city views",
        ],
        features: [
          "Spa facilities",
          "On-site restaurant",
          "24-hour front desk",
        ],
        description:
          "Situated in Sultanahmet, this contemporary hotel provides a comfortable stay and is within walking distance of the Hagia Sophia and the Blue Mosque.",
        address:
          "Divanyolu Cd. Alemdar Mah., Ticarethane Sk. No:10, 34122 Fatih/Istanbul, Turkey",
        images: hotelImagesPath + "",
        link: "surahotels.com",
      },
    ],
  },
  {
    img: imgPath + "sydney.png",
    place: "Sydney",
    country: "Australia",
    placeDetails:
      "Sydney is famous for its iconic landmarks such as the Sydney Opera House and the Sydney Harbour Bridge. Tourists often visit Bondi Beach, Taronga Zoo, and the Royal Botanic Garden.",
  },
  {
    img: imgPath + "baiku.png",
    place: "Baku",
    country: "Azerbaijan",
    placeDetails:
      "Baku is renowned for its blend of modern architecture and historic buildings, along with its rich cultural heritage. Key attractions include the Flame Towers, the Old City (Icherisheher), Heydar Aliyev Center, and the Baku Boulevard.",
  },
  {
    img: imgPath + "malè.png",
    place: "Malé",
    country: "Maldives",
    placeDetails:
      "Malé is the vibrant capital of the Maldives, known for its beautiful beaches, clear waters, and vibrant underwater life. Tourists often enjoy water activities such as snorkeling, diving, and exploring the local markets and restaurants.",
  },
  {
    img: imgPath + "paris.png",
    place: "Paris",
    country: "France",
    placeDetails:
      "Paris is celebrated for its romantic ambiance, art, fashion, and exquisite cuisine. Iconic attractions include the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and the Champs-Élysées.",
  },
  {
    img: imgPath + "new york.png",
    place: "New York",
    country: "USA",
    placeDetails:
      "New York is a bustling metropolis renowned for its diverse culture, iconic skyline, and world-class entertainment. Popular attractions include Times Square, Central Park, Statue of Liberty, and the Metropolitan Museum of Art.",
  },
  {
    img: imgPath + "london.png",
    place: "London",
    country: "UK",
    placeDetails:
      "London is famous for its historical landmarks, royal palaces, museums, and thriving theater scene. Must-visit sites include the Tower of London, Buckingham Palace, the British Museum, and the London Eye.",
  },
  {
    img: imgPath + "tokyo.png",
    place: "Tokyo",
    country: "Japan",
    placeDetails:
      "Tokyo is a dynamic city known for its modern technology, traditional culture, and delicious cuisine. Popular attractions include the Tokyo Skytree, Senso-ji Temple, Meiji Shrine, and the bustling Shibuya Crossing.",
  },
  {
    img: imgPath + "dubai.png",
    place: "Dubai",
    country: "UAE",
    placeDetails:
      "Dubai is recognized for its futuristic architecture, luxury shopping, and lively nightlife scene. Key attractions include the Burj Khalifa, Dubai Mall, Palm Jumeirah, and the traditional Gold and Spice Souks.",
  },
];

export const bookings = [
  {
    backgroundPath: bookingImgPath + 'flights.png',
    heading: 'Flights',
    about: 'Search Flights & Places Hire to our most popular destinations',
    buttonMessage: 'Show Flights',
  },
  {
    backgroundPath: bookingImgPath + 'hotels.png',
    heading: 'Hotels',
    about: 'Search Flights & Places Hire to our most popular destinations',
    buttonMessage: 'Show Hotels',
  },
]
