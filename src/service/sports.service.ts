import { SportsType, SportType } from "../types/sports.types";

const sports: SportsType = {
  teaser:
    "Suspendisse potenti. Donec sed turpis ac ipsum ultricies aliquet non eget massa. Pellentesque pellentesque dictum enim, et gravida orci ullamcorper at. Suspendisse id bibendum nisi. Vestibulum pellentesque nisi in nunc commodo efficitur. Curabitur feugiat nulla sem, non ornare felis eleifend ac. Donec ac luctus massa. Donec hendrerit scelerisque massa sit amet imperdiet. In vitae eleifend ante. Sed luctus sem in nisl ullamcorper, at sodales turpis ultrices. Aenean eu felis eget dolor volutpat finibus quis sit amet augue.",
  items: [
    {
      id: 1,
      name: "Soccer",
      location: "London",
      shortDescription: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl enim, faucibus ac mattis sit amet, ullamcorper at arcu. Donec pulvinar hendrerit tristique. Integer pharetra, arcu id vehicula lacinia, odio lectus pellentesque quam, sed finibus mauris massa at lectus.",
    },
    {
      id: 2,
      name: "Basketball",
      location: "Madrid",
      shortDescription: "Nunc tempus",
      description: "Donec ac luctus massa. Donec hendrerit scelerisque massa sit amet imperdiet. In vitae eleifend ante. Sed luctus sem in nisl ullamcorper, at sodales turpis ultrices. Aenean eu felis eget dolor volutpat finibus quis sit amet augue.",
    },
    {
      id: 3,
      name: "Snooker",
      location: "Paris",
      shortDescription: "Quisque diam leo",
      description: "Praesent varius felis vel malesuada pulvinar. Maecenas sed sem quis odio ultrices consequat. Nullam ut diam ac sem tempor molestie in sit amet nibh. Mauris ultricies eros eu sodales malesuada. Donec tempor magna ut ex elementum pellentesque. Praesent convallis, nunc ac ultricies volutpat, ligula ligula vehicula orci, quis mollis lectus urna sit amet sapien.",
    },
    {
      id: 4,
      name: "Volleyball",
      location: "Berlin",
      shortDescription: "Suspendisse tincidunt",
      description: "Maecenas id vestibulum risus, id accumsan libero. Vestibulum mollis blandit venenatis. Nam lorem augue, ullamcorper eu tortor suscipit, porttitor sodales neque. Vivamus in lobortis ligula. Donec convallis aliquet dolor, vitae maximus massa aliquam sed. Quisque diam leo, interdum quis neque et, condimentum malesuada felis.",
    },
  ],
};

export const getSports = async (): Promise<SportsType> => sports;
export const getSportById = async (id: SportType["id"]) =>
  sports.items.find((s) => s.id === id);
