// import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
// import { extendTheme } from '@chakra-ui/react';

import { defineStyleConfig } from "@chakra-ui/react";

// const helpers = createMultiStyleConfigHelpers(['tabs', 'tabList', 'tab']);

// const { Tab } = helpers.defineMultiStyleConfig({
//   baseStyle: {
//     Tab: {
//       bg: '#b7f4d8',
//       color: '#116A40',
//       fontWeight: 'bold',
//     },
//   },
// });

// const theme = extendTheme({
//   components: {
//     Tab,
//   },
// });

export const Taby = defineStyleConfig({
    variants:{
        active:{
          bc: '#199f60',
        },
        passive:{
            bc: '#4fe39e',
        },
    },
},)