import Head from "next/head";

type metaProps = {
  title: string;
  keywords: string;
  description: string;
};
const Meta = ({ title, keywords, description }: metaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Thuy Giang Nguyen",
  keywords: "web developer, programming",
  description: "development work",
};

export default Meta;
