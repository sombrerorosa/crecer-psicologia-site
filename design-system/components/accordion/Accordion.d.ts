/**
 * @startingPoint section="Componentes" subtitle="Preguntas frecuentes / contenido colapsable, un ítem abierto a la vez" viewport="700x320"
 */
export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}
export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}
