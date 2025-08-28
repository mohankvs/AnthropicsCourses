import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'api-fundamentals',
    title: 'Anthropic API Fundamentals',
    description: 'Learn the essentials of working with the Claude SDK: getting an API key, working with model parameters, writing multimodal prompts, streaming responses, etc.',
    path: '/course/api-fundamentals',
    lessons: [
      {
        id: 'getting-started',
        title: '01 Getting Started',
        filename: '01_getting_started.ipynb',
        path: '/course/api-fundamentals/lesson/getting-started',
        courseId: 'api-fundamentals',
        description: 'Learn how to get started with the Anthropic API'
      },
      {
        id: 'messages-format',
        title: '02 Messages Format',
        filename: '02_messages_format.ipynb',
        path: '/course/api-fundamentals/lesson/messages-format',
        courseId: 'api-fundamentals',
        description: 'Understanding the message format for Claude API'
      },
      {
        id: 'models',
        title: '03 Models',
        filename: '03_models.ipynb',
        path: '/course/api-fundamentals/lesson/models',
        courseId: 'api-fundamentals',
        description: 'Overview of available Claude models'
      },
      {
        id: 'parameters',
        title: '04 Parameters',
        filename: '04_parameters.ipynb',
        path: '/course/api-fundamentals/lesson/parameters',
        courseId: 'api-fundamentals',
        description: 'Working with API parameters'
      },
      {
        id: 'streaming',
        title: '05 Streaming',
        filename: '05_Streaming.ipynb',
        path: '/course/api-fundamentals/lesson/streaming',
        courseId: 'api-fundamentals',
        description: 'Implementing streaming responses'
      },
      {
        id: 'vision',
        title: '06 Vision',
        filename: '06_vision.ipynb',
        path: '/course/api-fundamentals/lesson/vision',
        courseId: 'api-fundamentals',
        description: 'Working with vision capabilities'
      }
    ]
  },
  {
    id: 'prompt-engineering-tutorial',
    title: 'Prompt Engineering Interactive Tutorial',
    description: 'A comprehensive step-by-step guide to key prompting techniques.',
    path: '/course/prompt-engineering-tutorial',
    subGroups: [
      {
        id: 'anthropic-1p',
        title: 'Anthropic 1P',
        lessons: [
          {
            id: 'tutorial-how-to',
            title: '00 Tutorial How-To',
            filename: 'Anthropic 1P/00_Tutorial_How-To.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/tutorial-how-to',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'How to use this tutorial'
          },
          {
            id: 'basic-prompt-structure',
            title: '01 Basic Prompt Structure',
            filename: 'Anthropic 1P/01_Basic_Prompt_Structure.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/basic-prompt-structure',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Understanding basic prompt structure'
          },
          {
            id: 'being-clear-direct',
            title: '02 Being Clear and Direct',
            filename: 'Anthropic 1P/02_Being_Clear_and_Direct.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/being-clear-direct',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'How to write clear and direct prompts'
          },
          {
            id: 'assigning-roles',
            title: '03 Assigning Roles (Role Prompting)',
            filename: 'Anthropic 1P/03_Assigning_Roles_Role_Prompting.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/assigning-roles',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Using role prompting techniques'
          },
          {
            id: 'separating-data-instructions',
            title: '04 Separating Data and Instructions',
            filename: 'Anthropic 1P/04_Separating_Data_and_Instructions.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/separating-data-instructions',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'How to separate data from instructions'
          },
          {
            id: 'formatting-output',
            title: '05 Formatting Output and Speaking for Claude',
            filename: 'Anthropic 1P/05_Formatting_Output_and_Speaking_for_Claude.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/formatting-output',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Formatting output and speaking for Claude'
          },
          {
            id: 'thinking-step-by-step',
            title: '06 Precognition (Thinking Step by Step)',
            filename: 'Anthropic 1P/06_Precognition_Thinking_Step_by_Step.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/thinking-step-by-step',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Using step-by-step thinking'
          },
          {
            id: 'few-shot-prompting',
            title: '07 Using Examples (Few-Shot Prompting)',
            filename: 'Anthropic 1P/07_Using_Examples_Few-Shot_Prompting.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/few-shot-prompting',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Few-shot prompting with examples'
          },
          {
            id: 'avoiding-hallucinations',
            title: '08 Avoiding Hallucinations',
            filename: 'Anthropic 1P/08_Avoiding_Hallucinations.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/avoiding-hallucinations',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Techniques to avoid hallucinations'
          },
          {
            id: 'complex-prompts',
            title: '09 Complex Prompts from Scratch',
            filename: 'Anthropic 1P/09_Complex_Prompts_from_Scratch.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/complex-prompts',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Building complex prompts from scratch'
          },
          {
            id: 'chaining-prompts',
            title: '10.1 Appendix: Chaining Prompts',
            filename: 'Anthropic 1P/10.1_Appendix_Chaining Prompts.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/chaining-prompts',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Advanced prompt chaining techniques'
          },
          {
            id: 'tool-use-appendix',
            title: '10.2 Appendix: Tool Use',
            filename: 'Anthropic 1P/10.2_Appendix_Tool Use.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/tool-use-appendix',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Tool use in prompting'
          },
          {
            id: 'search-retrieval',
            title: '10.3 Appendix: Search & Retrieval',
            filename: 'Anthropic 1P/10.3_Appendix_Search & Retrieval.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/search-retrieval',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'anthropic-1p',
            description: 'Search and retrieval techniques'
          }
        ]
      },
      {
        id: 'amazon-bedrock',
        title: 'Amazon Bedrock',
        lessons: [
          {
            id: 'bedrock-tutorial-how-to',
            title: '00 Tutorial How-To',
            filename: 'AmazonBedrock/anthropic/00_Tutorial_How-To.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-tutorial-how-to',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'How to use this tutorial with Amazon Bedrock'
          },
          {
            id: 'bedrock-basic-prompt-structure',
            title: '01 Basic Prompt Structure',
            filename: 'AmazonBedrock/anthropic/01_Basic_Prompt_Structure.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-basic-prompt-structure',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Basic prompt structure with Bedrock'
          },
          {
            id: 'bedrock-being-clear-direct',
            title: '02 Being Clear and Direct',
            filename: 'AmazonBedrock/anthropic/02_Being_Clear_and_Direct.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-being-clear-direct',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Clear and direct prompts with Bedrock'
          },
          {
            id: 'bedrock-assigning-roles',
            title: '03 Assigning Roles (Role Prompting)',
            filename: 'AmazonBedrock/anthropic/03_Assigning_Roles_Role_Prompting.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-assigning-roles',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Role prompting with Bedrock'
          },
          {
            id: 'bedrock-separating-data-instructions',
            title: '04 Separating Data and Instructions',
            filename: 'AmazonBedrock/anthropic/04_Separating_Data_and_Instructions.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-separating-data-instructions',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Separating data and instructions with Bedrock'
          },
          {
            id: 'bedrock-formatting-output',
            title: '05 Formatting Output and Speaking for Claude',
            filename: 'AmazonBedrock/anthropic/05_Formatting_Output_and_Speaking_for_Claude.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-formatting-output',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Output formatting with Bedrock'
          },
          {
            id: 'bedrock-thinking-step-by-step',
            title: '06 Precognition (Thinking Step by Step)',
            filename: 'AmazonBedrock/anthropic/06_Precognition_Thinking_Step_by_Step.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-thinking-step-by-step',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Step-by-step thinking with Bedrock'
          },
          {
            id: 'bedrock-few-shot-prompting',
            title: '07 Using Examples (Few-Shot Prompting)',
            filename: 'AmazonBedrock/anthropic/07_Using_Examples _Few-Shot_Prompting.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-few-shot-prompting',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Few-shot prompting with Bedrock'
          },
          {
            id: 'bedrock-avoiding-hallucinations',
            title: '08 Avoiding Hallucinations',
            filename: 'AmazonBedrock/anthropic/08_Avoiding_Hallucinations.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-avoiding-hallucinations',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Avoiding hallucinations with Bedrock'
          },
          {
            id: 'bedrock-complex-prompts',
            title: '09 Complex Prompts from Scratch',
            filename: 'AmazonBedrock/anthropic/09_Complex_Prompts_from_Scratch.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-complex-prompts',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Complex prompts with Bedrock'
          },
          {
            id: 'bedrock-chaining-prompts',
            title: '10.1 Appendix: Chaining Prompts',
            filename: 'AmazonBedrock/anthropic/10_1_Appendix_Chaining_Prompts.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-chaining-prompts',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Prompt chaining with Bedrock'
          },
          {
            id: 'bedrock-tool-use',
            title: '10.2 Appendix: Tool Use',
            filename: 'AmazonBedrock/anthropic/10_2_Appendix_Tool_Use.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-tool-use',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Tool use with Bedrock'
          },
          {
            id: 'bedrock-performance-evaluations',
            title: '10.3 Appendix: Empirical Performance Evaluations',
            filename: 'AmazonBedrock/anthropic/10_3_Appendix_Empirical_Performance_Evaluations.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-performance-evaluations',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Performance evaluations with Bedrock'
          },
          {
            id: 'bedrock-search-retrieval',
            title: '10.4 Appendix: Search and Retrieval',
            filename: 'AmazonBedrock/anthropic/10_4_Appendix_Search_and_Retrieval.ipynb',
            path: '/course/prompt-engineering-tutorial/lesson/bedrock-search-retrieval',
            courseId: 'prompt-engineering-tutorial',
            subGroupId: 'amazon-bedrock',
            description: 'Search and retrieval with Bedrock'
          }
        ]
      }
    ],
    lessons: [] // Will be populated from subGroups
  },
  {
    id: 'real-world-prompting',
    title: 'Real World Prompting',
    description: 'Learn how to incorporate prompting techniques into complex, real world prompts.',
    path: '/course/real-world-prompting',
    lessons: [
      {
        id: 'prompting-recap',
        title: '01 Prompting Recap',
        filename: '01_prompting_recap.ipynb',
        path: '/course/real-world-prompting/lesson/prompting-recap',
        courseId: 'real-world-prompting',
        description: 'Recap of prompting fundamentals'
      },
      {
        id: 'medical-prompt',
        title: '02 Medical Prompt',
        filename: '02_medical_prompt.ipynb',
        path: '/course/real-world-prompting/lesson/medical-prompt',
        courseId: 'real-world-prompting',
        description: 'Real-world medical prompting example'
      },
      {
        id: 'prompt-engineering',
        title: '03 Prompt Engineering',
        filename: '03_prompt_engineering.ipynb',
        path: '/course/real-world-prompting/lesson/prompt-engineering',
        courseId: 'real-world-prompting',
        description: 'Advanced prompt engineering techniques'
      },
      {
        id: 'call-summarizer',
        title: '04 Call Summarizer',
        filename: '04_call_summarizer.ipynb',
        path: '/course/real-world-prompting/lesson/call-summarizer',
        courseId: 'real-world-prompting',
        description: 'Building a call summarizer'
      },
      {
        id: 'customer-support-ai',
        title: '05 Customer Support AI',
        filename: '05_customer_support_ai.ipynb',
        path: '/course/real-world-prompting/lesson/customer-support-ai',
        courseId: 'real-world-prompting',
        description: 'Creating customer support AI'
      }
    ]
  },
  {
    id: 'prompt-evaluations',
    title: 'Prompt Evaluations',
    description: 'Learn how to write production prompt evaluations to measure the quality of your prompts.',
    path: '/course/prompt-evaluations',
    lessons: [
      {
        id: 'intro-to-evals',
        title: '01 Intro to Evals',
        filename: '01_intro_to_evals/01_intro_to_evals.ipynb',
        path: '/course/prompt-evaluations/lesson/intro-to-evals',
        courseId: 'prompt-evaluations',
        description: 'Introduction to prompt evaluations'
      },
      {
        id: 'workbench-evals',
        title: '02 Workbench Evals',
        filename: '02_workbench_evals/02_workbench_evals.ipynb',
        path: '/course/prompt-evaluations/lesson/workbench-evals',
        courseId: 'prompt-evaluations',
        description: 'Using workbench for evaluations'
      },
      {
        id: 'code-graded-evals',
        title: '03 Code Graded Evals',
        filename: '03_code_graded_evals/03_code_graded.ipynb',
        path: '/course/prompt-evaluations/lesson/code-graded-evals',
        courseId: 'prompt-evaluations',
        description: 'Code-graded evaluation techniques'
      },
      {
        id: 'classification-evals',
        title: '04 Code Graded Classification Evals',
        filename: '04_code_graded_classification_evals/04_code_graded_classification_evals.ipynb',
        path: '/course/prompt-evaluations/lesson/classification-evals',
        courseId: 'prompt-evaluations',
        description: 'Classification evaluation methods'
      },
      {
        id: 'animals-code-graded',
        title: '05 Prompt Foo Code Graded Animals',
        filename: '05_prompt_foo_code_graded_animals/lesson.ipynb',
        path: '/course/prompt-evaluations/lesson/animals-code-graded',
        courseId: 'prompt-evaluations',
        description: 'Code graded animals evaluation'
      },
      {
        id: 'classification-code-graded',
        title: '06 Prompt Foo Code Graded Classification',
        filename: '06_prompt_foo_code_graded_classification/lesson.ipynb',
        path: '/course/prompt-evaluations/lesson/classification-code-graded',
        courseId: 'prompt-evaluations',
        description: 'Code graded classification evaluation'
      },
      {
        id: 'custom-graders',
        title: '07 Prompt Foo Custom Graders',
        filename: '07_prompt_foo_custom_graders/lesson.ipynb',
        path: '/course/prompt-evaluations/lesson/custom-graders',
        courseId: 'prompt-evaluations',
        description: 'Creating custom graders'
      },
      {
        id: 'model-graded',
        title: '08 Prompt Foo Model Graded',
        filename: '08_prompt_foo_model_graded/lesson.ipynb',
        path: '/course/prompt-evaluations/lesson/model-graded',
        courseId: 'prompt-evaluations',
        description: 'Model-graded evaluations'
      },
      {
        id: 'custom-model-graded',
        title: '09 Custom Model Graded Prompt Foo',
        filename: '09_custom_model_graded_prompt_foo/lesson.ipynb',
        path: '/course/prompt-evaluations/lesson/custom-model-graded',
        courseId: 'prompt-evaluations',
        description: 'Custom model graded evaluations'
      }
    ]
  },
  {
    id: 'tool-use',
    title: 'Tool Use',
    description: 'Learn everything you need to know to implement tool use successfully in your workflows with Claude.',
    path: '/course/tool-use',
    lessons: [
      {
        id: 'tool-use-overview',
        title: '01 Tool Use Overview',
        filename: '01_tool_use_overview.ipynb',
        path: '/course/tool-use/lesson/tool-use-overview',
        courseId: 'tool-use',
        description: 'Overview of tool use with Claude'
      },
      {
        id: 'first-simple-tool',
        title: '02 Your First Simple Tool',
        filename: '02_your_first_simple_tool.ipynb',
        path: '/course/tool-use/lesson/first-simple-tool',
        courseId: 'tool-use',
        description: 'Creating your first simple tool'
      },
      {
        id: 'structured-outputs',
        title: '03 Structured Outputs',
        filename: '03_structured_outputs.ipynb',
        path: '/course/tool-use/lesson/structured-outputs',
        courseId: 'tool-use',
        description: 'Working with structured outputs'
      },
      {
        id: 'complete-workflow',
        title: '04 Complete Workflow',
        filename: '04_complete_workflow.ipynb',
        path: '/course/tool-use/lesson/complete-workflow',
        courseId: 'tool-use',
        description: 'Building a complete tool workflow'
      },
      {
        id: 'tool-choice',
        title: '05 Tool Choice',
        filename: '05_tool_choice.ipynb',
        path: '/course/tool-use/lesson/tool-choice',
        courseId: 'tool-use',
        description: 'Understanding tool choice mechanisms'
      },
      {
        id: 'chatbot-with-tools',
        title: '06 Chatbot with Multiple Tools',
        filename: '06_chatbot_with_multiple_tools.ipynb',
        path: '/course/tool-use/lesson/chatbot-with-tools',
        courseId: 'tool-use',
        description: 'Building chatbots with multiple tools'
      }
    ]
  }
];

// Flatten lessons from subGroups for prompt-engineering-tutorial
const promptEngineeringCourse = courses.find(c => c.id === 'prompt-engineering-tutorial');
if (promptEngineeringCourse && promptEngineeringCourse.subGroups) {
  promptEngineeringCourse.lessons = promptEngineeringCourse.subGroups.flatMap(subGroup => subGroup.lessons);
}