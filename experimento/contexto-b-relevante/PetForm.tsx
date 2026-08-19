import { useState } from 'react';
import type { Pet } from '../types/Pet';

interface PetFormProps {
  onPetCreated: (pet: Pet) => void;
}

export function PetForm({ onPetCreated }: PetFormProps) {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [weight, setWeight] = useState('');

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !species || !breed || !birthDate || !weight) {
      return;
    }

    const pet: Pet = {
      id: Date.now(),
      name,
      species,
      breed,
      birthDate,
      weight: Number(weight),
    };

    onPetCreated(pet);

    setName('');
    setSpecies('');
    setBreed('');
    setBirthDate('');
    setWeight('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar pet</h2>

      <input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        placeholder="Espécie"
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
      />

      <input
        placeholder="Raça"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
      />

      <input
        type="date"
        value={birthDate}
        onChange={(event) => setBirthDate(event.target.value)}
      />

      <input
        type="number"
        placeholder="Peso"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
      />

      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}