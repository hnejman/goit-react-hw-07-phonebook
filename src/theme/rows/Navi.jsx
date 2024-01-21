// 1. Import the components and hook
import {
    createStylesContext,
    useMultiStyleConfig,
  } from '@chakra-ui/react'
  // TabList
  const [ StylesProvider, useStyles ] = createStylesContext('Menu');
  
  function Menu(props) {
    const { size, variant, children, ...rest } = props
  
    // 2. Consume the `useMultiStyleConfig` hook
    const styles = useMultiStyleConfig('Menu', { size, variant })
  
    return (
      <Flex __css={styles.menu} {...rest}>
        {/* 3. Mount the computed styles on `StylesProvider` */}
        <StylesProvider value={styles}>{children}</StylesProvider>
      </Flex>
    )
  }
  
  function MenuItem(props) {
    // 4. Read computed `item` styles from styles provider
    const styles = useStyles()
    return <Box as='button' __css={styles.item} {...props} />
  }