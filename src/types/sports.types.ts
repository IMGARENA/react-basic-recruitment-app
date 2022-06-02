export type SportsType = {
  teaser: string;
  items: SportType[];
};

export type SportType = {
  id: number;
  name: string;
  location: string;
  shortDescription: string;
  description: string;
};
