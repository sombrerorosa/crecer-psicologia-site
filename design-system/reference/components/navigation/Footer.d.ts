export interface FooterColumn { title: string; links: { label: string; href: string }[]; }
export interface FooterProps {
  logo?: string;
  name?: string;
  tagline?: string;
  columns?: FooterColumn[];
  bottom?: React.ReactNode;
}
