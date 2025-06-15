/** @module PortfolioPage */

import { designConstants, PortfolioCard } from "../../common/index";
import {
  DATA_ANALYTICS_PROJECT_TYPE,
  DIGITAL_TRANSFORMATION_PROJECT_TYPE,
  MACHINE_LEARNING_PROJECT_TYPE,
  PROCESS_AUTOMATION_PROJECT_TYPE
} from "../../common/PortfolioCard/constants/portfolioCardConstants";
import type { PortfolioCardProps } from "../../common/PortfolioCard/types/portfolioCardTypes";
import "./PortfolioPage.css";

const { FINANCE_AND_BANKING_COMPANY_TYPE, HEALTHCARE_COMPANY_TYPE } =
  designConstants;

const SAMPLE_PROJECTS: PortfolioCardProps[] = [
  {
    image: "https://placehold.co/600x400/png",
    companyType: FINANCE_AND_BANKING_COMPANY_TYPE,
    projectName: "Digital Transformation Initiative",
    companyName: "Global Bank Corp",
    description:
      "Led a comprehensive digital transformation project to modernize legacy systems and improve customer experience across all digital channels.",
    metrics: {
      duration: "3 months",
      teamSize: 7,
      impact: "Data-backed supply Forecasting"
    },
    projectTypes: [
      DIGITAL_TRANSFORMATION_PROJECT_TYPE,
      PROCESS_AUTOMATION_PROJECT_TYPE
    ],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: HEALTHCARE_COMPANY_TYPE,
    projectName: "Predictive Analytics Platform",
    companyName: "HealthCare Solutions",
    description:
      "Developed an AI-powered predictive analytics platform to optimize patient care pathways and resource allocation.",
    metrics: {
      duration: "12 months",
      teamSize: 8,
      impact: "30% efficiency gain"
    },
    projectTypes: [MACHINE_LEARNING_PROJECT_TYPE, DATA_ANALYTICS_PROJECT_TYPE],
    keyResults: [
      "Reduced patient wait times by 35%",
      "Improved resource utilization by 40%",
      "Implemented predictive modeling for 500k+ patient records"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: FINANCE_AND_BANKING_COMPANY_TYPE,
    projectName: "Digital Transformation Initiative",
    companyName: "Global Bank Corp",
    description:
      "Led a comprehensive digital transformation project to modernize legacy systems and improve customer experience across all digital channels.",
    metrics: {
      duration: "18 months",
      teamSize: 12,
      impact: "40% cost reduction"
    },
    projectTypes: [
      DIGITAL_TRANSFORMATION_PROJECT_TYPE,
      PROCESS_AUTOMATION_PROJECT_TYPE
    ],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: FINANCE_AND_BANKING_COMPANY_TYPE,
    projectName: "Digital Transformation Initiative",
    companyName: "Global Bank Corp",
    description:
      "Led a comprehensive digital transformation project to modernize legacy systems and improve customer experience across all digital channels.",
    metrics: {
      duration: "18 months",
      teamSize: 12,
      impact: "40% cost reduction"
    },
    projectTypes: [
      DIGITAL_TRANSFORMATION_PROJECT_TYPE,
      PROCESS_AUTOMATION_PROJECT_TYPE
    ],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: FINANCE_AND_BANKING_COMPANY_TYPE,
    projectName: "Digital Transformation Initiative",
    companyName: "Global Bank Corp",
    description:
      "Led a comprehensive digital transformation project to modernize legacy systems and improve customer experience across all digital channels.",
    metrics: {
      duration: "18 months",
      teamSize: 12,
      impact: "40% cost reduction"
    },
    projectTypes: [
      DIGITAL_TRANSFORMATION_PROJECT_TYPE,
      PROCESS_AUTOMATION_PROJECT_TYPE
    ],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: FINANCE_AND_BANKING_COMPANY_TYPE,
    projectName: "Digital Transformation Initiative",
    companyName: "Global Bank Corp",
    description:
      "Led a comprehensive digital transformation project to modernize legacy systems and improve customer experience across all digital channels.",
    metrics: {
      duration: "18 months",
      teamSize: 12,
      impact: "40% cost reduction"
    },
    projectTypes: [
      DIGITAL_TRANSFORMATION_PROJECT_TYPE,
      PROCESS_AUTOMATION_PROJECT_TYPE
    ],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  }
];

const PortfolioPage = (): React.JSX.Element => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-grid">
        {SAMPLE_PROJECTS.map(
          (project): React.JSX.Element => (
            <PortfolioCard key={project.projectName} {...project} />
          )
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
