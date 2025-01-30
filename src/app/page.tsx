"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import ReportAssistant from "@/components/report/ReportAssistant";
import { ReportView } from "@/components/report/ReportView";
import WorkflowStages from "@/components/workflow/WorkflowStages";
import StageDetails from "@/components/workflow/StageDetails";
import TemplateEditor from "@/components/workflow/TemplateEditor";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Tabs defaultValue="report" className="h-screen flex flex-col">
        <Header />
        
        <div className="flex-1 overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-6 py-4 h-full">
            <TabsContent 
              value="report" 
              className="mt-0 h-[calc(100vh-5rem)]"
            >
              <div className="flex gap-4 h-full bg-white rounded-lg shadow-sm p-4">
                <div className="flex-none">
                  <ReportAssistant />
                </div>
                <div className="flex-1 min-w-0">
                  <ReportView />
                </div>
              </div>
            </TabsContent>

            <TabsContent 
              value="workflow" 
              className="mt-0 h-[calc(100vh-5rem)]"
            >
              <div className="flex gap-4 h-full bg-white rounded-lg shadow-sm p-4">
                <div className="flex-none">
                  <WorkflowStages />
                </div>
                
                <div className="flex-1 min-w-0 flex gap-4">
                  <div className="flex-1 min-w-0 bg-gray-50 rounded-lg p-4">
                    <StageDetails />
                  </div>
                  <div className="flex-1 min-w-0 bg-gray-50 rounded-lg p-4">
                    <TemplateEditor />
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}