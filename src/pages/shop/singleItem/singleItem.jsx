import { useParams } from "react-router-dom";
import { DisplaySingleItem } from "../../../components/singleItem";
import { Metadata } from "../../../components/metadata/metadata";
import { useState } from "react";

export default function SingleItem() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const url = `https://v2.api.noroff.dev/online-shop/${id}`;

    return <main>
        <Metadata title={title} description={description}/>
        <DisplaySingleItem itemURL={url} setTitle={setTitle} setDescription={setDescription}/>
    </main>
}