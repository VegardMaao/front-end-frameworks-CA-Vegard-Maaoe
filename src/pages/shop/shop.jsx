import {Metadata, ListAllItems, FeaturedItem } from "components";

const allItemsUrl = "https://v2.api.noroff.dev/online-shop";


export default function Shop() {
        return <main>
            <Metadata title="Shop" description="Shop"/>
            <FeaturedItem url={allItemsUrl} />
            <ListAllItems url={allItemsUrl} />
           </main>
};