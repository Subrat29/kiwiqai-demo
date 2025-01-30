"use client";

import React from "react";
import {
  AlertTriangle,
  BarChart3,
  Brain,
  Building2,
  ChevronRight,
  LineChart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useAppSelector } from "@/store/hooks";
import { useState, useEffect } from "react";

export function ReportView() {
  const [report, setReport] = useState<string>("This is a report");
  const finalReport = useAppSelector(
    (state) => state.reportWorkflow?.currentData?.final_report
  );

  console.log("finalReport = ", finalReport);

  useEffect(() => {
    if (finalReport) {
      setReport(finalReport);
    }
  }, [setReport, finalReport]);

  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm overflow-y-auto">
      <div className="p-6">
        <ReactMarkdown
          className="prose max-w-none"
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-medium text-gray-800 mt-8 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-medium text-gray-700 mt-6 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className="text-gray-600">{children}</li>,
            strong: ({ children }) => (
              <strong className="text-gray-900 font-medium">{children}</strong>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-200 pl-4 my-4 text-gray-600 italic">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-gray-50 text-gray-800 px-1.5 py-0.5 rounded text-sm">
                {children}
              </code>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                {children}
              </a>
            ),
          }}
        >
          {report}
        </ReactMarkdown>
      </div>
    </div>
  );
}
