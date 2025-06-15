/** @module PortfolioCard */

import { FaCalendarAlt, FaUsers, FaChartLine } from "react-icons/fa";

import { COLOR_RED, SIZE_SMALL, VARIANT_OUTLINED } from "../data/colors";
import type { PortfolioCardProps } from "./types/portfolioCardTypes";
import Tag from "../Tag/Tag";

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
      <img src={image} alt={projectName} className="portfolio-card-image" />
      <div className="portfolio-card-content">
        <Tag variant="filled" color={COLOR_RED}>
          {companyType}
        </Tag>
        <h3 className="portfolio-card-title">{projectName}</h3>
        <div className="portfolio-card-company">{companyName}</div>
        <div className="portfolio-card-description">{description}</div>

        <div className="portfolio-card-metrics-grid">
          <div className="portfolio-card-metric-col">
            <div className="portfolio-card-metric-icon-row">
              <FaCalendarAlt className="portfolio-card-metric-icon" />
            </div>
            <div className="portfolio-card-metric-value">
              {metrics.duration}
            </div>
            <div className="portfolio-card-metric-label">Duration</div>
          </div>
          <div className="portfolio-card-metric-col">
            <div className="portfolio-card-metric-icon-row">
              <FaUsers className="portfolio-card-metric-icon" />
            </div>
            <div className="portfolio-card-metric-value">
              {metrics.teamSize}
            </div>
            <div className="portfolio-card-metric-label">Team Size</div>
          </div>
          <div className="portfolio-card-metric-col">
            <div className="portfolio-card-metric-icon-row">
              <FaChartLine className="portfolio-card-metric-icon" />
            </div>
            <div className="portfolio-card-metric-value">{metrics.impact}</div>
            <div className="portfolio-card-metric-label">Impact</div>
          </div>
        </div>

        <h4 className="portfolio-card-key-results-title">Key Results</h4>
        <ul className="portfolio-card-key-results">
          {keyResults.map(
            (result, index): React.JSX.Element => (
              <li key={index} className="portfolio-card-key-result">
                {result}
              </li>
            )
          )}
        </ul>

        <div className="portfolio-card-tags">
          {projectTypes.map(
            (type): React.JSX.Element => (
              <Tag
                key={type}
                variant={VARIANT_OUTLINED}
                color={COLOR_RED}
                size={SIZE_SMALL}
              >
                {type}
              </Tag>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
