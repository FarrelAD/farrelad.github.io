export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/farrelad', icon: 'mdi:linkedin' },
  { name: 'GitHub', url: 'https://github.com/FarrelAD', icon: 'mdi:github' },
  { name: 'GitLab', url: 'https://gitlab.com/FarrelAD', icon: 'mdi:gitlab' },
  { name: 'Medium', url: 'https://medium.com/@farrel-ad', icon: 'mdi:medium' },
  { name: 'Kaggle', url: 'https://kaggle.com/farrelad', icon: 'simple-icons:kaggle' },
  { name: 'Hugging Face', url: 'https://huggingface.co/FarrelAD', icon: 'simple-icons:huggingface' }
];
