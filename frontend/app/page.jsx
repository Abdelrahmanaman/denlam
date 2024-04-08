import { Explore } from "@/components/hero/Features";
import { Hero } from "@/components/hero/Hero";
const getHeroSection = async (url) => {
  try {
    const response = await fetch(url || "http:localhost:1337/api/home-page?populate=deep");
    if (!response.ok) throw new Error("Could not retrieve data");
    return await response.json();
  } catch (err) {
    console.log(err.message);
    throw new Error("Could not retrieve data, Server Error");
  }
};
export default async function Home() {
  const data = await getHeroSection();
  const homePageData = data.data.home_content;
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <Hero homePageData={homePageData} />
        </div>
        <Explore homePageData={homePageData} />
      </section>
    </>
  );
}
