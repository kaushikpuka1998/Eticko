import React, {useState} from "react";
import styles from "./Cart.module.scss";
import {cartProducts} from "../../pages/cartProducts.tsx";

const Cart: React.FC = () => {

    const [quantities, setQuantities] = useState(cartProducts.map(p => p.quantity));

    const handleQuantityChange = (index: number, delta: number) => {
        setQuantities(q =>
            q.map((qty, i) => i === index ? Math.max(1, qty + delta) : qty)
        );
    };
    const cartSubtotal = quantities.reduce(
        (sum, qty, idx) => sum + qty * cartProducts[idx].price, 0
    );
    return (
        <div className={styles.cartContainer}>
            {/* Cart Header */}
            <div className={styles.cartHeader}>
                <div className={styles.cartHeaderItems}>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>
            </div>

            {cartProducts.map((product, idx) => (
                <div className={styles.cartItem} key={idx}>
                    <div className={styles.imageWithName}>
                        <img
                            className={styles.productImage}
                            src={product.imageUrl}
                            alt="productImage"
                        />
                        <span className={styles.productTitle}>{product.title}</span>
                    </div>


                    <span className={styles.priceLeft}>{product.price}</span>
                    <div className={styles.quantityBox}>
                        <div className={styles.quantityInner}>

                            <span>{quantities[idx].toString().padStart(2, "0")}</span>
                            <div className={styles.quantityButtons}>
                                <div
                                    className={styles.arrowUp}
                                    onClick={() => handleQuantityChange(idx, 1)}
                                >
                                    <img src="src/assets/images/up_arrow.png" alt="Up" className={styles.icon}/>
                                </div>
                                <div
                                    className={styles.arrowDown}
                                    onClick={() => handleQuantityChange(idx, -1)}
                                >
                                    <img src="src/assets/images/up_arrow.png" alt="Down" className={styles.icon}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className={styles.priceRight}>{(quantities[idx] * product.price).toFixed(2)}</span>
                    {/* Add this line */}
                </div>
            ))}

            {/* Buttons */}
            <div className={styles.actionButtons}>
                <button className={styles.outlineBtn}>Return To Shop</button>
                <button className={styles.outlineBtn}>Update Cart</button>
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomSection}>
                <div className={styles.couponContainer}>
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className={styles.couponInput}
                    />
                    <button className={styles.applyBtn}>Apply Coupon</button>
                </div>

                <div className={styles.totalBox}>
                    <span className={styles.cartTitle}>Cart Total</span>
                    <div className={styles.subTotal}>
                        <span>Subtotal:</span>
                        <span>{cartSubtotal}</span>
                    </div>
                    <div className={styles.shipping}>
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className={styles.total}>
                        <span>Total:</span>
                        <span>{cartSubtotal}</span>
                    </div>
                    <button className={styles.checkoutBtn}>Proceed to checkout</button>
                    <div className={styles.line}></div>
                    <div className={styles.line2}></div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
