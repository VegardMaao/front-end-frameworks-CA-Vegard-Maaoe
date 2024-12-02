export function sortByReviews(a, b){
    if (a.reviews.length > b.reviews.length || a.rating > b.rating) {
        return -1;
    }
    if (a.reviews.length < b.reviews.length || a.rating < b.rating){
        return 1;
    }
    return 0;
}

export function sortByPrice(a, b) {
    if (a.discounteddiscountedPrice && b.discounteddiscountedPrice) {
        if (a.discountedPrice > b.discountedPrice ) {
            return -1;
        }
        if (a.discountedPrice < b.discountedPrice){
            return 1;
        }
        return 0;
    } else {

        if (a.price > b.price ) {
            return -1;
        }
        if (a.price < b.price){
            return 1;
        }
        return 0;
    }

    
}