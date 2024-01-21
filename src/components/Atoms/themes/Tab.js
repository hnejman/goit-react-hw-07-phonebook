import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Tab: {
      variants: {
        selected: {
          bc: '#21d480',
        },
      },
    },
  },
});
