const PageDoc = ({ title, description, path, noindex = false }) => (
    <>
        <title>{title}</title>
        <meta name="description" content={description} />
        {noindex && <meta name="robots" content="noindex" />}
        {path && (
            <link rel="canonical" href={`https://taiyotuition.com${path}`} />
        )}
    </>
);

export default PageDoc;
