import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { X, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

interface StageStep {
  id: number;
  name: string;
  description: string;
  substeps: SubStep[];
}

interface SubStep {
  id: number;
  name: string;
  description: string;
}

export default function StageDetails() {
  const [steps, setSteps] = useState<StageStep[]>([
    {
      id: 1,
      name: "",
      description: "",
      substeps: [{ id: 1, name: "", description: "" }],
    },
  ]);

  //fetch the stage details from the store by state.reportWorkflow.selectedStage and fetch steps from state.reportWorkflow.selectedStage.steps
  const selectedStage = useAppSelector(
    (state) => state.reportWorkflow?.selectedStage || {}
  );

  useEffect(() => {
    if (selectedStage && selectedStage?.steps) 
      setSteps(selectedStage?.steps);
    else 
      setSteps([{ id: 1, name: "", description: "", substeps: [] }]);
  }, [selectedStage]);

  const [expandedSteps, setExpandedSteps] = useState<number[]>([1]);

  const addStep = () => {
    const newStepId = steps.length + 1;
    setSteps([
      ...steps,
      { id: newStepId, name: "", description: "", substeps: [] },
    ]);
    setExpandedSteps([...expandedSteps, newStepId]);
  };

  const removeStep = (stepId: number) => {
    setSteps(steps.filter((step) => step.id !== stepId));
    setExpandedSteps(expandedSteps.filter((id) => id !== stepId));
  };

  const updateStep = (
    stepId: number,
    field: "name" | "description",
    value: string
  ) => {
    setSteps(
      steps.map((step) => {
        if (step.id === stepId) {
          return { ...step, [field]: value };
        }
        return step;
      })
    );
  };

  const addSubstep = (stepId: number) => {
    setSteps(
      steps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            substeps: [
              ...step.substeps,
              { id: step.substeps.length + 1, name: "", description: "" },
            ],
          };
        }
        return step;
      })
    );
  };

  const removeSubstep = (stepId: number, substepId: number) => {
    setSteps(
      steps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            substeps: step.substeps.filter(
              (substep) => substep.id !== substepId
            ),
          };
        }
        return step;
      })
    );
  };

  const updateSubstep = (
    stepId: number,
    substepId: number,
    field: "name" | "description",
    value: string
  ) => {
    setSteps(
      steps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            substeps: step.substeps.map((substep) => {
              if (substep.id === substepId) {
                return { ...substep, [field]: value };
              }
              return substep;
            }),
          };
        }
        return step;
      })
    );
  };

  const toggleStepExpansion = (stepId: number) => {
    setExpandedSteps(
      expandedSteps.includes(stepId)
        ? expandedSteps.filter((id) => id !== stepId)
        : [...expandedSteps, stepId]
    );
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Stage Details</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-6">
            <div className="space-y-4">
              <Input placeholder="Stage Name" className="border-gray-200" value={selectedStage?.name}/>
              <Input
                placeholder="Stage Description"
                className="border-gray-200"
                value={selectedStage?.description}
              />
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <Card key={step.id} className="border border-gray-200">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-500">
                          Step {step?.step_number}
                        </span>
                        <button
                          className="p-1 hover:bg-gray-100 rounded-md"
                          onClick={() => toggleStepExpansion(step.id)}
                        >
                          {expandedSteps.includes(step.id) ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>
                      </div>
                      <button
                        className="p-1 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-md"
                        onClick={() => removeStep(step.id)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="space-y-2 mt-2">
                      <Input
                        placeholder="Step Name"
                        value={step?.step_name}
                        onChange={(e) =>
                          updateStep(step.id, "name", e.target.value)
                        }
                        className="border-gray-200"
                      />
                      <Input
                        placeholder="Step Description"
                        value={step?.step_description}
                        onChange={(e) =>
                          updateStep(step.id, "description", e.target.value)
                        }
                        className="border-gray-200"
                      />
                    </div>
                  </CardHeader>
                  {expandedSteps.includes(step.id) && (
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {step.substeps.map((substep) => (
                          <div
                            key={substep?.id}
                            className="flex items-start space-x-3"
                          >
                            <div className="mt-2 text-sm font-medium text-gray-500 w-6">
                              {substep?.substep_number}
                            </div>
                            <div className="flex-1 space-y-2">
                              <Input
                                placeholder="Substep Name"
                                value={substep?.substep_name}
                                onChange={(e) =>
                                  updateSubstep(
                                    step.id,
                                    substep.id,
                                    "name",
                                    e.target.value
                                  )
                                }
                                className="border-gray-200"
                              />
                              <Input
                                placeholder="Substep Description"
                                value={substep.description}
                                onChange={(e) =>
                                  updateSubstep(
                                    step.id,
                                    substep.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                                className="border-gray-200"
                              />
                            </div>
                            <button
                              className="p-1 mt-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-md"
                              onClick={() => removeSubstep(step.id, substep.id)}
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                        <button
                          className="w-full py-2 mt-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md flex items-center justify-center"
                          onClick={() => addSubstep(step.id)}
                        >
                          <Plus size={16} className="mr-2" /> Add Substep
                        </button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
              <button
                className="w-full py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md flex items-center justify-center"
                onClick={addStep}
              >
                <Plus size={16} className="mr-2" /> Add Step
              </button>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
