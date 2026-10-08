const PageDoc = ({ title, description, path }) => (
    <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://taiyotuition.com${path}`} />
    </>
);

export default PageDoc;
