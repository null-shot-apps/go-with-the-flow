'use client';

import { useState } from 'react';
import { YogaPose } from '@/data/poses';

interface FlowBuilderProps {
  selectedPoses: YogaPose[];
  onRemovePose: (poseId: string) => void;
  onClearFlow: () => void;
  onReorderPoses: (poses: YogaPose[]) => void;
}

export default function FlowBuilder({ selectedPoses, onRemovePose, onClearFlow, onReorderPoses }: FlowBuilderProps) {
  const [flowName, setFlowName] = useState('');
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  const totalDuration = selectedPoses.reduce((sum, pose) => sum + pose.duration, 0);
  const totalMinutes = Math.floor(totalDuration / 60);
  const totalSeconds = totalDuration % 60;

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newPoses = [...selectedPoses];
    [newPoses[index - 1], newPoses[index]] = [newPoses[index], newPoses[index - 1]];
    onReorderPoses(newPoses);
  };

  const moveDown = (index: number) => {
    if (index === selectedPoses.length - 1) return;
    const newPoses = [...selectedPoses];
    [newPoses[index], newPoses[index + 1]] = [newPoses[index + 1], newPoses[index]];
    onReorderPoses(newPoses);
  };

  const saveFlow = () => {
    if (!flowName.trim()) {
      alert('Please enter a flow name');
      return;
    }

    const flow = {
      name: flowName,
      poses: selectedPoses,
      totalDuration,
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const savedFlows = JSON.parse(localStorage.getItem('yogaFlows') || '[]');
    savedFlows.push(flow);
    localStorage.setItem('yogaFlows', JSON.stringify(savedFlows));

    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
    setFlowName('');
  };

  const getTransitionSuggestion = (currentPose: YogaPose, nextPose: YogaPose | null) => {
    if (!nextPose) return null;

    // Simple transition logic based on pose types
    const transitions: Record<string, string> = {
      'mountain-pose-downward-dog': 'Forward fold, then step or jump back',
      'downward-dog-warrior-one': 'Step right foot forward between hands',
      'warrior-one-warrior-two': 'Open hips and arms to the side',
      'warrior-two-triangle-pose': 'Straighten front leg and reach forward',
      'triangle-pose-warrior-two': 'Bend front knee',
      'plank-pose-cobra-pose': 'Lower down with control',
      'cobra-pose-downward-dog': 'Press back through hands',
      'downward-dog-childs-pose': 'Lower knees to mat',
      'childs-pose-mountain-pose': 'Roll up to standing slowly'
    };

    const key = `${currentPose.id}-${nextPose.id}`;
    return transitions[key] || 'Transition mindfully with breath';
  };

  if (selectedPoses.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-6xl mb-4">🧘‍♀️</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Build Your Flow</h3>
        <p className="text-gray-600">Select poses from the library to create your personalized yoga sequence</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Your Flow Sequence</h3>
          <p className="text-sm text-gray-600 mt-1">
            {selectedPoses.length} poses • {totalMinutes}:{totalSeconds.toString().padStart(2, '0')} total
          </p>
        </div>
        <button
          onClick={onClearFlow}
          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Flow Sequence */}
      <div className="space-y-3 mb-6">
        {selectedPoses.map((pose, index) => {
          const nextPose = selectedPoses[index + 1] || null;
          const transition = getTransitionSuggestion(pose, nextPose);

          return (
            <div key={`${pose.id}-${index}`}>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === selectedPoses.length - 1}
                    className="text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ▼
                  </button>
                </div>

                <div className="text-2xl font-bold text-gray-400 w-8">
                  {index + 1}
                </div>

                <div className="text-3xl">{pose.image}</div>

                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{pose.name}</h4>
                  <p className="text-sm text-gray-600">
                    {pose.duration}s • {pose.difficulty}
                  </p>
                </div>

                <button
                  onClick={() => onRemovePose(pose.id)}
                  className="text-gray-400 hover:text-red-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              {transition && (
                <div className="ml-16 mt-2 mb-2 flex items-center gap-2 text-sm text-gray-600 italic">
                  <span className="text-blue-500">→</span>
                  <span>{transition}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Save Flow */}
      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Save This Flow</h4>
        <div className="flex gap-3">
          <input
            type="text"
            value={flowName}
            onChange={(e) => setFlowName(e.target.value)}
            placeholder="Enter flow name (e.g., Morning Energizer)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={saveFlow}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Save Flow
          </button>
        </div>
        {showSaveSuccess && (
          <p className="mt-2 text-sm text-green-600 font-medium">✓ Flow saved successfully!</p>
        )}
      </div>

      {/* Flow Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-900">{selectedPoses.length}</p>
          <p className="text-sm text-blue-700">Poses</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-900">{totalMinutes}:{totalSeconds.toString().padStart(2, '0')}</p>
          <p className="text-sm text-blue-700">Duration</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-900">
            {selectedPoses.filter(p => p.difficulty === 'Beginner').length}/
            {selectedPoses.filter(p => p.difficulty === 'Intermediate').length}/
            {selectedPoses.filter(p => p.difficulty === 'Advanced').length}
          </p>
          <p className="text-sm text-blue-700">B/I/A</p>
        </div>
      </div>
    </div>
  );
}

