function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">

            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png"/>
                <div>
                    <h3 className='"text-uppercase'>React sneakers</h3>
                    <p>Магазин лучшых кросовок</p>
                </div>
            </div>

            <div>
                <ul className="d-flex">
                    <li onClick={props.onClickCart} className="mr-30 cu-p">
                        <img width={18} height={18} src="/img/cart.svg"/>
                        <span> 1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg"/>
                    </li>
                </ul>
            </div>

        </header>
    );
}

export default Header;