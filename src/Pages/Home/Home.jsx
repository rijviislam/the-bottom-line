import AboutUs from "../../Components/AboutUs";
import Hero from "../../Components/Hero";
import NewsLetter from "../../Components/NewsLetter";
import RecentBlogs from "../../Components/RecentBlogs";
import WriteForUs from "../../Components/WriteForUs";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentBlogs />
      <NewsLetter />
      <WriteForUs />
      <AboutUs />
    </>
  );
}
