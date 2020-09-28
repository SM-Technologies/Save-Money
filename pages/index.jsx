import React from "react";
import Head from "next/head";
import Link from "next/link";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1>hello world</h1>
      <Link href="#">
        <a>hello button</a>
      </Link>
    </>
  );
}
