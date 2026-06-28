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
    imageSrc: "/images/tips/lange-jan.jpg",
    imageAlt: "Långe Jan vid solnedgång",
    icon: "♜",
  },
  {
    id: "eketorp",
    title: "Eketorps borg",
    description: "Spännande ringborg med fantastisk utsikt över landskapet.",
    imageSrc: "/images/tips/eketorp.jpg",
    imageAlt: "Eketorps borg på södra Öland",
    icon: "♞",
  },
  {
    id: "kalkbrottet",
    title: "Kalkbrottet",
    description:
      "Ett turkost smycke mitt i stenen. Perfekt för ett dopp på sommaren.",
    imageSrc: "/images/tips/kalkbrottet.jpg",
    imageAlt: "Kalkbrottet på södra Öland",
    icon: "▲",
  },
  {
    id: "glasscafeet",
    title: "Glasscaféet",
    description: "Missa inte det populära glasscaféet i Degerhamn.",
    imageSrc: "/images/tips/glasscafeet.jpg",
    imageAlt: "Glass i våffla",
    icon: "✺",
  },
  {
    id: "hyra-cykel",
    title: "Hyra cykel",
    description:
      "Utforska Öland på två hjul med frihet, natur och små äventyr.",
    imageSrc: "/images/tips/hyra-cykel.jpg",
    imageAlt: "Cykel vid havet",
    icon: "●",
  },
  {
    id: "fagelskadning",
    title: "Fågelskådning",
    description:
      "Södra Öland är ett paradis för fåglar. Ta med kikaren och njut.",
    imageSrc: "/images/tips/fagelskadning.jpg",
    imageAlt: "Kikare vid fågelskådningsplats",
    icon: "◆",
  },
];
