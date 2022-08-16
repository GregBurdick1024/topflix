import React, { useState, useEffect } from "react"
import FilmsCarosel from "../Carosel/FilmsCarosel"
import styles from "./home.module.css"
import { Layout, Input } from "antd"
//import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { initializeUpcoming, initializePopular } from "../reducers/filmReducer"

const { Search } = Input
const { Content } = Layout


const HomePage = () => {

  const dispatch = useDispatch()
  
  const upcoming = useSelector(({ films }) => films.upcoming)
  const popular = useSelector(({ films }) => films.popular)

  useEffect(() => {

    dispatch(initializePopular())
    dispatch(initializeUpcoming())

  }, [])

  // const handleSearch = async (value) => {
  //   const searchFilm = await filmService.searchFilm(value)
  //   setSearchResults(searchFilm.results)

  // }

  return (
    <Content>
      <div className="container">
        <Search
          placeholder="Search for film"
          // onSearch={(value) => handleSearch(value)}
          className={styles.searchBar}
        />
        <div className={styles.listContainer}>
          <h3 className={styles.title}>What's Popular</h3>
          <FilmsCarosel films={popular} />
          <h3 className={styles.title}>Upcoming</h3>
          <FilmsCarosel films={upcoming} />
        </div>
      </div>
    </Content>
  )
}

export default HomePage
