import useCartStore from "../stateStores/cartStore";

export function showCartIcon(items) {
    if (items.length) {
        useCartStore.setState({showCart: true})
    } else {
        useCartStore.setState({showCart: false})
    }
}