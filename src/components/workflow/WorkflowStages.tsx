import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedStage } from "@/store/reportWorkflowSlice";

interface Step {
  id: string;
  name: string;
}

interface Stage {
  id: string;
  stageNumber: number;
  name: string;
  description: string;
  steps: Step[];
}

export default function WorkflowStages() {
  const dispatch = useAppDispatch();
  const { stages, selectedStage } = useAppSelector(
    (state) => state.reportWorkflow
  );
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  const handleStageClick = (stageId: string) => {
    dispatch(setSelectedStage(stageId === selectedStage?.id ? null : stageId));
  };

  return (
    <Card className={`w-72 border-gray-200`}>
      <CardHeader className="px-4 py-3 border-b">
        <CardTitle className="text-base font-semibold text-gray-900">
          Workflow Stages
        </CardTitle>
        <p className="text-xs text-gray-500">
          Configure your analysis pipeline
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="p-2">
            {stages?.map((stage) => (
              <div
                key={stage.id}
                onMouseEnter={() => setHoveredStage(stage.id)}
                onMouseLeave={() => setHoveredStage(null)}
                className="mb-1"
              >
                <button
                  className={`w-full px-3 py-2.5 rounded-md transition-all duration-150 text-left group
                    ${
                      selectedStage?.id === stage.id
                        ? "bg-blue-50/80 text-blue-800"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  onClick={() => handleStageClick(stage.id)}
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium
                      ${
                        selectedStage?.id === stage.id
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      ✅
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="block text-sm font-medium truncate">
                        {stage.name}
                      </span>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
