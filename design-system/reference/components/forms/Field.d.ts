/**
 * @startingPoint section="Componentes" subtitle="Wrapper de campo con label, hint y validación en vivo" viewport="700x220"
 */
export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  valid?: boolean;
  required?: boolean;
  children: React.ReactNode;
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}
