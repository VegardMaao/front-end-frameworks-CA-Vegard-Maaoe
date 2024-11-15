import { useParams } from "react-router-dom";
export default function SingleItem() {
    const { id } = useParams();
    return <div>{`Single Item ID: ${id}`}</div>
}