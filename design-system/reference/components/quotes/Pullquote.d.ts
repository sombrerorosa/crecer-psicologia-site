/**
 * @startingPoint section="Componentes" subtitle="Cita destacada en serif itálica + banda de cierre" viewport="700x280"
 */
export interface PullquoteProps {
  children: React.ReactNode;
  cite?: string;
}
export interface FeatureBandProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  cta?: React.ReactNode;
}
