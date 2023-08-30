import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import MealsContext from "../context/MealsContext";
import IMealsData from "../interfaces/IMealsData";
import Api from "../service/Api";
import { useState, useEffect } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function Root() {

   const [mealData, setMealData] = useState<IMealsData>({
      categories: [],
      areas: [],
      ingredients: [],
      trending: []
   })

   useEffect(() => {
      localStorage.setItem('bookmarks', JSON.stringify([]))
   }, [])


   useEffect(() => {
      Api.getData().then((data) => setMealData(data))
   }, [])

   return (
      <>
         <MealsContext.Provider value={mealData}>
            {/* <Topbar /> */}
            <Header />
            <Nav />

            <Outlet />

            <Footer />
            <ScrollRestoration />
         </MealsContext.Provider>
      </>
   )
}