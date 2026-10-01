import earbuds from "../assets/images/earbuds.jpg";
import earbuds1 from "../assets/images/earbuds1.jpg";
import earbuds2 from "../assets/images/earbuds2.jpg";
import earbuds3 from "../assets/images/earbuds3.jpg";

import neckband from "../assets/images/neckband.jpg";
import neckband1 from "../assets/images/neckband1.jpg";
import neckband2 from "../assets/images/neckband2.jpg";
import neckband4 from "../assets/images/neckband4.jpg";

import smartwatch from "../assets/images/smartwatch.jpg";
import smartwatch1 from "../assets/images/smartwatch1.jpg";
import smartwatch2 from "../assets/images/smartwatch2.jpg";
import smartwatch3 from "../assets/images/smartwatch3.jpg";

import speaker from "../assets/images/speaker.jpg";
import speaker1 from "../assets/images/speaker1.jpg";
import speaker2 from "../assets/images/speaker2.jpg";
import speaker3 from "../assets/images/speaker3.jpg";


const products = [
  // ==================== EARBUDS ====================

  {
    id: 1,
    name: "boAt Airdopes 141",
    category: "Earbuds",
    price: 1299,
    oldPrice: 2990,
    rating: 4.5,
    images: [
      earbuds,
      earbuds1,
      earbuds2,
      earbuds3,
    ],
    description:
      "Wireless earbuds with powerful bass and long battery life.",
  },

  {
    id: 2,
    name: "boAt Airdopes 161",
    category: "Earbuds",
    price: 1499,
    oldPrice: 2999,
    rating: 4.4,
    images: [
      earbuds1,
      earbuds2,
      earbuds3,
      earbuds,
    ],
    description:
      "Comfortable wireless earbuds for everyday listening.",
  },

  {
    id: 3,
    name: "boAt Airdopes 170",
    category: "Earbuds",
    price: 1699,
    oldPrice: 3499,
    rating: 4.6,
    images: [
      earbuds2,
      earbuds3,
      earbuds,
      earbuds1,
    ],
    description:
      "Stylish earbuds with immersive sound.",
  },

  {
    id: 4,
    name: "boAt Airdopes Pro",
    category: "Earbuds",
    price: 1999,
    oldPrice: 3999,
    rating: 4.7,
    images: [
      earbuds3,
      earbuds,
      earbuds1,
      earbuds2,
    ],
    description:
      "Premium earbuds with enhanced audio.",
  },


  // ==================== SMARTWATCH ====================

  {
    id: 5,
    name: "boAt Wave Smartwatch",
    category: "Smartwatch",
    price: 1999,
    oldPrice: 3999,
    rating: 4.4,
    images: [
      smartwatch,
      smartwatch1,
      smartwatch2,
      smartwatch3,
    ],
    description:
      "Smartwatch with fitness tracking and stylish display.",
  },

  {
    id: 6,
    name: "boAt Storm Call",
    category: "Smartwatch",
    price: 2299,
    oldPrice: 4499,
    rating: 4.5,
    images: [
      smartwatch1,
      smartwatch2,
      smartwatch3,
      smartwatch,
    ],
    description:
      "Feature-rich smartwatch with health tracking.",
  },

  {
    id: 7,
    name: "boAt Ultima Watch",
    category: "Smartwatch",
    price: 2999,
    oldPrice: 4999,
    rating: 4.6,
    images: [
      smartwatch2,
      smartwatch3,
      smartwatch,
      smartwatch1,
    ],
    description:
      "Premium smartwatch with a large display.",
  },

  {
    id: 8,
    name: "boAt Lunar Smartwatch",
    category: "Smartwatch",
    price: 2499,
    oldPrice: 4499,
    rating: 4.5,
    images: [
      smartwatch3,
      smartwatch,
      smartwatch1,
      smartwatch2,
    ],
    description:
      "Stylish smartwatch for fitness and everyday use.",
  },


  // ==================== NECKBAND ====================

  {
    id: 9,
    name: "boAt Rockerz 255",
    category: "Neckband",
    price: 1299,
    oldPrice: 2499,
    rating: 4.3,
    images: [
      neckband,
      neckband1,
      neckband2,
      neckband4,
    ],
    description:
      "Wireless neckband with powerful bass.",
  },

  {
    id: 10,
    name: "boAt Rockerz 330",
    category: "Neckband",
    price: 1499,
    oldPrice: 2999,
    rating: 4.4,
    images: [
      neckband1,
      neckband2,
      neckband4,
      neckband,
    ],
    description:
      "Flexible neckband for music and calls.",
  },

  {
    id: 11,
    name: "boAt Rockerz 333",
    category: "Neckband",
    price: 1699,
    oldPrice: 3299,
    rating: 4.5,
    images: [
      neckband2,
      neckband4,
      neckband,
      neckband1,
    ],
    description:
      "Premium wireless neckband with long battery life.",
  },

  {
    id: 12,
    name: "boAt Rockerz Pro",
    category: "Neckband",
    price: 1899,
    oldPrice: 3499,
    rating: 4.6,
    images: [
      neckband4,
      neckband,
      neckband1,
      neckband2,
    ],
    description:
      "Powerful wireless neckband with immersive audio.",
  },


  // ==================== SPEAKERS ====================

  {
    id: 13,
    name: "boAt Stone 350",
    category: "Speaker",
    price: 1499,
    oldPrice: 2999,
    rating: 4.4,
    images: [
      speaker,
      speaker1,
      speaker2,
      speaker3,
    ],
    description:
      "Portable Bluetooth speaker with powerful sound.",
  },

  {
    id: 14,
    name: "boAt Stone 352",
    category: "Speaker",
    price: 1799,
    oldPrice: 3499,
    rating: 4.5,
    images: [
      speaker1,
      speaker2,
      speaker3,
      speaker,
    ],
    description:
      "Compact speaker with rich bass.",
  },

  {
    id: 15,
    name: "boAt Stone 620",
    category: "Speaker",
    price: 2499,
    oldPrice: 4999,
    rating: 4.6,
    images: [
      speaker2,
      speaker3,
      speaker,
      speaker1,
    ],
    description:
      "Powerful Bluetooth speaker for indoor and outdoor use.",
  },

  {
    id: 16,
    name: "boAt Stone Pro",
    category: "Speaker",
    price: 2999,
    oldPrice: 5499,
    rating: 4.7,
    images: [
      speaker3,
      speaker,
      speaker1,
      speaker2,
    ],
    description:
      "Premium portable speaker with powerful audio.",
  },
];

export default products;