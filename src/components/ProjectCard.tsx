import { Card, Stack, Chip, Button } from "@mui/material";

interface ProjectProps {
  project: {
    id: number;
    image: string;
    name: string;
    des1: string;
    des2: string | undefined;
    techs: string[];
    web: string | undefined;
    git: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
      }}
      className="m-5 h-full sm:text-xl"
    >
      <img src={project.image} alt="" className="px-10 pt-5 hover:scale-110" />
      <h1 className="text-xl sm:text-3xl text-center pt-5">{project.name}</h1>
      <h2 className="p-8">
        {project.des1}
        <br />
        <br />
        {project.des2 && project.des2}
      </h2>
      <br />
      <Stack
        direction="row"
        spacing={1}
        className="flex-wrap items-stretch justify-center"
      >
        {project.techs?.map((tech: string, index: number) => (
          <Chip
            key={index}
            variant="outlined"
            color="primary"
            label={tech}
            sx={{ mb: 1 }}
          />
        ))}
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        className="flex-wrap items-stretch justify-center mt-5"
      >
        {project.web && (
          <Button variant="contained" className="bg-gray-800 hover:bg-sky-700">
            <a href={project.web} target="_blank">
              Website
            </a>
          </Button>
        )}
        <Button variant="contained" className="bg-gray-800 hover:bg-sky-700">
          <a href={project.git} target="_blank">
            Source Code
          </a>
        </Button>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
