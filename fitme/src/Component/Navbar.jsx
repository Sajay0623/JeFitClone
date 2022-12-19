import { Image, Box, Text, Flex, Center, Button } from '@chakra-ui/react'
import Dropdown from './Dropdown'
import { Link, useNavigate } from 'react-router-dom'




const app = ['Workout App (iOS)', 'Workout App (Android)']
const plan = ['Pro-designd Plans', 'Create My Plane']
const section = []
export default function Navbar() {
    const navigate = useNavigate()


    return (
        <Center>

            <Box w='100%' bg='#0693e3' p={5} h={20}>
                <Center>
                    <Flex>
                        <Box w={130} my={2}>
                            <Link to='/'>
                                <Image w='100%' src='https://i.postimg.cc/hjWD2by0/Fit-Me-removebg-preview.png' />
                            </Link>
                        </Box>
                        <Box my={2}>
                            <Dropdown value={app} title='Get Jefit App' />
                        </Box>
                        <Box my={2}>
                            <Dropdown value={plan} title='Workout Plans' />
                        </Box>
                        <Box mx={10} my={2}>
                            <Link to='/'>
                                <Text fontSize='19' color='white'>Exercise Guide</Text>
                            </Link>
                        </Box>
                        <Box mx={10} my={2}>
                            <Link to='/'>
                                <Text fontSize='19' color='white'>Blog</Text>
                            </Link>
                        </Box>
                        <Box mx={10} my={2}>
                            <Link to='/coach'>
                                <Text fontSize='19' color='white'>Coach</Text>
                            </Link>
                        </Box>
                        <Box mx={10} my={2}>
                            <Link to='/'>
                                <Text fontSize='19' color='white'>Elite</Text>
                            </Link>
                        </Box>
                        <Box mx={10} >
                            <Link to='/login'>
                                <Button colorScheme='none' fontSize='19' color='white'>Login</Button>
                            </Link>
                        </Box>
                        <Box mx={10} >
                            <Link to="/signup">
                                <Button px={8} sx={{ color: '#00008B', backgroundColor: 'white' }} _hover={{ color: 'white', backgroundColor: '#00008B' }} fontSize='19'>Sign Up</Button>
                            </Link>

                        </Box>
                    </Flex>
                </Center>
            </Box >


        </Center>
    )

}