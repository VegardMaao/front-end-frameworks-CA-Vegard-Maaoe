
const urlParams = new URLSearchParams(window.location.search);
const idParams = urlParams.get('id');


export default function SingleItem() {
    return <div>{`Single Item ID: ${idParams}`}</div>
}