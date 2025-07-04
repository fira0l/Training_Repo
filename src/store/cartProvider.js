
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemHandler = (item) => {
        // Logic to add item to cart
    };

    const removeItemHandler = (id) => {
        // Logic to remove item from cart 
    }

    const clearCartHandler = () => {
        // Logic to clear the cart
    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;