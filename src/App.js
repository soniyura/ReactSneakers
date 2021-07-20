import React from 'react';
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    //получение данных с mockapi
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    // useEffect проверяется что бы на сервер отправлялся только один запрос
    React.useEffect(() => {
        // получение json и вытащить и него инфу
        fetch('https://60f2dfc76d44f300177887d3.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then(json => {
                setItems(json);
            });
    }, []);

    // добавление товаров в корзину
    const onAddToCart = (obj) => {
        setCartItems(prev => [ ...prev, obj]);
    };
    console.log(cartItems);

  return (
      // отображение и скрытие корзины
    <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
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
              {items.map((item) =>
                  <Card
                      title={item.title}
                      price={item.price}
                      imageUrl={item.imageUrl}
                      onFavorite={() => console.log('Добавили в закладки')}
                      onPlus = {(obj) => onAddToCart(obj)}
                  />
              )}
          </div>
      </div>
    </div>
  );
}

export default App;
