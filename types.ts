import { LucideIcon } from 'lucide-react';

export interface BotService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}