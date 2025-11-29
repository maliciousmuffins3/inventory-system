import { Branch } from "@/components/pages/Branch";

export default [
  {
    path: "/branch",
    element: <Branch />,
    children: [
      {
        path: ":id",
        element: {}, // Something
      },
    ],
  },
];
