import type { Medication } from '../types/Medication';

const STORAGE_KEY = 'jaguara_medications';

export function getMedications(): Medication[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  const medications: Medication[] = JSON.parse(data);

  return medications.map((medication) => ({
    ...medication,
    times: Array.isArray(medication.times)
      ? medication.times
      : String(medication.times).split(',').map((time) => time.trim()).filter(Boolean),
  }));
}

export function createMedication(medication: Omit<Medication, 'id'>): Medication {
  const medications = getMedications();

  const newMedication: Medication = {
    ...medication,
    id: Date.now(),
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...medications, newMedication])
  );

  return newMedication;
}
