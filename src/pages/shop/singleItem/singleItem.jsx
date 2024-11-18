import { useParams } from "react-router-dom";
export default function SingleItem() {
    const { id } = useParams();
    return <main>{`Single Item ID: ${id}`}</main>
}