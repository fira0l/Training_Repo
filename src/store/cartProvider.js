

import { useReducer } from "react";
import CartContext from "./cart-context";

 const defaultCartState = {
        items: [],
        totalAmount: 0
    }

 const cartReducer = (state, action) => {
        if (action.type === 'ADD_ITEM') {
            // const updatedItems = state.items.concat(action.item);
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
         }
        
        else if (action.type === 'REMOVE_ITEM') {
            const updatedItems = state.items.filter(item => item.id !== action.id);
            const updatedTotalAmount = state.totalAmount - state.items.find(item => item.id === action.id).price;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        } else if (action.type === 'CLEAR_CART') {
            return defaultCartState;
        }

        return defaultCartState
    }

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        // Logic to add item to cart
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    };

    const removeItemHandler = (id) => {
        // Logic to remove item from cart 
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        });
    }

    const clearCartHandler = () => {
        // Logic to clear the cart
        dispatchCartAction({
            type: 'CLEAR_CART'
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;