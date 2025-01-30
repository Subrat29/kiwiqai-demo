import React from "react";
import { Download, Share2, FileText, Workflow } from "lucide-react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReportType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedReport } from "@/store/reportWorkflowSlice";

const REPORTS = [
  { id: "linkedin-ad", label: "LinkedIn Ad Analysis" },
  { id: "linkedin-post", label: "LinkedIn Post Analysis" },
] as const;

const ActionButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border rounded-md hover:bg-gray-50 transition-colors">
    <Icon className="w-3.5 h-3.5 mr-1.5" />
    {label}
  </button>
);

const ReportSelector = ({ 
  selectedReport, 
  onReportChange 
}: { 
  selectedReport: ReportType; 
  onReportChange: (value: string) => void;
}) => {
  const currentReport = REPORTS.find((report) => report.id === selectedReport);

  return (
    <Select value={selectedReport} onValueChange={onReportChange}>
      <SelectTrigger className="w-[220px]">
        <SelectValue>{currentReport?.label || "Select Report"}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {REPORTS.map((report) => (
          <SelectItem key={report.id} value={report.id} className="text-sm">
            {report.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const NavigationTabs = () => (
  <TabsList className="h-8 bg-gray-100">
    <TabsTrigger value="report" className="gap-1.5 text-xs">
      <FileText className="w-3 h-3" /> Report
    </TabsTrigger>
    <TabsTrigger value="workflow" className="gap-1.5 text-xs">
      <Workflow className="w-3 h-3" /> Workflow
    </TabsTrigger>
  </TabsList>
);

export function Header() {
  const dispatch = useAppDispatch();
  const { selectedReport } = useAppSelector((state) => state.reportWorkflow);

  const handleReportChange = React.useCallback((reportId: string) => {
    dispatch(setSelectedReport(reportId as ReportType));
  }, [dispatch]);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ReportSelector 
              selectedReport={selectedReport} 
              onReportChange={handleReportChange}
            />
            <NavigationTabs />
          </div>

          <div className="flex items-center gap-2">
            <ActionButton icon={Download} label="Export" />
            <ActionButton icon={Share2} label="Share" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;