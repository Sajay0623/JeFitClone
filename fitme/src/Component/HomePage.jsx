import { Grid, Box, Heading, Text, Image, Stack } from "@chakra-ui/react"


function HomePage() {
    return (
        <Box w='100%' bg='#184FA3' h='800px' m='auto'>
            <Grid >
                <Box id="B1" >
                    <Heading as='h1' fontSize={'59px'} noOfLines={3}>
                        MANAGE & TRACK
                        ALL YOUR WORKOUTS
                        IN ONE PLACE
                    </Heading>
                    <Text fontSize={'30px'} fontWeight={'700'}>#1 Popular Workout Tracking Platform
                        Stay Strong Together</Text>
                </Box>
                <div id="" >
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

            </Grid>



        </Box>
    )

}

export default HomePage 