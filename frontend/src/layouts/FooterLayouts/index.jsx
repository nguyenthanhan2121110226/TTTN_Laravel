import FooterFirstCol from "./FooterFirstCol"
import FooterLastCol from "./FooterLastCol"
import FooterSecondCol from "./FooterSecondCol"
import FooterThirdCol from "./FooterThirdCol"


function FooterLayouts() {
  return (
    <footer className="bg-second-dark-bg-color py-[2.4rem] px-[60px]">
      <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full md:col-span-1 lg:col-span-2">
          <FooterFirstCol />
        </div>
        <div className="w-full">
          <FooterSecondCol />
        </div>
        <div className="w-full">
          <FooterThirdCol />
        </div>
        <div className="w-full md:col-span-1 lg:col-span-2">
          <FooterLastCol />
        </div>
      </div>
      <div className="h-[1px] bg-main-dark-text-color mt-[5rem] mb-[2rem]" />
      <p className="text-[1.2rem] text-[#bbb]">Copy right by Nguyễn Tuấn Trường</p>
    </footer>
  )
}

export default FooterLayouts