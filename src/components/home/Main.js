import React from 'react'
import salad from '../../images/greek salad.jpg'
import food from '../../images/bruchetta.svg'
import food1 from '../../images/lemon dessert.jpg'
import basket from '../../images/Basket.svg'

const menus = [
  {
    title: "Greek Salad",
    price: "$10.00",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    img: salad,
  },
  {
    title: "Bruchetta",
    price: "$6.09",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      img: food,
  },
  {
    title: "Lemon Desert",
    price: "$6.00",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      img: food1,
  },
];


const Main = () => {
  return (
    <div className='main'>

        <section id="top">
            <h1>This Week's Specials!</h1>
            <a href=''>Online Menu</a>
        </section>

        <section id="menus">

        {menus.map((menu, id) => {
          return (
            <div key={id} className="menu">

              <img src={menu.img} />

              <div className="detail">

                <p id='p3'>{menu.title}</p>
                <p id='p4'>{menu.price}</p>

              </div>

              <p id="p5">{menu.description}</p>

              <a href=''>Order a delivery <img src={basket} /></a>

            </div>
          )
        }
        )}
        
        </section>
    </div>
  )
}

export {Main}