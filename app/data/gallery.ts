export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  variant: "small" | "large" | "stackedTop" | "stackedBottom" | "tall";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "lighthouse-sunset",
    src: "/assets/nature/lighthouse_02.jpeg",
    alt: "Långe Jan i solnedgång",
    variant: "small",
  },
  {
    id: "bird-sky",
    src: "/assets/nature/nature_01.jpeg", 
    alt: "Fågel som flyger mot blå himmel",
    variant: "small",
  },
  {
    id: "lighthouse",
    src: "/assets/nature/lighthouse_01.jpeg",
    alt: "Långe Jan med dramatisk himmel",
    variant: "large",
  },
  {
    id: "bird-sea",
    src: "/assets/nature/nature_02.jpeg",
    alt: "Fågel som flyger över havet",
    variant: "stackedTop",
  },
  {
    id: "landscape-water",
    src: "/assets/nature/nature_03.jpeg",
    alt: "Öländskt landskap med vatten vid solnedgång",
    variant: "stackedBottom",
  },
  {
    id: "bird-post",
    src: "/assets/nature/nature_04.jpeg",
    alt: "Fågel som står på en stolpe",
    variant: "tall",
  },
];
