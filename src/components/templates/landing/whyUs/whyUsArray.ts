import img1 from "@/assets/whyus/whyus-1.svg";
import img2 from "@/assets/whyus/whyus-2.svg";
import img3 from "@/assets/whyus/whyus-3.svg";
import { v4 } from "uuid";

interface CardInterface {
  key: string;
  title: string;
  tags: string[];
  text: string[];
  imageUrl: string;
}

const cardsInfo: CardInterface[] = [
  {
    key: v4(),
    title: "Embedded solution",
    tags: ["GATEWAY"],
    text: [
      "One integration to empower your access to currencies and payment methods to process your payment transactions",
    ],
    imageUrl: img1,
  },
  {
    key: v4(),
    title: "Plug and play solution",
    tags: ["PAYMENT LINK", "VPOS"],
    text: ["Hassle free payment management web interface"],
    imageUrl: img2,
  },
  {
    key: v4(),
    title: "Hardwareless onsite payments",
    tags: ["VPOS"],
    text: [
      "Friendly and simple app",
      "Scalable solution, from a single VPOS to a bespoke cluster of point of sales",
      "Device friendly but not required.",
    ],
    imageUrl: img3,
  },
];

export default cardsInfo;
