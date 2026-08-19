import { useEffect, useState } from 'react';
import { PetForm } from '../components/PetForm';
import { PetList } from '../components/PetList';
import { MedicationForm } from '../components/MedicationForm';
import { MedicationList } from '../components/MedicationList';
import { createPet, getPets } from '../services/petService';
import { createMedication, getMedications } from '../services/medicationService';
import type { Pet } from '../types/Pet';
import type { Medication } from '../types/Medication';

export function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [medications, setMedications] = useState<Medication[]>([]);

  useEffect(() => {
    setPets(getPets());
    setMedications(getMedications());
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

  function handleMedicationCreated(medication: Medication) {
    createMedication({
      petId: medication.petId,
      name: medication.name,
      dosage: medication.dosage,
      frequency: medication.frequency,
      times: medication.times,
      startDate: medication.startDate,
      endDate: medication.endDate,
      notes: medication.notes,
    });

    setMedications((currentMedications) => [...currentMedications, medication]);
  }

  return (
    <main>
      <h1>Jaguara</h1>

      <p>
        Gerencie a rotina e os cuidados dos seus animais.
      </p>

      <PetForm onPetCreated={handlePetCreated} />

      <PetList pets={pets} />

      <MedicationForm pets={pets} onMedicationCreated={handleMedicationCreated} />

      <MedicationList medications={medications} pets={pets} />
    </main>
  );
}