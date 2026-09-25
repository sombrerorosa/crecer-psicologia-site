/**
 * @startingPoint section="Componentes" subtitle="Header con logo, nav y hamburguesa responsive" viewport="700x120"
 */
export interface HeaderLink { label: string; href: string; }
export interface HeaderProps {
  logo?: string;
  name?: string;
  links?: HeaderLink[];
  activeHref?: string;
}
