import type { IconType } from 'react-icons';
import { FaBrain, FaCss3Alt, FaFileWord, FaJava, FaLaptopCode, FaChartColumn, FaMicrophone } from 'react-icons/fa6';
import {
  SiAndroidstudio,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiQgis,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export type SkillCategory = 'Development' | 'Backend' | 'AI' | 'Tools';
export const skillCategories = ['All', 'Development', 'Backend', 'AI', 'Tools'] as const;

export interface SkillTile {
  name: string;
  category: SkillCategory;
  /** Short label shown on the yellow chip under the name. */
  label: string;
  icon: IconType;
  /** Brand colour for the icon (kept readable on both themes). */
  color: string;
}

export const skillTiles: SkillTile[] = [
  { name: 'React', category: 'Development', label: 'Frontend Web', icon: SiReact, color: '#00b3d6' },
  { name: 'Next.js', category: 'Development', label: 'Frontend Web', icon: SiNextdotjs, color: '#111111' },
  { name: 'TypeScript', category: 'Development', label: 'Frontend Web', icon: SiTypescript, color: '#3178c6' },
  { name: 'JavaScript', category: 'Development', label: 'Frontend Web', icon: SiJavascript, color: '#e0b800' },
  { name: 'HTML5', category: 'Development', label: 'Frontend Web', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', category: 'Development', label: 'Frontend Web', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'Tailwind', category: 'Development', label: 'Frontend Web', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'Android Studio', category: 'Development', label: 'Mobile', icon: SiAndroidstudio, color: '#3ddc84' },
  { name: 'Kotlin', category: 'Development', label: 'Mobile', icon: SiKotlin, color: '#7f52ff' },
  { name: 'Node.js', category: 'Backend', label: 'Backend', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'Express', category: 'Backend', label: 'Backend', icon: SiExpress, color: '#444444' },
  { name: 'Python', category: 'Backend', label: 'Backend', icon: SiPython, color: '#3776ab' },
  { name: 'Flask', category: 'Backend', label: 'Backend', icon: SiFlask, color: '#444444' },
  { name: 'FastAPI', category: 'Backend', label: 'Backend', icon: SiFastapi, color: '#009688' },
  { name: 'Laravel', category: 'Backend', label: 'Backend', icon: SiLaravel, color: '#ff2d20' },
  { name: 'PHP', category: 'Backend', label: 'Backend', icon: SiPhp, color: '#777bb4' },
  { name: 'Java', category: 'Backend', label: 'Backend', icon: FaJava, color: '#e76f00' },
  { name: 'Supabase', category: 'Backend', label: 'Database', icon: SiSupabase, color: '#3ecf8e' },
  { name: 'PostgreSQL', category: 'Backend', label: 'Database', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', category: 'Backend', label: 'Database', icon: SiMysql, color: '#4479a1' },
  { name: 'Machine Learning', category: 'AI', label: 'AI & ML', icon: SiScikitlearn, color: '#f7931e' },
  { name: 'Deep Learning', category: 'AI', label: 'AI & ML', icon: SiPytorch, color: '#ee4c2c' },
  { name: 'Face Recognition', category: 'AI', label: 'Computer Vision', icon: FaBrain, color: '#b5121b' },
  { name: 'LLM Integration', category: 'AI', label: 'AI & ML', icon: FaMicrophone, color: '#7c3aed' },
  { name: 'Pandas', category: 'AI', label: 'Data', icon: SiPandas, color: '#150458' },
  { name: 'GIS (QGIS)', category: 'AI', label: 'Data', icon: SiQgis, color: '#589632' },
  { name: 'Git', category: 'Tools', label: 'Version Control', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', category: 'Tools', label: 'Version Control', icon: SiGithub, color: '#181717' },
  { name: 'Vercel', category: 'Tools', label: 'Deployment', icon: SiVercel, color: '#111111' },
  { name: 'Postman', category: 'Tools', label: 'API Testing', icon: SiPostman, color: '#ff6c37' },
  { name: 'Google Colab', category: 'Tools', label: 'Notebooks', icon: SiGooglecolab, color: '#f9ab00' },
  { name: 'VS Code', category: 'Tools', label: 'Editor', icon: FaLaptopCode, color: '#0078d4' },
  { name: 'Microsoft Office', category: 'Tools', label: 'Documents', icon: FaFileWord, color: '#2b579a' },
  { name: 'Data Analysis', category: 'AI', label: 'Data', icon: FaChartColumn, color: '#b5121b' },
];
