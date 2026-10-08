import { SITE_URL, pageMeta } from "../data/pageMeta";

/** Head tags for a route. Values come from pageMeta; props override them. */
const PageDoc = ({ path, ...overrides }) => {
    const { title, description, noindex = false } = {
        ...pageMeta[path],
        ...overrides,
    };

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            {noindex && <meta name="robots" content="noindex" />}
            {path && !noindex && (
                <link rel="canonical" href={`${SITE_URL}${path}`} />
            )}
        </>
    );
};

export default PageDoc;
