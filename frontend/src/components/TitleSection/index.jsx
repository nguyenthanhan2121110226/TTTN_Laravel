import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



function TitleSection({ title = "", subTitle = "", to = "" }) {

  const themeMode = useSelector(state => state.theme.mode)


  return (
    <div className="flex justify-between items-center w-full">
      <h1 className={`text-[2.5rem] sm:text-[2rem] ${themeMode === "dark" ? "text-second-dark-text-color" : "text-main-light-text-color"} uppercase font-[600] flex items-center`}>
        <span className="mr-3">{subTitle}</span>
        <span className="text-main-text-color">{title}</span>
      </h1>
      {
        to && (
          <Link to={to} className="btn btn-link text-[1.5rem] text-main-dark-text-color btn-md">Tất cả</Link>
        )
      }
    </div>
  )
}

export default TitleSection