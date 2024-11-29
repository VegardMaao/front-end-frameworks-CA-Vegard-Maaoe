import { useParams } from "react-router-dom";
import { DisplaySingleItem } from "../../../components/singleItem";


export default function SingleItem() {
    const { id } = useParams();
    const url = `https://v2.api.noroff.dev/online-shop/${id}`;

    return <main>
        <DisplaySingleItem itemURL={url}/>
    </main>
}