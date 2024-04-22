import { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom"
import HeaderLayouts from "~/layouts/HeaderLayouts"
import DefaultLayout from "~/layouts/DefaultLayout"
import LoadingPage from "~/layouts/LoadingPage"
import FooterLayouts from '~/layouts/FooterLayouts';
import ButtonScrollTop from '~/layouts/ButtonScrollTop';
import { getProfileActions } from '~/redux/actions/profileActions';
import routes from "~/routes"
import { routes as configRoutes } from "~/config"
import { getAllCategoryActions } from "./redux/actions/categoryActions";
import Admin from "./pages/Admin";


function App() {

  const profile = useSelector(state => state.profile.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if(profile === null){
      dispatch(getProfileActions())
      dispatch(getAllCategoryActions())
    }
  }, [])

  return (
    <div className={`client__container bg-main-hp-color`}>
      <HeaderLayouts />
      <Routes>
        {
          routes.map((route) => {
            const Component = route.component
            return <Route path={route.to} key={route.to} element={
              <Suspense fallback={<LoadingPage />}>
                <DefaultLayout route={route.to}>
                  <Component />
                </DefaultLayout>
              </Suspense>
            } />
          })
        }
        <Route path={configRoutes.admin + "/*"} element={<Admin />} />
      </Routes>
      <FooterLayouts />
      <ButtonScrollTop />
    </div>
  );
}

export default App;
