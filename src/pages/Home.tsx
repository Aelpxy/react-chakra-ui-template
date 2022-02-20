import React from 'react'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Box, Heading, Text } from '@chakra-ui/react'

function Home() {
    return (
        <Box textAlign="center" py={10} px={6}>
            <ColorModeSwitcher />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Get started!
            </Heading>
            <Text color={'gray.500'}>
                Start by editing
                <code color={'gray.600'}> src/pages/Home.tsx</code>
            </Text>
        </Box>
    )
}

export default Home
