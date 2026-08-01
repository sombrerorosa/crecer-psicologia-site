/**
 * @startingPoint section="Componentes" subtitle="Etiquetas de estado y categoría, 6 tonos" viewport="700x180"
 */
export interface BadgeProps {
  tone?: 'forest' | 'soft' | 'sand' | 'outline' | 'success' | 'error';
  dot?: boolean;
  children: React.ReactNode;
}
export interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
}
