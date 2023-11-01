import { useState } from "react"

export const nav = [
  {
    text: "home",
    path: "/",
  },
  // {
  //   text: "nightclub",
  //   path: "/nightclub",
  // },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "nightclub",
    path: "/nightclub",
  },
  
  {
    text: "contact",
    path: "/contact",
  },
]
export const featured = [
  {
    cover: "../images/hero/partyimg.jpg",
   
  },
  {
    cover: "../images/hero/partyimg.jpg",

  },
  {
    cover: "../images/hero/partyimg.jpg",

  },
  {
    cover: "../images/hero/partyimg.jpg",

  },
  {
    cover: "../images/hero/partyimg.jpg",

  },
]
export const list = [
  {
    id: 1,
    cover: "../images/list/pizzaimg.jpg",
    name: "Buffet",
    location: "5698 Zirak Road, NewYork",
    
  },
  {
    id: 2,
    cover: "../images/list/family.webp",
    name: "Family Time",
    location: "5698 Zirak Road, NewYork",
   
  },
  {
    id: 3,
    cover: "../images/list/dinner.jpg",
    name: "Dinner",
   
  },
  {
    id: 4,
    cover: "../images/list/pizzaimg.jpg",

    name: "Breakfast",
    location: "5698 Zirak Road, NewYork",

   
  },
  {
    id: 5,
    cover: "../images/list/pizzaimg.jpg",
    name: "Buffet",
    location: "5698 Zirak Road, NewYork",
  },
  {
    id: 6,
    cover: "../images/list/pizzaimg.jpg",
    name: "Buffet",
    location: "5698 Zirak Road, NewYork",
  },
]

export const location = [
  {
    id: 1,
   
    cover: "./images/location/djimg.jpg",
    name: "DJ Concerts",

  },
  {
    id: 2,
    cover: "./images/location/djimg.jpg",

    name: "Speed Dating",

  },
  {
    id: 3,
    cover: "./images/location/djimg.jpg",

    name: "Private Parties",

  },
  {
    id: 4,
    cover: "./images/location/djimg.jpg",

   
    name: "Friday Night",

  },
  {
    id: 5,
    cover: "./images/location/djimg.jpg",

    name: "Friday Night",


  },
  {
    id: 6,
    cover: "./images/location/djimg.jpg",

   
    name: "Friday Night",

  },
]
export const team = [
  {
    cover: "../images/customer/team-1.jpg",

    name: "Markus Humariste's Stand-up-show",

    address: "Liverpool, Canada",
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "51",
    cover: "../images/customer/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "38",
    cover: "../images/customer/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
]


 
    
  
export const footer = [
  {
    title: "Important Links",
    text: [ { list: "About Page" }, { list: "Contact" }, { list: "Blog" }, { list: "Contact Page" }, { list: "term & Condition" }],
  },
 
]
