import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        {pageTitle &&
          `${pageTitle} - Multibrass`}
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
