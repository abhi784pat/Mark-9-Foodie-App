import "./styles.css";
import arr from "./database.js";
import { useState } from "react";

export default function App() {
  const foods = Object.keys(arr);
  const [food, setfood] = useState("Indian");
  console.log(food);
  function onClickHandle(item) {
    setfood(item);
    console.log(food);
  }

  return (
    <div className="App">
      <header>
        <h1>Foodie App</h1>
        <h2>Check Out Some Of These Awesome Dishes</h2>
      </header>
      <main>
        {foods.map((item) => {
          return (
            <span>
              <button
                key={item}
                className="btn"
                onClick={() => onClickHandle(item)}
              >
                {item}
              </button>
            </span>
          );
        })}

        <div className="container">
          {arr[food].map((fooditem) => {
            return (
              <div className="dish">
                <div>
                  <img
                    src={`./images/${fooditem.img}`}
                    alt="fooditem"
                    className="img"
                  />
                </div>
                <h3>Name:{" " + fooditem.dish}</h3>
                <p>Rating:{" " + fooditem.Rating}</p>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <p>© | 2021 | Abhishek Patel</p>
        <ul class="footer-list">
          <li>
            <a
              class="links"
              href="https://github.com/abhi784pat"
              target="_blank"
            >
              <img src="images/github.png" alt="github" />
            </a>
          </li>
          <li>
            <a
              class="links"
              href="https://www.linkedin.com/in/abhishek-patel-7180321b9/"
              target="_blank"
            >
              <img src="images/LI-Logo.png" alt="linkedin" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
