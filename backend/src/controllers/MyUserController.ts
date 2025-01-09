import { Request, Response } from "express";
import User from "../models/user";


const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // Validation simple des données (exemple)
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Aucune donnée envoyée dans la requête.');
    }

    console.log('Données reçues :', data);

    // Réponse au client
    res.status(200).json({
      message: 'Données reçues avec succès!',
      receivedData: data,
    });
  } catch (error) {
    console.error('Erreur dans postData :', error.message);

    // Réponse en cas d'erreur
    res.status(500).json({
      message: 'Une erreur est survenue.',
      error: error.message,
    });
  }
};



export default {
  createCurrentUser
};
