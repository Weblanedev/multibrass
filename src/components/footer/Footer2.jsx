const columns = [
  {
    title: "Links",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Workshops", href: "/our-workshops" },
      { label: "Counseling", href: "/our-counseling" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title tx-dark fw-500">Address</h5>
        <p className="tx-dark opacity-75 mb-35">
          2190 Zinai terrace, Lake view <br />
          house state, 10 no road.
        </p>
      </div>
    </>
  );
};

export default Footer2;
