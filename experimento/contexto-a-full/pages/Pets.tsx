import { useEffect, useState } from 'react';
import { PetForm } from '../components/PetForm';
import { PetList } from '../components/PetList';
import { createPet, getPets } from '../services/petService';
import type { Pet } from '../types/Pet';

export function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    setPets(getPets());
  }, []);

  function handlePetCreated(pet: Pet) {
    createPet({
      name: pet.name,
      species: pet.species,
      breed: pet.breed,
      birthDate: pet.birthDate,
      weight: pet.weight,
    });

    setPets((currentPets) => [...currentPets, pet]);
  }

  return (
    <main>
      <h1>Jaguara</h1>

      <p>
        Gerencie a rotina e os cuidados dos seus animais.
      </p>

      <PetForm onPetCreated={handlePetCreated} />

      <PetList pets={pets} />
    </main>
  );
}