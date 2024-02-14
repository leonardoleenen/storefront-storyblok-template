"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/bloks/page/page";
import Teaser from "@/bloks/teaser/teaser";
import Grid from "@/bloks/grid/grid";
import Feature from "@/bloks/feature/feature";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_KEY,
  apiOptions: {
    region: "us",
  },
  use: [apiPlugin],
  components,
});

type StoryblokProviderProps = React.HTMLAttributes<HTMLDivElement>;

export default function StoryblokProvider({ children }: StoryblokProviderProps) {
  return children;
}
