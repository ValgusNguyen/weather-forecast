"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Search from "./components/SearchBar";

export default function Home() {
  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData);
  };

  return (
    <div className={styles.container}>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}
