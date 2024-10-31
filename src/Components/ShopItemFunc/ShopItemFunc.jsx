import classes from './ShopItemFunc.module.css'
export const ShopItemFunc = ({item}) => {
    const {brand, title, description, descriptionFull, price, currency} = item
    return <div className="main-content">
        <h2 className={classes ['brand']}>{brand}</h2>
        <h1 className={classes ['title']}>{title}</h1>
        <h3 className={classes ['description']}>{description}</h3>
        <div className={classes ['descriptionFull']}>{descriptionFull}</div>
        <div className={classes ['highlight-window mobile']}>
        <div className={classes ['highlight-overlay']}></div>
        </div>
        <div className={classes ['divider']}>{currency}</div>
        <div className={classes ['purchase-info']}>
            <div className={classes ['price']}>{price}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
}