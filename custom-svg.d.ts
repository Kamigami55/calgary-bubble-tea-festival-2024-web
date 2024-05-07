// Support importing svg files in Next.js <Image /> component without TypeScript error
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
