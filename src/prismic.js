import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "safetytoolkit";

export const client = prismic.createClient(repositoryName, {
  // If your repo is private, add an access token.
  accessToken: "MC5Zb3A4R2hBQUFDRUFmd2k2.QO-_vVEH77-9e--_vUph77-977-977-977-9cgvvv70QYT7vv73vv71Z77-977-977-977-9Ku-_vT8g77-977-9",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  routes: [
    {
      type: "homepage",
      path: "/",
    },
    {
      type: "page",
      path: "/:uid",
    },
  ],
});
