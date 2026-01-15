'use client';

import { YogaPose } from '@/data/poses';

interface PoseDetailProps {
  pose: YogaPose;
  onClose: () => void;
}

export default function PoseDetail({ pose, onClose }: PoseDetailProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Advanced: 'bg-red-100 text-red-800 border-red-300'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="text-6xl">{pose.image}</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{pose.name}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${difficultyColors[pose.difficulty]}`}>
                {pose.difficulty}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Targeted Areas */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-bold text-gray-600 mb-2">TARGETED MUSCLES</h3>
              <div className="flex flex-wrap gap-2">
                {pose.targetedMuscles.map((muscle) => (
                  <span key={muscle} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-lg font-medium">
                    {muscle}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-600 mb-2">TARGETED JOINTS</h3>
              <div className="flex flex-wrap gap-2">
                {pose.targetedJoints.map((joint) => (
                  <span key={joint} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-lg font-medium">
                    {joint}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Instructions</h3>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h4 className="font-semibold text-green-900 mb-2">🟢 Entry</h4>
                <p className="text-gray-700">{pose.instructions.entry}</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-900 mb-2">🔵 Hold</h4>
                <p className="text-gray-700">{pose.instructions.hold}</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <h4 className="font-semibold text-orange-900 mb-2">🟠 Exit</h4>
                <p className="text-gray-700">{pose.instructions.exit}</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits</h3>
            <ul className="space-y-2">
              {pose.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Duration */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Suggested Duration:</span> {pose.duration} seconds ({Math.floor(pose.duration / 60)}:{(pose.duration % 60).toString().padStart(2, '0')} minutes)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

