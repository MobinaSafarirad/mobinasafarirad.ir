export const focusItems = [
  "aiEngineering",
  "machineLearning",
  "pythonSkills", 
  "softwareEngineering",
  "buildingProjects"
] as const;

export type FocusId = (typeof focusItems)[number];

