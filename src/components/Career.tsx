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
              <h3>2021</h3>
            </div>
            <p>
            • Authored complex SQL pipelines for data extraction and transformation, reducing manual reporting preparation
            time by ~30% through automation.
            • Built and maintained Power BI dashboards for KPI monitoring used daily by cross-functional teams, replacing
            manual spreadsheet workflows with live data connections.
            • Conducted exploratory data analysis on large structured datasets, identifying data quality issues and correcting
            upstream ETL logic.
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
              • Engineered a production-grade ETL pipeline processing [~X GWh / X million records] of Italian smart meter
              data daily, with multi-layer validation achieving 99% data integrity before model ingestion.
              • Developed and deployed electricity consumption forecasting models (XGBoost, Scikit-learn) with Optuna
              hyperparameter optimisation, achieving [~X% MAPE / X% improvement] on seasonal Italian energy demand
              patterns.
              • Built automated model evaluation and monitoring pipeline integrated into CI/CD (GitHub Actions + Docker),
              enabling real-time performance tracking and early drift detection across live forecasting outputs.
              • Designed and executed unit and integration tests for Python-based forecasting modules, identifying and
              resolving 20+ edge-case bugs pre-deployment — ensuring model reliability in a regulated energy environment.
              • Collaborated with domain stakeholders on ARERA-compliant data handling and energy market reporting,
               contributing to regulatory data governance workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
