import {Metadata} from "components";
import { ListAllItems, FeaturedItem } from "../../components/index"

const allItemsUrl = "https://v2.api.noroff.dev/online-shop";


export default function Shop() {
        return <main>
            <Metadata title="Shop" description="Shop"/>
           <FeaturedItem />
           <ListAllItems url={allItemsUrl} />
           </main>
};