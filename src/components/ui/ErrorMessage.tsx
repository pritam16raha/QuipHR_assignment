import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300">
      <AlertTriangle className="h-12 w-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">An Error Occurred</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
