// Type definitions for CSS custom properties
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

