export default function classnames(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
};