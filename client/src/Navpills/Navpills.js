import React, { Component } from 'react'
import pooh from './pooh.jpg'
import turtle from './turtle.png'
import "./Navpills.css"

const Navpills = props => 

  <ul className="nav nav-pills nav-justified">
    <li role="presentation"
      onClick={() => props.handlePageChange("World")}
      className={props.currentPage === "World" ? "active" : ""}
    >
      <a>World</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Markets")}
      className={props.currentPage === "Markets" ? "active" : ""}
    >
      <a>Markets</a>
    </li>
    
    <li>
      <img src={turtle} height="80" width="80" />
    </li>
    
    <li role="presentation"
      onClick={() => props.handlePageChange("Dots")}
      className={props.currentPage === "Dots" ? "active" : ""}
    >
      <a>Dots</a>
    </li>
    <li role="presentation"
      onClick={() => props.handlePageChange("News")}
      className={props.currentPage === "News" ? "active" : ""}
    >
      <a>News</a>
    </li>
  </ul>;

export default Navpills;
