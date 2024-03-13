import { Outlet, useNavigation } from "react-router-dom"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { Fragment } from "react"
import { Loading } from "../components"


const HomeLayout = () => {

  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';

  return (
    <Fragment>
      <Header/>
      <Navbar/>
      {isPageLoading ? 
      <Loading/>
        :
      <section className='align-element py-20'>
        <Outlet/>
      </section>
      }
      
    </Fragment>
  )
}

export default HomeLayout