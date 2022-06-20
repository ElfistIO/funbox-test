import { Card } from "./Components/card";

function App() {
  const mokProducts = [
    {
      id: 1,
      filling: "с фуа-гра",
      portions: 10,
      gifts: "мышь в подарок",
      weight: 0.5,
      footer: "Печень утки разварная с артишоками.",
      disabled: false,
    },
    {
      id: 2,
      filling: "с рыбой",
      portions: 40,
      gifts: "мыши в подарок",
      weight: 2,
      footer: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      disabled: false,
    },
    {
      id: 3,
      filling: "с курой",
      portions: 100,
      gifts: "мышей в подарок",
      weight: 5,
      footer: "Филе из цыплят с трюфелями в бульоне.",
      disabled: true,
    },
  ];

  return (
    <div className="container">
      <div className="App">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <ul className="products">
          {mokProducts.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </ul>
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export default App;
