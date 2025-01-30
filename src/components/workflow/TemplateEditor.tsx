import { useState, useEffect, use } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

const defaultTemplate = `
# Qualitative Analysis Template
`;

export default function TemplateEditor() {
  const [template, setTemplate] = useState<string>(defaultTemplate);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [wordCount, setWordCount] = useState<number>(0);

  const qualitative_template = useAppSelector(
    (state) => state.reportWorkflow?.selectedStage?.template || ""
  );

  console.log("qualitative_template = ", qualitative_template);

  useEffect(() => {
    // if (qualitative_template) {
      setTemplate(qualitative_template);
    // }
    console.log("template", template);
  }, [setTemplate, qualitative_template]);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTemplate = e.target.value;
    setTemplate(newTemplate);
    setWordCount(countWords(newTemplate));
  };

  const handleAnalyze = async () => {
    try {
      setIsAnalyzing(true);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const countWords = (text: string): number => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  return (
    <Card className={`shadow-sm bg-white`}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-gray-900">
          Qualitative Template Editor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-16rem)]">
          <Textarea
            value={template}
            onChange={handleTemplateChange}
            className="min-h-[600px] w-full resize-none font-mono text-gray-800 border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent p-4"
            placeholder="Enter your qualitative analysis template here..."
            disabled={isAnalyzing}
          />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Words: {wordCount}</span>
          {isAnalyzing && (
            <span className="text-sm text-blue-600 flex items-center">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Analyzing...
            </span>
          )}
        </div>
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing || !template.trim()}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isAnalyzing ? "Analyzing..." : "Plan Analysis"}
        </button>
      </CardFooter>
    </Card>
  );
}
