'use client';

import { useState } from 'react';
import { yogaPoses, YogaPose, DifficultyLevel } from '@/data/poses';
import PoseCard from '@/components/PoseCard';
import PoseDetail from '@/components/PoseDetail';
import FlowBuilder from '@/components/FlowBuilder';
import SavedFlows from '@/components/SavedFlows';

type ViewMode = 'browse' | 'flow' | 'saved';

export default function YogaApp() {
  const [viewMode, setViewMode] = useState<ViewMode>('browse');
  const [selectedPoses, setSelectedPoses] = useState<YogaPose[]>([]);
  const [detailPose, setDetailPose] = useState<YogaPose | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'All'>('All');

  // Filter poses
  const filteredPoses = yogaPoses.filter(pose => {
    const matchesSearch = pose.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pose.targetedMuscles.some(m => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         pose.targetedJoints.some(j => j.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = difficultyFilter === 'All' || pose.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const handleSelectPose = (pose: YogaPose) => {
    if (selectedPoses.find(p => p.id === pose.id)) {
      setSelectedPoses(selectedPoses.filter(p => p.id !== pose.id));
    } else {
      setSelectedPoses([...selectedPoses, pose]);
    }
  };

  const handleRemovePose = (poseId: string) => {
    setSelectedPoses(selectedPoses.filter(p => p.id !== poseId));
  };

  const handleClearFlow = () => {
    setSelectedPoses([]);
  };

  const handleReorderPoses = (poses: YogaPose[]) => {
    setSelectedPoses(poses);
  };

  const handleLoadFlow = (poses: YogaPose[]) => {
    setSelectedPoses(poses);
    setViewMode('flow');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🧘 Go With The Flow</h1>
              <p className="text-sm text-gray-600 mt-1">Your personalized yoga practice builder</p>
            </div>
            
            {/* Navigation */}
            <nav className="flex gap-2">
              <button
                onClick={() => setViewMode('browse')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'browse'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Browse Poses
              </button>
              <button
                onClick={() => setViewMode('flow')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors relative ${
                  viewMode === 'flow'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Build Flow
                {selectedPoses.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {selectedPoses.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setViewMode('saved')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'saved'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Saved Flows
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'browse' && (
          <>
            {/* Search and Filters */}
            <div className="mb-8 bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search poses by name, muscles, or joints..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficultyFilter(level)}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        difficultyFilter === level
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <p>Showing {filteredPoses.length} of {yogaPoses.length} poses</p>
                {selectedPoses.length > 0 && (
                  <p className="font-medium text-blue-600">
                    {selectedPoses.length} poses added to flow
                  </p>
                )}
              </div>
            </div>

            {/* Pose Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPoses.map((pose) => (
                <div key={pose.id} onClick={() => setDetailPose(pose)} className="cursor-pointer">
                  <PoseCard
                    pose={pose}
                    onSelect={handleSelectPose}
                    isSelected={selectedPoses.some(p => p.id === pose.id)}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {viewMode === 'flow' && (
          <FlowBuilder
            selectedPoses={selectedPoses}
            onRemovePose={handleRemovePose}
            onClearFlow={handleClearFlow}
            onReorderPoses={handleReorderPoses}
          />
        )}

        {viewMode === 'saved' && (
          <SavedFlows onLoadFlow={handleLoadFlow} />
        )}
      </main>

      {/* Pose Detail Modal */}
      {detailPose && (
        <PoseDetail pose={detailPose} onClose={() => setDetailPose(null)} />
      )}
    </div>
  );
}

