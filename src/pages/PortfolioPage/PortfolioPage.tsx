/** @module PortfolioPage */

import {
  PortfolioCard,
  type CompanyType,
  type ProjectType
} from "../../common/index";
import "./PortfolioPage.css";

const SAMPLE_PROJECTS = [
  {
    image: "https://placehold.co/600x400/png",
    companyType: "Finance/Banking" as CompanyType,
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
      "Digital Transformation",
      "Process Automation"
    ] as ProjectType[],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: "Healthcare" as CompanyType,
    projectName: "Predictive Analytics Platform",
    companyName: "HealthCare Solutions",
    description:
      "Developed an AI-powered predictive analytics platform to optimize patient care pathways and resource allocation.",
    metrics: {
      duration: "12 months",
      teamSize: 8,
      impact: "30% efficiency gain"
    },
    projectTypes: ["Machine Learning", "Data Analytics"] as ProjectType[],
    keyResults: [
      "Reduced patient wait times by 35%",
      "Improved resource utilization by 40%",
      "Implemented predictive modeling for 500k+ patient records"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: "Finance/Banking" as CompanyType,
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
      "Digital Transformation",
      "Process Automation"
    ] as ProjectType[],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: "Finance/Banking" as CompanyType,
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
      "Digital Transformation",
      "Process Automation"
    ] as ProjectType[],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: "Finance/Banking" as CompanyType,
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
      "Digital Transformation",
      "Process Automation"
    ] as ProjectType[],
    keyResults: [
      "Reduced transaction processing time by 65%",
      "Improved customer satisfaction score by 45%",
      "Implemented new digital banking platform serving 2M+ users"
    ]
  },
  {
    image: "https://placehold.co/600x400/png",
    companyType: "Finance/Banking" as CompanyType,
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
      "Digital Transformation",
      "Process Automation"
    ] as ProjectType[],
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
