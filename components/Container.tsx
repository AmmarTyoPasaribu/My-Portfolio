export function Container({
  children,
  wide,
  className = '',
}: {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return <div className={`${wide ? 'container-wide-max' : 'container-max'} ${className}`}>{children}</div>;
}
