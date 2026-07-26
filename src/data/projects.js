const projects = [
    {
      id: 1,
      name: "Website",
      image:
        "../src/images/website.png",
      description:
        "Website project.",
    },
    {
      id: 2,
      name: "S.T.E.V.E.",
      image:
      "../src/images/steve.jpg",
      description:
      "STEVE",
    },
  ];
  
  export function getProjects() {
    return projects;
  }
  
//   export function getProjectById(id) {
//     return projects.find((p) => p.id === Number(id));
//   }