import { ISbStoriesParams, StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home({ params }: any) {
  let slug = params.slug ? params.slug.join("/") : "home";
  const { data } = await fetchData(slug);

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData(slug: string) {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams, { cache: "no-store" });
}
