export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  variant: "small" | "large" | "stackedTop" | "stackedBottom" | "tall";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "lighthouse-sunset",
    src: "/images/gallery/lighthouse-sunset.jpg",
    alt: "Långe Jan i solnedgång",
    variant: "small",
  },
  {
    id: "bird-sky",
    src: "/images/gallery/bird-sky.jpg",
    alt: "Fågel som flyger mot blå himmel",
    variant: "small",
  },
  {
    id: "lighthouse",
    src: "/images/gallery/lighthouse.jpg",
    alt: "Långe Jan med dramatisk himmel",
    variant: "large",
  },
  {
    id: "bird-sea",
    src: "/images/gallery/bird-sea.jpg",
    alt: "Fågel som flyger över havet",
    variant: "stackedTop",
  },
  {
    id: "landscape-water",
    src: "/images/gallery/landscape-water.jpg",
    alt: "Öländskt landskap med vatten vid solnedgång",
    variant: "stackedBottom",
  },
  {
    id: "bird-post",
    src: "/images/gallery/bird-post.jpg",
    alt: "Fågel som står på en stolpe",
    variant: "tall",
  },
];
