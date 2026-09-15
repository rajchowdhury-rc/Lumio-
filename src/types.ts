export interface TeamUseCase {
  id: string;
  title: string;
  description: string;
  category: 'Strategy' | 'Marketing' | 'Design' | 'Sales';
  image: string;
}

export interface UpdateArticle {
  id: string;
  tag: string;
  date: string;
  title: string;
  summary: string;
  image: string;
  readTime: string;
}

export interface BrandOSFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  previewFile: {
    name: string;
    type: string;
    updated: string;
    size: string;
  };
}

export interface StudioTemplate {
  id: string;
  label: string;
  prompt: string;
  output: {
    headline: string;
    body: string;
    toneScore: string;
    suggestedChannels: string[];
  };
}
