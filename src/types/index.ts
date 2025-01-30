export type Tab = "report" | "workflow";

export type ReportType = "linkedin-ad" | "linkedin-post";

export type Stage = {
  id: string;
  name: string;
  description: string;
  template: string;
  steps: Step[];
};

export type Step = {
  id: string;
  step_number: number;
  step_name: string;
  step_description: string;
  substeps: Substep[];
};

export type Substep = {
  id: string;
  substep_number: string;
  substep_name: string;
  description: string;
};

export type AnalysisData = {
  agent_id: string;
  agent_name: string;
  agent_description: string;
  user_input: {
    contents_of_companies: {
      choices: string[];
    };
  };
  stages: Stage[];
  final_report: string;
};

export type Message = {
  id: string;
  content: string;
  type: "user" | "assistant";
  streaming?: boolean;
};
