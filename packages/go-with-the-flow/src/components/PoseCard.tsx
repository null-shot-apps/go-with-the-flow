'use client';

import { YogaPose } from '@/data/poses';

interface PoseCardProps {
  pose: YogaPose;
  onSelect?: (pose: YogaPose) => void;
  isSelected?: boolean;
}

export default function PoseCard({ pose, onSelect, isSelected }: PoseCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Advanced: 'bg-red-100 text-red-800 border-red-300'
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
        isSelected ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl mb-2">{pose.image}</div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[pose.difficulty]}`}>
            {pose.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{pose.name}</h3>

        {/* Targeted Areas */}
        <div className="mb-4 space-y-2">
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">MUSCLES</p>
            <div className="flex flex-wrap gap-1">
              {pose.targetedMuscles.map((muscle) => (
                <span key={muscle} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  {muscle}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">JOINTS</p>
            <div className="flex flex-wrap gap-1">
              {pose.targetedJoints.map((joint) => (
                <span key={joint} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                  {joint}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions Preview */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 line-clamp-3">{pose.instructions.entry}</p>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            ⏱️ {pose.duration}s
          </span>
        </div>

        {/* Action Button */}
        {onSelect && (
          <button
            onClick={() => onSelect(pose)}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              isSelected
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isSelected ? '✓ Added to Flow' : 'Add to Flow'}
          </button>
        )}
      </div>
    </div>
  );
}

