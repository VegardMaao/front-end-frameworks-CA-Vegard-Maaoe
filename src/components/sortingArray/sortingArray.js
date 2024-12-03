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

        if (a.price > b.price ) {
            return -1;
        }
        if (a.price < b.price){
            return 1;
        }
        return 0;

}