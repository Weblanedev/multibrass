import { useState } from "react";
import items from "../../data/portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Link } from "react-router-dom";

const PortfolioGallery2 = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(0, 20)
      : items.slice(0, 20).filter((item) => item.category.includes(filter));

  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "Finance" ? "is-checked" : ""}
            onClick={() => setFilter("Finance")}
          >
            Finance
          </li>
          <li
            className={filter === "Music" ? "is-checked" : ""}
            onClick={() => setFilter("Music")}
          >
            Music
          </li>
          <li
            className={filter === "Biography" ? "is-checked" : ""}
            onClick={() => setFilter("Biography")}
          >
            Biography
          </li>
          <li
            className={filter === "Technology" ? "is-checked" : ""}
            onClick={() => setFilter("Technology")}
          >
            Technology
          </li>
          <li
            className={filter === "Programming" ? "is-checked" : ""}
            onClick={() => setFilter("Programming")}
          >
            Programming
          </li>
          <li
            className={filter === "Engineering" ? "is-checked" : ""}
            onClick={() => setFilter("Engineering")}
          >
            Engineering
          </li>
        </ul>
        <div className="row pt-90 lg-pt-50 pb-90 lg-pb-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-four mb-50">
                  <div className="img-meta position-relative">
                    <img src={item.image} alt="gallary" className="w-100" />

                    {/* <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={410}
                      height={340}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox expend-btn d-flex align-items-center justify-content-center tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </span>
                      )}
                    </Item> */}
                  </div>
                  <Link
                    to={`/books/${item.id}`}
                    className="title tran3s d-flex flex-column align-items-center"
                  >
                    <span className="pj-name tran3s fw-500">{item.name}</span>
                    <span className="tag">{item.tag}</span>
                  </Link>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery2;
