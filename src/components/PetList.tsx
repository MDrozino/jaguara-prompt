import type { Pet } from '../types/Pet';

interface PetListProps {
  pets: Pet[];
}

export function PetList({ pets }: PetListProps) {
  return (
    <section>
      <h2>Pets cadastrados</h2>

      {pets.length === 0 ? (
        <p>Nenhum pet cadastrado.</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>
              <strong>{pet.name}</strong>
              <span>
                {' '} - {pet.species} - {pet.breed} - {pet.weight} kg
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}