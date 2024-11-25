import { Helmet } from "react-helmet-async";

export function Metadata({title, description} ) {
    return <Helmet>
    <meta name="author" content="Vegard Maaø" />
    <meta name="description" content={`${description}`} />
    <title>{`${title} | Online Shop`}</title>
    </Helmet>
}