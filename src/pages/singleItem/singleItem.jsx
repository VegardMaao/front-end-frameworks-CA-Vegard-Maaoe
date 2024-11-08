export default function SingleItem(url) {
    const urlParams = new URLSearchParams(window.location.search);
    const idParams = urlParams.get('id');
    return <div>{`Single Item ID: ${idParams}`}</div>
}