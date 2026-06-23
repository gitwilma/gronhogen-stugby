export type Cottage = {
  id: string;
  name: string;
  beds: number;
  imageSrc: string;
  imageAlt: string;
  airbnbUrl: string;
};

export const cottages: Cottage[] = [
  {
    id: "stuga-1",
    name: "Stuga 1",
    beds: 4,
    imageSrc: "/images/cottages/stuga-1.jpg",
    imageAlt: "Stuga 1 på Grönhögens Stugby",
    airbnbUrl: "https://www.airbnb.se/",
  },
  {
    id: "stuga-2",
    name: "Stuga 2",
    beds: 4,
    imageSrc: "/images/cottages/stuga-2.jpg",
    imageAlt: "Stuga 2 på Grönhögens Stugby",
    airbnbUrl: "https://www.airbnb.se/",
  },
];
