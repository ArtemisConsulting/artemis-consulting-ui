/** @module PortfolioCard */

import { FaCalendarAlt, FaUsers, FaChartLine } from "react-icons/fa";
import type { PortfolioCardProps } from "./types";

import "./PortfolioCard.css";

const PortfolioCard = ({
  image,
  companyType,
  projectName,
  companyName,
  description,
  metrics,
  projectTypes,
  keyResults
}: PortfolioCardProps): React.JSX.Element => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={projectName} className="portfolio-card__image" />
      <div className="portfolio-card__content">
        <div className="portfolio-card__company-type">{companyType}</div>
        <div className="portfolio-card__title">{projectName}</div>
        <div className="portfolio-card__company">{companyName}</div>
        <div className="portfolio-card__description">{description}</div>

        <div className="portfolio-card__metrics">
          <div className="portfolio-card__metric">
            <FaCalendarAlt className="portfolio-card__metric-icon" />
            <span className="portfolio-card__metric-text">
              {metrics.duration}
            </span>
          </div>
          <div className="portfolio-card__metric">
            <FaUsers className="portfolio-card__metric-icon" />
            <span className="portfolio-card__metric-text">
              {metrics.teamSize} members
            </span>
          </div>
          <div className="portfolio-card__metric">
            <FaChartLine className="portfolio-card__metric-icon" />
            <span className="portfolio-card__metric-text">
              {metrics.impact}
            </span>
          </div>
        </div>

        <div className="portfolio-card__tags">
          {projectTypes.map(
            (type): React.JSX.Element => (
              <span key={type} className="portfolio-card__tag">
                {type}
              </span>
            )
          )}
        </div>

        <div>Key Results</div>
        <ul className="portfolio-card__key-results">
          {keyResults.map(
            (result, index): React.JSX.Element => (
              <li key={index} className="portfolio-card__key-result">
                {result}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
