import usersData from "../../data/23-taller-04-datos.json"; // Importamos los datos del JSON directamente

// Definir el nuevo tipo que coincide con los datos del JSON
type JsonUserType = {
  id: number;
  name: string;
  hobbies: string[];
  years: number;
  team: string;
  faction: string;
};

// DECLARE CONTROLLER FUNCTIONS
async function readUsersByHobby(hobby: string): Promise<JsonUserType[]> {
  // Usamos los datos del archivo JSON directamente
  const users = usersData as JsonUserType[];  // Usamos el nuevo tipo para los datos JSON
  return users.filter(user => user.hobbies.includes(hobby)); // Filtrar por hobby
}

async function checkUserExists(userId: number): Promise<boolean> {
  const users = usersData; // Obtener los datos desde el JSON
  return users.some(user => user.id === userId); // Verificar si el usuario existe
}

async function getTeamExperience(teamName: string): Promise<number> {
  const users = usersData;  // Usamos los datos desde el JSON
  const teamMembers = users.filter(user => user.team === teamName);  // Filtrar los usuarios del equipo

  // Sumar los años de experiencia de los miembros del equipo
  const totalExperience = teamMembers.reduce((sum, user) => sum + user.years, 0);

  return totalExperience;
}

async function getUsersByFaction(factionName: string): Promise<any[]> {
  const users = usersData;  // Usamos los datos del JSON
  const usersByFaction = users.filter(user => user.faction.toLowerCase() === factionName.toLowerCase());  // Filtrar los usuarios de la facción

  return usersByFaction;
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsersByHobby, checkUserExists, getTeamExperience,getUsersByFaction  };