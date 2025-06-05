/** @module types */

export type CompanyType =
  | "Food & Beverage"
  | "Finance/Banking"
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

export interface ProjectMetrics {
  duration: string;
  teamSize: number;
  impact: string;
}

export interface PortfolioCardProps {
  image: string;
  companyType: CompanyType;
  projectName: string;
  companyName: string;
  description: string;
  metrics: ProjectMetrics;
  projectTypes: ProjectType[];
  keyResults: string[];
}
