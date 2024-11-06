export default function SingleItem() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParams = urlParams.get('id');
    return <div>{`Single Item ID: ${idParams}`}</div>
}