export interface Medication {
  id: number;
  petId: number;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  startDate: string;
  endDate: string;
  notes: string;
}
