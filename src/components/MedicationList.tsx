import type { Pet } from '../types/Pet';
import type { Medication } from '../types/Medication';

interface MedicationListProps {
  medications: Medication[];
  pets: Pet[];
}

export function MedicationList({ medications, pets }: MedicationListProps) {
  function getPetName(petId: number) {
    return pets.find((pet) => pet.id === petId)?.name ?? 'Pet não encontrado';
  }

  return (
    <section>
      <h2>Medicamentos cadastrados</h2>

      {medications.length === 0 ? (
        <p>Nenhum medicamento cadastrado.</p>
      ) : (
        <ul>
          {medications.map((medication) => (
            <li key={medication.id}>
              <strong>{medication.name}</strong>
              <span>
                {' '} - {getPetName(medication.petId)} - {medication.dosage} - {medication.frequency}
                {' '} - Horários: {medication.times.join(', ')}
                {' '} - {medication.startDate} até {medication.endDate}
                {medication.notes && <> - {medication.notes}</>}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
