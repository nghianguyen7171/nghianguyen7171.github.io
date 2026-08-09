export type Lecture = {
  title: string;
  url: string;
  description: string;
};

export const lectures: Lecture[] = [
  {
    title: 'Introduction to Artificial Intelligence',
    url: 'https://nghianguyen7171.github.io/Intro_to_AI/#home',
    description: 'Search, logic, neural networks, computer vision, and NLP fundamentals.',
  },
  {
    title: 'Basic Data Science in Economics and Business',
    url: 'https://nghianguyen7171.github.io/DS_for_Bussiness/#home',
    description: 'Data preprocessing, statistical analysis, visualization, and predictive modeling.',
  },
  {
    title: 'Data Analysis with Excel',
    url: 'https://nghianguyen7171.github.io/excel_course/',
    description: 'Spreadsheet-based data analysis for business and economics workflows.',
  },
  {
    title: 'Time Series Analysis and Forecasting',
    url: 'https://nghianguyen7171.github.io/ts_course/',
    description: 'Classical and modern methods for temporal data and forecasting.',
  },
  {
    title: 'Data Mining',
    url: 'https://nghianguyen7171.github.io/Data_mining/',
    description: 'CRISP-DM lifecycle, association, clustering, classification, and regression with Orange and Python.',
  },
];
