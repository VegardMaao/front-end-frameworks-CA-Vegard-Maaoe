export function sortByReviews(a, b){
    if (a.reviews.length > b.reviews.length || a.rating > b.rating) {
        return -1;
    }
    if (a.reviews.length < b.reviews.length || a.rating < b.rating){
        return 1;
    }
    return 0;
}

export function sortByHighPrice(a, b) {
    if (a.discountedPrice > b.discountedPrice) {
        return -1;
    }
    if (a.discountedPrice < b.discountedPrice){
        return 1;
    }
    return 0;
}

export function sortByLowPrice(a, b) {
    if (a.discountedPrice > b.discountedPrice) {
        return 1;
    }
    if (a.discountedPrice < b.discountedPrice){
        return -1;
    }
    return 0;
}