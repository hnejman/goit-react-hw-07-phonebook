import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/react';

export const overrides = extendTheme({
  components: {
    Tab: {
      bg: 'gray.500',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
        body: {
          color: '#116A40',
          fontWeight: 'bold',
        },
    }),
  },
});

//     transparent: 'transparent',
//     black: '#282828',
//     white: '#f7efe8',
//     red: '#fc6454',
//     blue: {
//       10: '#b7f4d8',
//       20: '#84ebbb',
//       30: '#4fe39e',
//       40: '#21d480',
//       50: '#199f60',
//       60: '#116A40',
//     },
//     yellow: '#f3e16b',
