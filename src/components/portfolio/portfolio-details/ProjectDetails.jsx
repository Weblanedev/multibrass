const ProjectDetails = ({ details }) => {
  if (!details || !details.projectInfo) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Authors</div>
        <div className="pt-text">{details.projectInfo.authors}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Subtitle
        </div>
        <div className="pt-text">{details.projectInfo.subtitle.length > 0 ? details.projectInfo.subtitle : "Nil"}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Price
        </div>
        <div className="pt-text">${details.price}</div>
      </div> 
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
