import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>LTIMINDTREE</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Utilized SQL, Python, and Excel for data wrangling and visualization.
              Developed automated reporting dashboards using Tableau to track KPIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master's in Data Science</h4>
                <h5>University of Napoli</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursued Master's degree in Data Science at University of Napoli Federico II,
              building a strong foundation in statistical modeling and machine learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>GEKO S.p.A</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing production-ready time series forecasting pipelines using Python and XGBoost.
              Implementing advanced clustering to improve performance by &gt;15%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
