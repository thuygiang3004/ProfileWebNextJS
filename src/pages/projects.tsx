import Head from "next/head";
import { Card, Stack, Chip, Button } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 0,
    image: "/P21.png",
    name: "Kanban Task Management",
    des1: "A Web system that allows users to create project, customize swimlane, create and manage task, collaborate with team members",
    des2: 'Awarded the Computer Applications Development Capstone Project "Best of Program" Award',
    techs: [
      "React",
      "Javascript",
      "HTML",
      "CSS",
      "NodeJS",
      "Express",
      "MongoDB",
    ],
    web: "https://easykan-fe.herokuapp.com/",
    git: "https://github.com/thuygiang3004/kanbanFrontend",
  },
  {
    id: 1,
    image: "/P11.png",
    name: "Work Order Management System",
    des1: "A Web System for Property Management Company that allows their customers to check new rental listings, tenants to submit work order requests and allows company’s staff to manage requests and publish new listings.",
    des2: undefined,
    techs: ["Javascript", "HTML", "CSS", "NodeJS", "Express", "MongoDB"],
    web: "https://work-order-system-thuygiang300.herokuapp.com/",
    git: "https://github.com/thuygiang3004/workOrderSystem",
  },
  {
    id: 2,
    image: "/P31.png",
    name: "thuygiangnguyen.com",
    des1: "My portfolio Website",
    des2: undefined,
    techs: ["React", "NextJS", "Javascript", "HTML", "CSS"],
    web: "https://thuy-giang-nguyen-profile.herokuapp.com/",
    git: "https://github.com/thuygiang3004/cleaningAppointment",
  },
  {
    id: 3,
    image: "/houseCleaning.png",
    name: "Cleaning Appointment Management",
    des1: "A Web System for Property Management Company that allows their customers to check new rental listings, tenants to submit work order requests and allows company’s staff to manage requests and publish new listings.",
    des2: undefined,
    techs: ["C#", "WPF", "SQL Server", "MVVM"],
    web: "",
    git: "https://github.com/thuygiang3004/ProfileWebNextJS",
  },
];

export default function Home() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-10 mb-10 py-14">
      {projects.map((p) => (
        <ProjectCard project={p} key={p.id} />
      ))}
    </div>
  );
}
