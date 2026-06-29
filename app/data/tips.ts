export type Tip = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: string;
};

export const tips: Tip[] = [
  {
    id: "lange-jan",
    title: "Långe Jan",
    description: "Ölands södra udde och ett måste att uppleva, året runt.",
    imageSrc: "/assets/nature/lighthouse_01.jpeg", // CHANGE IMAGE
    imageAlt: "Långe Jan vid solnedgång",
    icon: "♜",
  },
  {
    id: "eketorp",
    title: "Eketorps borg",
    description: "Spännande ringborg med fantastisk utsikt över landskapet.",
    imageSrc: "/assets/nature/nature_05.jpeg", // CHANGE IMAGE
    imageAlt: "Eketorps borg på södra Öland",
    icon: "♞",
  },
  {
    id: "kalkbrottet",
    title: "Kalkbrottet",
    description:
      "Ett turkost smycke mitt i stenen. Perfekt för ett dopp på sommaren.",
    imageSrc: "/assets/nature/nature_04.jpeg", // CHANGE IMAGE
    imageAlt: "Kalkbrottet på södra Öland",
    icon: "▲",
  },
  {
    id: "glasscafeet",
    title: "Glasscaféet",
    description: "Missa inte det populära glasscaféet i Degerhamn.",
    imageSrc: "/assets/nature/nature_03.jpeg", // CHANGE IMAGE
    imageAlt: "Glass i våffla",
    icon: "✺",
  },
  {
    id: "hyra-cykel",
    title: "Hyra cykel",
    description:
      "Utforska Öland på två hjul med frihet, natur och små äventyr.",
    imageSrc: "/assets/nature/nature_02.jpeg", // CHANGE IMAGE
    imageAlt: "Cykel vid havet",
    icon: "●",
  },
  {
    id: "fagelskadning",
    title: "Fågelskådning",
    description:
      "Södra Öland är ett paradis för fåglar. Ta med kikaren och njut.",
    imageSrc: "/assets/nature/nature_01.jpeg", // CHANGE IMAGE
    imageAlt: "Kikare vid fågelskådningsplats",
    icon: "◆",
  },
];
