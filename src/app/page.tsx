'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Search from './components/Search-bar'



export default function Home() {

  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData)
  }

  return (
      <div className= {styles.container}>
        {/* <Search onSearchChange={handleOnSearchChange} /> */}
      </div>
  )
}
