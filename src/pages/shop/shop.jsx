import {Metadata} from "components";
import ShopAllItems from "components/shopAllItems/ShopAllItems.jsx"
import { ShopHeroStory } from "components/shopHeroStory/ShopHeroStory";

export default function Shop() {
        return <main>
            <Metadata title="Shop" description="Shop"/>
           <ShopHeroStory />
           <ShopAllItems/>
           </main>
};