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
                <h4>Fullstack Developer</h4>
                <h5>Khired Networks</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built production APIs and React dashboards for real-time monitoring
              systems. Implemented role-based access and multi-tenant data
              isolation. Supported CI/CD pipelines and deployment automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Lasting Sales</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed and maintained REST APIs, authentication systems, and
              relational database structures. Optimized backend performance for
              analytics dashboards and engagement systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Developer</h4>
                <h5>Koraspond</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected Vina AI, a multi-tenant agentic AI SaaS platform with
              tool-calling, RAG, and multi-channel deployment. Built real-time
              voice agents and led cross-functional teams across AI, full-stack,
              and DevOps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
