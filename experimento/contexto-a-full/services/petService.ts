import type { Pet } from '../types/Pet';

const STORAGE_KEY = 'jaguara_pets';

export function getPets(): Pet[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function createPet(pet: Omit<Pet, 'id'>): Pet {
  const pets = getPets();

  const newPet: Pet = {
    ...pet,
    id: Date.now(),
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...pets, newPet])
  );

  return newPet;
}