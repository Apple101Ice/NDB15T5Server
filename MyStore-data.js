const products = [
  {
    id: 1,
    category: "Watches",
    description:
      "Stay fashionable with Fossil Chronograph Black Men Watch CH2885 from Fossil This Chronograph watch has round Black dial with a dial diatemeter of 44 millimeters.This watch has 2 year manufacturer warranty.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/61lEGRZwG1L._UL1000_.jpg",
      "https://m.media-amazon.com/images/I/51txjV94S5L._UL1000_.jpg",
      "https://m.media-amazon.com/images/I/51URVM7okSL._UL1000_.jpg",
      "https://m.media-amazon.com/images/I/714mA6kSe4S._UL1500_.jpg"
    ],
    name: "Fossil Chronograph Black Men Watch CH2885",
    price: 5845
  },
  {
    id: 2,
    category: "Watches",
    description: "Round watch with orange contrasts featuring black textured dial, luminous round markers, and date window 50 mm stainless steel case with synthetic-sapphire dial window.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/81npHameUSL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51ltpPQrHnL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/613YbVVXVhL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/61hu-jwI5SL._UL1500_.jpg"
    ],
    name: "Invicta Men's 20305 Speedway Stainless Steel Watch with Black Band",
    price: 9410
  },
  {
    id: 3,
    category: "Watches",
    description: "The Aristocracy watch is a luxurious and exclusive timepiece crafted by the finest Indian artisans.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/81eoHVjqoOL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/816sqsnMQ5L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81RKXUyyK2L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81p2a8b0AQL._UL1500_.jpg"
    ],
    name: "SWADESI STUFF Aristocracy Dual Time Skeleton Dial Premium Automatic Watch for Men",
    price: 7499
  },
  {
    id: 4,
    category: "Watches",
    description: "Get this stylish and trendy watch for you. Enhance your festive look with this.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/61unvalTpAL._UL1000_.jpg",
      "https://m.media-amazon.com/images/I/51d-0XHMiXL._UL1000_.jpg",
      "https://m.media-amazon.com/images/I/51NuCWaimRL._UL1000_.jpg",
      "https://m.media-amazon.com/images/I/61iJRKZTerL._UL1500_.jpg"
    ],
    name: "Fossil Analog Blue Dial Men's Watch-BQ2311",
    price: 4145
  },
  {
    id: 5,
    category: "Watches",
    description: "Invicta Women's 12527 Pro-Diver 18k Gold Ion-Plated Stainless Steel and Champagne Dial Bracelet Watch",
    imgLinks: [
      "https://m.media-amazon.com/images/I/718rMa4EzEL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81wceZ7m0IL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71rLHlBLulL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/91suSJNsu7S._UL1500_.jpg"
    ],
    name: "Invicta Pro-Diver Analog Yellow Dial Women's Watch - 12527",
    price: 9726
  },
  {
    id: 6,
    category: "Watches",
    description: "Invicta Pro-Diver Analog Blue Dial Men's Watch",
    imgLinks: [
      "https://m.media-amazon.com/images/I/71CCb9OUqmL._UL1410_.jpg",
      "https://m.media-amazon.com/images/I/61TIS1BXX+L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Q221EVH0L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/91d7rs5sGtS._UL1500_.jpg"
    ],
    name: "Invicta Pro-Diver Analog Blue Dial Men's Watch-6983",
    price: 13246
  },
  {
    id: 7,
    category: "Watches",
    description: "Many facets one you- True to Giordano's brand identity each style stands for all kinds of personalities.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/71NtaGuCB8L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/716FV3mXpPL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71SaqcGL9vL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51ZZaPZ9jhL._UL1500_.jpg"
    ],
    name: "Giordano Analogue Off White Dial Women's Watch",
    price: 3003
  },
  {
    id: 8,
    category: "Watches",
    description: "Exhibiting an eye-catching navy dial, this women's analog watch from Giordano is sure to be a great inclusion to your collection of watches.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/61+GZhZ3sKL._UL1440_.jpg",
      "https://m.media-amazon.com/images/I/61yM16VlshL._UL1440_.jpg",
      "https://m.media-amazon.com/images/I/51veGsZJB2L._UL1440_.jpg",
      "https://m.media-amazon.com/images/I/71gisyHA1SL._UL1440_.jpg"
    ],
    name: "Giordano Blue Dial Analogue Women's Watch",
    price: 2599
  },
  {
    id: 9,
    category: "Watches",
    description: "Upgrade your accessory collection with this analog watch from the house of Daniel Klein.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/71LkgHnyHBL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/61boscf8jBL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/41aUc13VlkL.jpg",
      "https://m.media-amazon.com/images/I/41vYokqqVSL.jpg"
    ],
    name: "Daniel Klein Analog Blue Dial Women's Watch",
    price: 3125
  },
  {
    id: 10,
    category: "Watches",
    description: "True to its name, Calvin Klein Minimal watches offers minimalistic designs with classic round ceramic cases for women. ",
    imgLinks: [
      "https://m.media-amazon.com/images/I/51TJ1d7N1hL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/61wpl1762KL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/61DfDfdrHSL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/31SAYU13uNL.jpg"
    ],
    name: "Calvin Klein Linked Bracelet 32MM Ceramic Analog Pink Dial Women's Watch-25200077",
    price: 18628
  },
  {
    id: 11,
    category: "Sunglasses",
    description: "Full Rim Wayfarer Branded Latest and Stylish Sunglasses | Polarized and 100% UV Protected | Men & Women.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/411s0UWkwwL._UL1325_.jpg",
      "https://m.media-amazon.com/images/I/41r8xqRLaIL._UL1325_.jpg",
      "https://m.media-amazon.com/images/I/41gn6Ir-dCL.jpg",
      "https://m.media-amazon.com/images/I/81jP0XL-VaL._UL1500_.jpg"
    ],
    name: "Vincent Chase Eyewear By Lenskart",
    price: 792
  },
  {
    id: 12,
    category: "Sunglasses",
    description: "Polarized Sunglasses For Men For Driving Sports and Adventure.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/51iw5Al6dtL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51x3Ogac8DL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51cR7WFyY2L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71r-5TIkCyL._UL1500_.jpg"
    ],
    name: "Eyewearlabs",
    price: 1599
  },
  {
    id: 13,
    category: "Sunglasses",
    description: "Polarized Aviator Sunglasses For Men And Women I For Driving, Sports and Adventure Activities.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/51wh7A8ICkL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51i49ed+KoL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51MilCLr7RL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81d7JHOZF0L._UL1500_.jpg"
    ],
    name: "Eyewearlabs",
    price: 1699
  },
  {
    id: 14,
    category: "Sunglasses",
    description: "Elegant sunglasses to enhance your look!! Beautiful and glamorous sunglasses from Fastrack give you a confident persona and unforgettable charm.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/61W3Red6wCL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51kipb8QVlL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/61S1LF-0-8L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/614lQ3LzM4L._UL1500_.jpg"
    ],
    name: "Fastrack UV Protected Sport Men's Sunglasses",
    price: 1819
  },
  {
    id: 15,
    category: "Sunglasses",
    description: "Fastrack's Square Sunglasses with Black Frame Blue Lens are an ideal accessory for your wardrobe.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/715MLEG-3+L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Z4kW7VWBL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ZKpufPODL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71nxNcoQGgL._UL1500_.jpg"
    ],
    name: "Fastrack Men Square Sunglasses Black Frame Blue Lens",
    price: 1954
  },
  {
    id: 16,
    category: "Belts",
    description: "HIDE & SKIN provides its customers with the best quality products. ",
    imgLinks: [
      "https://m.media-amazon.com/images/I/71EBB1J1jIL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/91wGraVoejL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81o5oQjCUkL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Vj-vyZkOL._UL1500_.jpg"
    ],
    name: "HIDE & SKIN Top Grain Genuine Leather Handmade",
    price: 563
  },
  {
    id: 17,
    category: "Belts",
    description: "No More Holes- CONTACTS auto lock buckle belt provides unique adjustments for an extremely comfortable fit.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/41Hp5XjXqZL.jpg",
      "https://m.media-amazon.com/images/I/61XXxIUphwS._UL1443_.jpg",
      "https://m.media-amazon.com/images/I/51u1t78BrrL._UL1191_.jpg",
      "https://m.media-amazon.com/images/I/81T1lU5NXEL._UL1399_.jpg"
    ],
    name: "HIDE & SKIN Top Grain Genuine Leather Handmade",
    price: 699
  },
  {
    id: 18,
    category: "Belts",
    description: "We at HIDE & SKIN are a team of leather aficionados determined to make high-quality premium leather products that are hand-made with passion.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/81Ss2JFB9EL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/712hrLWIWcL._UL1333_.jpg",
      "https://m.media-amazon.com/images/I/71LAFz0Vv0L._UL1333_.jpg",
      "https://m.media-amazon.com/images/I/81Ll0hSDxwL._UL1500_.jpg"
    ],
    name: "HIDE & SKIN Full Grain Genuine Leather Belt for Men",
    price: 553
  },
  {
    id: 19,
    category: "Handbags",
    description: "Top zipper closure, with 2 side zipper pockets design and elegant tassels decoration, fashionable and practical handbags for women, perfect for shopping, dating, travel and business.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/71Raw8VUk5L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71D7aOcFvXL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81rRwB4TQkL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/71t8l1y3n4L._UL1500_.jpg"
    ],
    name: "INOVERA (LABEL) Women Handbags Shoulder Hobo Bag Purse With Long Strap",
    price: 1249
  },
  {
    id: 20,
    category: "Handbags",
    description: "At MAMMON, our handbags,tote,shoulder bags hobo and clutches are thoughtfully designed keeping in mind both fashion and functionality.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/81MbYkUeGXL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81UgV40SQXL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81rT7VqgzfL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81hZunP2YZL._UL1500_.jpg"
    ],
    name: "Mammon women's multicoloured stylish handbag for ladies and girls",
    price: 369
  },
  {
    id: 21,
    category: "Handbags",
    description: "Lavie Ushawu hand bag is a must have for all the hustler women out there. It is versatile, lightweight and available in multiple trendy colors.",
    imgLinks: [
      "https://m.media-amazon.com/images/I/819ARdIuEvS._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/91GYsCsY28L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81HX8PumCyS._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81cCnzyz39S._UL1500_.jpg"
    ],
    name: "Lavie Women's Ushawu Satchel Bag | Ladies Purse Handbag",
    price: 1110
  }
];

module.exports.products = products;
