/**
 * @startingPoint section="Componentes" subtitle="Botón con 5 variantes, 3 tamaños y estados carga/disabled" viewport="700x260"
 */
export interface ButtonProps {
  /** Estilo visual */
  variant?: 'primary' | 'secondary' | 'soft' | 'sand' | 'ghost';
  /** Tamaño */
  size?: 'sm' | 'md' | 'lg';
  /** Ícono opcional (SVG), se ubica antes del texto */
  icon?: React.ReactNode;
  /** Muestra spinner y bloquea interacción */
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
