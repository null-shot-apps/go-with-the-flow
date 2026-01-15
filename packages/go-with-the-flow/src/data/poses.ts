export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface YogaPose {
  id: string;
  name: string;
  image: string;
  difficulty: DifficultyLevel;
  targetedMuscles: string[];
  targetedJoints: string[];
  instructions: {
    entry: string;
    hold: string;
    exit: string;
  };
  benefits: string[];
  duration: number; // suggested duration in seconds
}

export const yogaPoses: YogaPose[] = [
  {
    id: 'mountain-pose',
    name: 'Mountain Pose (Tadasana)',
    image: '🧘',
    difficulty: 'Beginner',
    targetedMuscles: ['Core', 'Legs', 'Back'],
    targetedJoints: ['Ankles', 'Knees', 'Hips'],
    instructions: {
      entry: 'Stand with feet hip-width apart, arms at sides. Distribute weight evenly across both feet. Engage thighs and lift kneecaps.',
      hold: 'Draw shoulders back and down. Lengthen spine upward. Breathe deeply, feeling grounded through feet while reaching crown toward sky.',
      exit: 'Relax shoulders, release engagement. Step feet together or transition to next pose.'
    },
    benefits: ['Improves posture', 'Strengthens legs', 'Increases body awareness'],
    duration: 30
  },
  {
    id: 'downward-dog',
    name: 'Downward-Facing Dog (Adho Mukha Svanasana)',
    image: '🐕',
    difficulty: 'Beginner',
    targetedMuscles: ['Shoulders', 'Hamstrings', 'Calves', 'Arms'],
    targetedJoints: ['Wrists', 'Shoulders', 'Hips', 'Ankles'],
    instructions: {
      entry: 'Start on hands and knees. Spread fingers wide, press palms firmly. Tuck toes and lift hips up and back.',
      hold: 'Press chest toward thighs. Keep spine long. Press heels toward floor. Relax neck and let head hang.',
      exit: 'Bend knees, lower hips back to hands and knees, or step forward to standing.'
    },
    benefits: ['Stretches hamstrings', 'Strengthens arms', 'Energizes body'],
    duration: 45
  },
  {
    id: 'warrior-one',
    name: 'Warrior I (Virabhadrasana I)',
    image: '⚔️',
    difficulty: 'Beginner',
    targetedMuscles: ['Quadriceps', 'Glutes', 'Core', 'Shoulders'],
    targetedJoints: ['Hips', 'Knees', 'Ankles', 'Shoulders'],
    instructions: {
      entry: 'From standing, step right foot back 3-4 feet. Turn right foot out 45 degrees. Bend left knee over ankle. Raise arms overhead.',
      hold: 'Square hips forward. Keep back leg strong. Reach up through fingertips. Gaze forward or up.',
      exit: 'Lower arms, straighten front leg. Step feet together or transition to next warrior pose.'
    },
    benefits: ['Builds leg strength', 'Opens chest', 'Improves balance'],
    duration: 40
  },
  {
    id: 'warrior-two',
    name: 'Warrior II (Virabhadrasana II)',
    image: '🗡️',
    difficulty: 'Beginner',
    targetedMuscles: ['Quadriceps', 'Inner thighs', 'Shoulders', 'Core'],
    targetedJoints: ['Hips', 'Knees', 'Ankles', 'Shoulders'],
    instructions: {
      entry: 'From Warrior I, open hips to side. Extend arms parallel to floor. Turn head to gaze over front hand.',
      hold: 'Keep front knee bent over ankle. Press into outer edge of back foot. Shoulders stacked over hips.',
      exit: 'Straighten front leg, lower arms, or transition to reverse warrior or triangle pose.'
    },
    benefits: ['Strengthens legs', 'Opens hips', 'Builds stamina'],
    duration: 40
  },
  {
    id: 'tree-pose',
    name: 'Tree Pose (Vrksasana)',
    image: '🌳',
    difficulty: 'Beginner',
    targetedMuscles: ['Core', 'Legs', 'Ankles'],
    targetedJoints: ['Ankles', 'Knees', 'Hips'],
    instructions: {
      entry: 'Stand on left leg. Place right foot on inner left thigh or calf (avoid knee). Bring hands to prayer at heart or overhead.',
      hold: 'Find a focal point. Engage core. Press foot and leg together. Breathe steadily.',
      exit: 'Lower arms, release foot to floor with control. Repeat on other side.'
    },
    benefits: ['Improves balance', 'Strengthens ankles', 'Increases focus'],
    duration: 30
  },
  {
    id: 'childs-pose',
    name: "Child's Pose (Balasana)",
    image: '🙇',
    difficulty: 'Beginner',
    targetedMuscles: ['Back', 'Hips', 'Shoulders'],
    targetedJoints: ['Knees', 'Ankles', 'Hips'],
    instructions: {
      entry: 'Kneel on floor. Sit back on heels. Fold forward, extending arms ahead or alongside body.',
      hold: 'Rest forehead on mat. Breathe into back body. Allow hips to sink toward heels.',
      exit: 'Walk hands back toward body. Slowly roll up to seated position, head comes up last.'
    },
    benefits: ['Relieves stress', 'Stretches back', 'Calms mind'],
    duration: 60
  },
  {
    id: 'triangle-pose',
    name: 'Triangle Pose (Trikonasana)',
    image: '📐',
    difficulty: 'Intermediate',
    targetedMuscles: ['Hamstrings', 'Obliques', 'Shoulders', 'Hips'],
    targetedJoints: ['Hips', 'Knees', 'Ankles', 'Spine'],
    instructions: {
      entry: 'From Warrior II, straighten front leg. Reach forward with front arm, then lower to shin, ankle, or block. Extend top arm up.',
      hold: 'Stack shoulders. Gaze up at top hand or forward. Keep both legs strong. Lengthen both sides of torso.',
      exit: 'Engage core, reach up with top arm to rise. Return to Warrior II or standing.'
    },
    benefits: ['Stretches legs and torso', 'Opens chest', 'Improves balance'],
    duration: 35
  },
  {
    id: 'plank-pose',
    name: 'Plank Pose (Phalakasana)',
    image: '📏',
    difficulty: 'Intermediate',
    targetedMuscles: ['Core', 'Arms', 'Shoulders', 'Back'],
    targetedJoints: ['Wrists', 'Shoulders', 'Spine'],
    instructions: {
      entry: 'From hands and knees, step feet back. Align shoulders over wrists. Body forms straight line from head to heels.',
      hold: 'Engage core strongly. Press away from floor. Keep neck neutral. Breathe steadily.',
      exit: 'Lower knees to floor, or transition to chaturanga or downward dog.'
    },
    benefits: ['Builds core strength', 'Strengthens arms', 'Improves posture'],
    duration: 30
  },
  {
    id: 'cobra-pose',
    name: 'Cobra Pose (Bhujangasana)',
    image: '🐍',
    difficulty: 'Intermediate',
    targetedMuscles: ['Back', 'Chest', 'Shoulders', 'Core'],
    targetedJoints: ['Spine', 'Shoulders', 'Hips'],
    instructions: {
      entry: 'Lie on belly. Place hands under shoulders. Press tops of feet into mat. Lift chest using back muscles.',
      hold: 'Keep elbows slightly bent. Draw shoulders back. Gaze forward or slightly up. Engage legs.',
      exit: 'Slowly lower chest to mat. Turn head to one side, or press back to child\'s pose.'
    },
    benefits: ['Strengthens spine', 'Opens chest', 'Energizes body'],
    duration: 30
  },
  {
    id: 'bridge-pose',
    name: 'Bridge Pose (Setu Bandha Sarvangasana)',
    image: '🌉',
    difficulty: 'Intermediate',
    targetedMuscles: ['Glutes', 'Hamstrings', 'Back', 'Core'],
    targetedJoints: ['Hips', 'Knees', 'Spine', 'Shoulders'],
    instructions: {
      entry: 'Lie on back, knees bent, feet hip-width apart. Press into feet and lift hips. Interlace fingers under back.',
      hold: 'Press into shoulders and feet. Lift hips higher. Keep knees over ankles. Breathe into chest.',
      exit: 'Release hands. Slowly lower spine to mat, vertebra by vertebra.'
    },
    benefits: ['Strengthens back', 'Opens chest', 'Calms mind'],
    duration: 40
  },
  {
    id: 'pigeon-pose',
    name: 'Pigeon Pose (Eka Pada Rajakapotasana)',
    image: '🕊️',
    difficulty: 'Intermediate',
    targetedMuscles: ['Hip flexors', 'Glutes', 'Piriformis'],
    targetedJoints: ['Hips', 'Knees', 'Spine'],
    instructions: {
      entry: 'From downward dog, bring right knee forward behind right wrist. Extend left leg back. Square hips forward.',
      hold: 'Walk hands forward to deepen stretch, or stay upright. Breathe into hip. Keep hips level.',
      exit: 'Walk hands back, tuck back toes, lift hips to downward dog. Repeat other side.'
    },
    benefits: ['Deep hip stretch', 'Releases tension', 'Improves flexibility'],
    duration: 60
  },
  {
    id: 'boat-pose',
    name: 'Boat Pose (Navasana)',
    image: '⛵',
    difficulty: 'Intermediate',
    targetedMuscles: ['Core', 'Hip flexors', 'Spine'],
    targetedJoints: ['Hips', 'Spine'],
    instructions: {
      entry: 'Sit with knees bent, feet on floor. Lean back slightly, lift feet. Extend arms forward parallel to floor. Straighten legs if possible.',
      hold: 'Balance on sit bones. Keep chest lifted. Engage core strongly. Breathe steadily.',
      exit: 'Bend knees, lower feet to floor. Release arms.'
    },
    benefits: ['Strengthens core', 'Improves balance', 'Builds confidence'],
    duration: 25
  },
  {
    id: 'crow-pose',
    name: 'Crow Pose (Bakasana)',
    image: '🦅',
    difficulty: 'Advanced',
    targetedMuscles: ['Core', 'Arms', 'Shoulders', 'Wrists'],
    targetedJoints: ['Wrists', 'Elbows', 'Shoulders'],
    instructions: {
      entry: 'Squat with feet together. Place hands shoulder-width apart. Bend elbows, place knees on upper arms. Shift weight forward.',
      hold: 'Lift feet off floor one at a time or together. Round upper back. Gaze forward. Engage core strongly.',
      exit: 'Lower feet to floor with control. Come to standing or forward fold.'
    },
    benefits: ['Builds arm strength', 'Improves balance', 'Increases focus'],
    duration: 20
  },
  {
    id: 'headstand',
    name: 'Headstand (Sirsasana)',
    image: '🤸',
    difficulty: 'Advanced',
    targetedMuscles: ['Core', 'Shoulders', 'Arms', 'Back'],
    targetedJoints: ['Shoulders', 'Spine', 'Hips'],
    instructions: {
      entry: 'Kneel, interlace fingers, place forearms on mat. Place crown of head on mat. Straighten legs, walk feet toward head. Lift legs up.',
      hold: 'Engage core strongly. Press into forearms. Keep legs together and active. Breathe steadily.',
      exit: 'Lower legs with control. Rest in child\'s pose for several breaths.'
    },
    benefits: ['Improves circulation', 'Builds strength', 'Calms mind'],
    duration: 30
  },
  {
    id: 'wheel-pose',
    name: 'Wheel Pose (Urdhva Dhanurasana)',
    image: '🎡',
    difficulty: 'Advanced',
    targetedMuscles: ['Back', 'Shoulders', 'Chest', 'Legs', 'Arms'],
    targetedJoints: ['Spine', 'Shoulders', 'Wrists', 'Hips'],
    instructions: {
      entry: 'Lie on back, bend knees, feet hip-width apart. Place hands by ears, fingers toward shoulders. Press into hands and feet, lift hips and chest.',
      hold: 'Straighten arms as much as possible. Press into feet. Lift hips higher. Breathe into chest.',
      exit: 'Tuck chin, slowly lower down. Hug knees to chest. Rest.'
    },
    benefits: ['Deep backbend', 'Opens chest', 'Energizes body'],
    duration: 25
  },
  {
    id: 'king-dancer',
    name: 'King Dancer Pose (Natarajasana)',
    image: '💃',
    difficulty: 'Advanced',
    targetedMuscles: ['Quadriceps', 'Hip flexors', 'Shoulders', 'Back'],
    targetedJoints: ['Ankles', 'Knees', 'Hips', 'Shoulders', 'Spine'],
    instructions: {
      entry: 'Stand on left leg. Bend right knee, hold right foot with right hand. Reach left arm forward and up. Kick foot into hand, lean forward.',
      hold: 'Keep standing leg strong. Lift chest. Kick back leg higher. Find balance. Gaze forward.',
      exit: 'Slowly release foot, lower leg. Return to mountain pose. Repeat other side.'
    },
    benefits: ['Improves balance', 'Opens chest', 'Strengthens legs'],
    duration: 30
  },
  {
    id: 'side-plank',
    name: 'Side Plank (Vasisthasana)',
    image: '📐',
    difficulty: 'Advanced',
    targetedMuscles: ['Obliques', 'Shoulders', 'Arms', 'Legs'],
    targetedJoints: ['Wrists', 'Shoulders', 'Spine', 'Hips'],
    instructions: {
      entry: 'From plank, shift weight to right hand and outer edge of right foot. Stack left foot on right. Lift left arm up.',
      hold: 'Lift hips high. Engage core and legs. Stack shoulders. Gaze up or forward.',
      exit: 'Lower left arm, return to plank. Repeat other side.'
    },
    benefits: ['Strengthens core', 'Improves balance', 'Builds arm strength'],
    duration: 25
  },
  {
    id: 'firefly-pose',
    name: 'Firefly Pose (Tittibhasana)',
    image: '🔥',
    difficulty: 'Advanced',
    targetedMuscles: ['Core', 'Arms', 'Hamstrings', 'Inner thighs'],
    targetedJoints: ['Wrists', 'Shoulders', 'Hips'],
    instructions: {
      entry: 'Squat with feet wider than hips. Place hands between feet. Shift weight to hands, hook upper arms behind thighs. Lift feet off floor.',
      hold: 'Straighten legs as much as possible. Engage core. Press into hands. Gaze forward.',
      exit: 'Bend knees, lower feet to floor. Come to standing or forward fold.'
    },
    benefits: ['Builds arm strength', 'Stretches hamstrings', 'Improves balance'],
    duration: 20
  },
  {
    id: 'corpse-pose',
    name: 'Corpse Pose (Savasana)',
    image: '🧘‍♀️',
    difficulty: 'Beginner',
    targetedMuscles: ['Full body relaxation'],
    targetedJoints: ['All joints release'],
    instructions: {
      entry: 'Lie on back. Extend legs, feet fall open naturally. Arms at sides, palms up. Close eyes.',
      hold: 'Release all tension. Let body sink into floor. Breathe naturally. Stay present and relaxed.',
      exit: 'Deepen breath. Wiggle fingers and toes. Roll to one side. Slowly press up to seated.'
    },
    benefits: ['Deep relaxation', 'Reduces stress', 'Integrates practice'],
    duration: 300
  }
];

