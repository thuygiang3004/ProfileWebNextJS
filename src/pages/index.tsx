import { Card, Stack, Chip, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="w-full h-[calc(100vh-112px)]">
        <div className="relative">
          <img src="/hero.png" alt="" className="w-full max-h-80" />
          <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-sm sm:text-5xl sm:mb-3">Thuy Nguyen</h1>
            <h2 className="sm: text-sm sm:text-2xl sm:mb-3">Web Developer</h2>
            <h3 className="text-sm sm:text-xl sm:mb-3">
              Javascript - Typescript - React
            </h3>
          </div>
        </div>

        <div className="container flex flex-col sm:flex-row mx-auto px-4 pt-5 flex-padding">
          <Card
            // variant="outlined"
            sx={{
              // p: 2,
            }}
            className="m-5 sm:w-1/2 items-stretch"
          >
            <img src="/profilePic.jpg" alt="" className="w-full" />
          </Card>
          <Card
            variant="outlined"
            sx={{
              p: 2,
            }}
            className="m-5"
          >
            <h1 className="text-xl sm:text-3xl text-center pt-5 pb-5">Who am I?</h1>
            <h2 className="text-sm sm:text-xl text-center">
              I found my true passion in creating software not so long ago but
              the journey with coding has been amazing so far.
              <br></br>
              And the best thing is to know that there are so many more that I
              am eager to learn to be a more skillful developer in the future.
            </h2>
            <br></br>
            <Stack
              direction="row"
              spacing={1}
              className="flex-wrap items-stretch justify-center"
            >
              <Chip label="React" color="success" sx={{ mb: 1 }} />
              <Chip label="NodeJS" color="primary" sx={{ mb: 1 }} />
              <Chip label="Typescript" color="info" sx={{ mb: 1 }} />
              <Chip label="Javascript" color="error" sx={{ mb: 1 }} />
            </Stack>
            <br></br>
            <Stack
              direction="row"
              className="justify-center"
            >
              <Button variant="outlined" endIcon={<SendIcon />} >
              <Link
                href="/projects"              
              >
                Check out my portfolio
              </Link>
              </Button>
            </Stack>
            <div className="justify-center">
              
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
