// Course content metadata and descriptions
export const courseDescriptions = {
  'api-fundamentals': {
    overview: 'Master the fundamentals of working with the Anthropic API and Claude SDK.',
    prerequisites: 'Basic programming knowledge',
    duration: '2-3 hours',
    difficulty: 'Beginner'
  },
  'prompt-engineering-tutorial': {
    overview: 'Comprehensive guide to prompt engineering techniques with hands-on examples.',
    prerequisites: 'Basic understanding of AI/LLMs',
    duration: '4-6 hours',
    difficulty: 'Beginner to Intermediate'
  },
  'real-world-prompting': {
    overview: 'Apply prompting techniques to real-world scenarios and complex use cases.',
    prerequisites: 'Completion of Prompt Engineering Tutorial',
    duration: '3-4 hours',
    difficulty: 'Intermediate'
  },
  'prompt-evaluations': {
    overview: 'Learn to measure and improve prompt quality with evaluation frameworks.',
    prerequisites: 'Experience with prompting',
    duration: '4-5 hours',
    difficulty: 'Intermediate to Advanced'
  },
  'tool-use': {
    overview: 'Implement tool use capabilities in your Claude-powered applications.',
    prerequisites: 'API Fundamentals knowledge',
    duration: '3-4 hours',
    difficulty: 'Intermediate'
  }
};

export const courseOrder = [
  'api-fundamentals',
  'prompt-engineering-tutorial', 
  'real-world-prompting',
  'prompt-evaluations',
  'tool-use'
];

export const courseTags = {
  'api-fundamentals': ['API', 'SDK', 'Basics', 'Getting Started'],
  'prompt-engineering-tutorial': ['Prompting', 'Tutorial', 'Interactive', 'Techniques'],
  'real-world-prompting': ['Advanced', 'Real-world', 'Applications', 'Complex'],
  'prompt-evaluations': ['Evaluation', 'Testing', 'Quality', 'Metrics'],
  'tool-use': ['Tools', 'Integration', 'Workflows', 'Advanced']
};