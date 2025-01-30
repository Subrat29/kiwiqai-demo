import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReportType, AnalysisData, Stage } from "@/types";
import { sampleData } from "@/data/sampleData";

interface ReportWorkflowState {
  selectedReport: ReportType;
  currentData: AnalysisData;
  stages: Stage[];
  selectedStage: Stage | null;
}

const initialReport: ReportType = "linkedin-post";
const initialData = sampleData[initialReport];
const initialStages = initialData.stages;
const initialSelectedStage = initialStages.length > 0 ? initialStages[0] : null;

const initialState: ReportWorkflowState = {
  selectedReport: initialReport,
  currentData: initialData,
  stages: initialStages,
  selectedStage: initialSelectedStage
};

export const reportWorkflowSlice = createSlice({
  name: "reportWorkflow",
  initialState,
  reducers: {
    setSelectedReport: (state, action: PayloadAction<ReportType>) => {
      state.selectedReport = action.payload;
      state.currentData = sampleData[action.payload];
      state.stages = state.currentData.stages;
      state.selectedStage = state.stages.length > 0 ? state.stages[0] : null;
    },
    setSelectedStage: (state, action: PayloadAction<string | null>) => {
      state.selectedStage = action.payload
        ? state.stages.find((stage) => stage.id === action.payload) || null
        : null;
    },
    updateStage: (
      state,
      action: PayloadAction<{ stageId: string; updatedStage: Partial<Stage> }>
    ) => {
      state.stages = state.stages.map((stage) =>
        stage.id === action.payload.stageId
          ? { ...stage, ...action.payload.updatedStage }
          : stage
      );
      if (state.selectedStage?.id === action.payload.stageId) {
        state.selectedStage = {
          ...state.selectedStage,
          ...action.payload.updatedStage,
        };
      }
    },
  },
});

export const { setSelectedReport, setSelectedStage, updateStage } =
  reportWorkflowSlice.actions;
export default reportWorkflowSlice.reducer;
