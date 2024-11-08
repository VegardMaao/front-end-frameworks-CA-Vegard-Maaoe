export default function SingleItem(param) {
    if (!param) {
        const urlParams = new URLSearchParams(window.location.search);
        const idParams = urlParams.get('id');
        return <div>{`Single Item ID: ${idParams}`}</div>
    } else {
        const idParams = param;
        return <div>{`Single Item ID: ${idParams}`}</div>
    }
    
   
}