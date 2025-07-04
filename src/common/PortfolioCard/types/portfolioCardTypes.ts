/** @module types */

export type CompanyType =
  | "Food & Beverage"
  | "Finance & Banking"
  | "Healthcare"
  | "Technology"
  | "Retail"
  | "Manufacturing"
  | "Education";

export type ProjectType =
  | "Machine Learning"
  | "Financial Planning"
  | "Digital Transformation"
  | "Data Analytics"
  | "Process Automation"
  | "Strategy Consulting";

export type ProjectMetrics = {
  duration: string;
  teamSize: number;
  impact: string;
};

export type PortfolioCardProps = {
  image: string;
  companyType: CompanyType;
  projectName: string;
  companyName: string;
  description: string;
  metrics: ProjectMetrics;
  projectTypes: ProjectType[];
  keyResults: string[];
};
