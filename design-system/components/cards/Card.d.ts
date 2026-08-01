/**
 * @startingPoint section="Componentes" subtitle="4 variantes: default, especialidad, equipo, testimonio" viewport="700x260"
 */
export interface CardProps {
  variant?: 'default' | 'spec' | 'team' | 'quote';
  hoverable?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  media?: React.ReactNode;
  role?: string;
  meta?: string;
  quote?: string;
  author?: string;
  authorMeta?: string;
  children?: React.ReactNode;
}
