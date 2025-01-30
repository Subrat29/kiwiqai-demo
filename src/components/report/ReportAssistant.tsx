import React from 'react';
import { Send } from 'lucide-react';

const ReportAssistant = () => {
  const messages = [
    { id: 1, type: 'assistant', content: 'Hello! How can I help you analyze this report?' },
    { id: 2, type: 'user', content: 'Can you show me the key findings?' }
  ];

  // const suggestedQuestions = [
  //   "What are the key findings?",
  //   "Show sentiment analysis",
  //   "Compare with past insights",
  //   "Identify trends"
  // ];

  return (
    <div className="w-[400px] flex flex-col bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="font-semibold text-gray-800">
          Report Assistant
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          I can help you analyze this market report. What would you like to know?
        </p>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px]">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-lg ${
              message.type === 'user'
                ? 'bg-blue-50 text-blue-700'
                : 'bg-gray-100 text-gray-700'
            }`}>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Suggested Questions */}
      {/* <div className="p-4 border-t">
        <p className="text-sm font-medium text-gray-700 mb-2">Suggested questions:</p>
        <div className="space-y-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              className="w-full p-2 text-left text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors flex items-center group"
            >
              {question}
            </button>
          ))}
        </div>
      </div> */}
      
      {/* Input Area */}
      <div className="p-4 border-t">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask a question about the report..."
            className="w-full px-4 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportAssistant;