'use client';

import { useState, useEffect } from 'react';
import { YogaPose } from '@/data/poses';

interface SavedFlow {
  name: string;
  poses: YogaPose[];
  totalDuration: number;
  createdAt: string;
}

interface SavedFlowsProps {
  onLoadFlow: (poses: YogaPose[]) => void;
}

export default function SavedFlows({ onLoadFlow }: SavedFlowsProps) {
  const [savedFlows, setSavedFlows] = useState<SavedFlow[]>([]);
  const [expandedFlow, setExpandedFlow] = useState<number | null>(null);

  useEffect(() => {
    loadFlows();
  }, []);

  const loadFlows = () => {
    const flows = JSON.parse(localStorage.getItem('yogaFlows') || '[]');
    setSavedFlows(flows);
  };

  const deleteFlow = (index: number) => {
    const flows = [...savedFlows];
    flows.splice(index, 1);
    localStorage.setItem('yogaFlows', JSON.stringify(flows));
    setSavedFlows(flows);
  };

  const loadFlow = (flow: SavedFlow) => {
    onLoadFlow(flow.poses);
  };

  if (savedFlows.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No Saved Flows Yet</h3>
        <p className="text-gray-600">Create and save your first flow sequence to see it here</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Saved Flows</h3>
      
      <div className="space-y-4">
        {savedFlows.map((flow, index) => {
          const totalMinutes = Math.floor(flow.totalDuration / 60);
          const totalSeconds = flow.totalDuration % 60;
          const isExpanded = expandedFlow === index;

          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{flow.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {flow.poses.length} poses • {totalMinutes}:{totalSeconds.toString().padStart(2, '0')} • 
                      {' '}{new Date(flow.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => loadFlow(flow)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Load Flow
                    </button>
                    <button
                      onClick={() => setExpandedFlow(isExpanded ? null : index)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      {isExpanded ? '▲' : '▼'}
                    </button>
                    <button
                      onClick={() => deleteFlow(index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="p-4 space-y-2">
                  {flow.poses.map((pose, poseIndex) => (
                    <div key={poseIndex} className="flex items-center gap-3 p-2 bg-white rounded">
                      <span className="text-gray-400 font-bold w-6">{poseIndex + 1}</span>
                      <span className="text-2xl">{pose.image}</span>
                      <span className="flex-1 text-gray-900">{pose.name}</span>
                      <span className="text-sm text-gray-600">{pose.duration}s</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

