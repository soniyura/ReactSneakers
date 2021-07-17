import React from 'react';
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    //получение данных с mockapi
    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    fetch('https://60f2dfc76d44f300177887d3.mockapi.io/items')
        .then((res) => {
        return res.json();
    })
        .then(json => {
            setItems(json);
    });

  return (
    <div className="wrapper clear">
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
        <Header onClickCart = {() => setCartOpened(true) } />

      <div className="content  p-40">
        <div className="d-flex align-center justify-between m-40 ">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
          <div className="d-flex flex-wrap">
              {items.map((obj) =>
                  <Card
                      title={obj.title}
                      price={obj.price}
                      imageUrl={obj.imageUrl}
                      onFavorite={() => console.log('Добавили в закладки')}
                      onPlus = {() => console.log('Нажали на плюс')}
                  />
              )}
          </div>
      </div>
    </div>
  );
}

export default App;
