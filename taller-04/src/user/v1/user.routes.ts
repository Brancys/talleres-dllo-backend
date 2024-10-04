import { Router, Request, Response } from "express";
import { readUsersByHobby, checkUserExists, getTeamExperience, getUsersByFaction } from "./user.controller";  

const userRoutes = Router();

// INITIALIZE USERS ARRAY
let users = [
  { id: 1, name: "Robin Restrepo", carrera: "Psicología" }
];

// DECLARE ENDPOINT FUNCTIONS
async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;

  if (!hobby) {
    return response.status(400).json({
      message: "Please provide a hobby as a query parameter."
    });
  }

  try {
    const users = await readUsersByHobby(hobby);  
    response.status(200).json({
      message: "Success.",
      users: users
    });
  } catch (error) {
    response.status(500).json({
      message: "Failed to fetch users with the specified hobby.",
      error: (error as Error).message,  
    });
  }
}

// DECLARE ENDPOINTS
userRoutes.get("/", (request: Request, response: Response) => { // Endpoint para ver los usuarios
  // Devolver el contenido actual del array users
  return response.status(200).json({
    message: "List of users",
    users
  });
});

//Punto 1
userRoutes.get("/hobby", GetUsersByHobby);

//Punto 2
userRoutes.get("/exists", async (request: Request, response: Response) => {
  const userId = parseInt(request.query.id as string); // Convertir el id a número

  if (isNaN(userId)) {
    return response.status(400).json({
      message: "Please provide a valid user ID.",
    });
  }

  try {
    const exists = await checkUserExists(userId); // Llamar a la función para verificar existencia
    if (exists) {
      return response.status(200).json({
        message: `User with ID ${userId} exists.`,
      });
    } else {
      return response.status(404).json({
        message: `User with ID ${userId} does not exist.`,
      });
    }
  } catch (error) {
    response.status(500).json({
      message: "Error checking user existence.",
      error: (error as Error).message,
    });
  }
});

//Punto 3
userRoutes.get("/team-experience", async (request: Request, response: Response) => {
  const teamName = request.query.team as string;  // Capturamos el equipo desde los query params

  if (!teamName) {
    return response.status(400).json({
      message: "Please provide a team name as a query parameter.",
    });
  }

  try {
    const totalExperience = await getTeamExperience(teamName);  // Llamamos a la función para calcular la experiencia total
    return response.status(200).json({
      message: `Total experience for team ${teamName} is ${totalExperience} years.`,
      totalExperience,
    });
  } catch (error) {
    response.status(500).json({
      message: "Error calculating team experience.",
      error: (error as Error).message,
    });
  }
});

//Punto 4
userRoutes.get("/by-faction", async (request: Request, response: Response) => {
  const factionName = request.query.faction as string;  // Capturamos la facción desde los query params

  if (!factionName) {
    return response.status(400).json({
      message: "Please provide a faction name as a query parameter.",
    });
  }

  try {
    const usersByFaction = await getUsersByFaction(factionName);  // Llamamos a la función para obtener usuarios por facción
    return response.status(200).json({
      message: `Users from faction ${factionName}.`,
      users: usersByFaction,
    });
  } catch (error) {
    response.status(500).json({
      message: "Error fetching users by faction.",
      error: (error as Error).message,
    });
  }
});

//Punto 5
userRoutes.post("/", (request: Request, response: Response) => {
  const { id, name, carrera } = request.body;

  if (!id || !name || !carrera) {
    return response.status(400).json({
      message: "Please provide id, name, and carrera."
    });
  }
  const existingUser = users.find(user => user.id === id);
  if (existingUser) {
    return response.status(400).json({
      message: "User with this ID already exists."
    });
  }
  
  const newUser = { id, name, carrera };
  users.push(newUser);

  return response.status(201).json({
    message: "User added successfully.",
    user: newUser
  });
});


// EXPORT ROUTES
export default userRoutes;
