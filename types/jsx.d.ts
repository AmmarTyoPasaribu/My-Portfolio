// The ported ReactBits-style components are plain .jsx files. They are type-loose on purpose
// (props are validated by usage, not by TypeScript), so they are declared as `any`-prop components.
declare module '*.jsx' {
  import type { ComponentType } from 'react';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: ComponentType<any>;
  export default Component;
}
