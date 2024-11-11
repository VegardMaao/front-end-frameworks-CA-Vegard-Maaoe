import { Helmet } from "react-helmet-async";

export default function Metadata({title, description} ) {
    return <Helmet>
    <meta name="author" content="Vegard Maaø" />
    <meta name="description" content={`${description}`} />
    <title>{`${title}`}</title>
    <script src="https://kit.fontawesome.com/efafec28fb.js" crossorigin="anonymous"></script>
    </Helmet>
}