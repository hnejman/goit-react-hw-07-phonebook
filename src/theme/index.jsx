// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import { theme } from './styles'

// Foundational style overrides

// Component style overrides
import { Tab } from './components/Tab'

export const overrides = extendTheme({
  theme,
  // Other foundational style overrides go here
  components: {
    Tab,
    // Other components go here
  },
})