const { writeFileSync, mkdirSync } = require("fs");

require("dotenv").config();

const targetPath = "./src/environments/environment.ts";

const envFileContent = `
export const environmet = {
  mapbox_key : "${process.env.MAPBOX_KEY}",
  otra : "Propiedad"
}
`;

mkdirSync("./src/environments", { recursive: true });

writeFileSync(targetPath, envFileContent);
