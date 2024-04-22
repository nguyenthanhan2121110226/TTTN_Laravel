// import AOS from "aos";
// import "aos/dist/aos.css";

import { useEffect } from "react"
import LineArt from "~/components/LineArt"
import { endpoints } from "~/config"
import Banner from "./components/Banner"
import BestProduct from "./components/BestProduct"
import Brand from "./components/Brand"
import Category from "./components/Category"
import FirstProductCategory from "./components/FirstProductCategory"
import Hero from "./components/Hero"
import HotProducts from "./components/HotProducts"
import NewProducts from "./components/NewProducts"
import Posts from "./components/Posts"
import SecondProductCategory from "./components/SecondProductCategory"


function HomePage() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage w-full">
      <Hero />
      <section className="mt-[6rem] md:mt-[2.4rem] px-[2.4rem] md:px-[1.5rem]">
        <Category />
      </section>
      <section className="mt-[6rem] md:mt-[2.4rem] px-[2.4rem] md:px-[1.5rem]">
        <NewProducts />
      </section>
      <section className="mt-[6rem] md:mt-[2.4rem] px-[2.4rem] md:px-[1.5rem]">
        <HotProducts />
      </section>
      <section className="mt-[6rem] md:mt-[2.4rem]">
        <Banner />
      </section>
      <section className="mt-[6rem] md:mt-[2.4rem] px-[2.4rem] md:px-[1.5rem]">
        <FirstProductCategory />
      </section>
      <section className="mt-[6rem] md:mt-[2.4rem] mb-[20rem] md:mb-[7rem]">
        <BestProduct />
      </section>
      <section className="px-[2.4rem] md:px-[1.5rem]">
        <SecondProductCategory />
      </section>
      <section className="mt-[6rem] md:mt-[2.4rem] px-[2.4rem] md:px-[1.5rem]">
        <Brand />
      </section>
      <div className="my-[8rem] md:my-[4rem]">
        <LineArt />
      </div>
      <section className="my-[6rem] md:my-[2.5rem] px-[2.4rem] md:px-[1.5rem]">
        <Posts />
      </section>
    </div >
  )
}

export default HomePage