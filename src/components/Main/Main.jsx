import React from "react"
import './Main.css'
// import { Story } from "./Story/Story"
import { Article } from "./Article/Article"
import { Aside } from "../Aside/Aside"

export const Main = () => {
  return (
    <>
      <container className='main-container'>
        <Aside />
        <main class="main">

          {/* <Story /> */}

          <Article />

          <div class="pagination">
          <button class="button-pagination button-back">
            <a href="#back">
              &lt;
            </a>
          </button>
          <button class="button-pagination button-1">
            <a href="#1">
              1
            </a>
          </button>
          <button class="button-pagination button-2">
            <a href="#2">
              2
            </a>
          </button>
          <button class="button-pagination button-3">
            <a href="#3">
              3
            </a>
          </button>
          <button class="button-pagination button-go">
            <a href="#next">
              &gt;
            </a>
          </button>
          </div>
        </main>
      </container>
    </>
  )
}