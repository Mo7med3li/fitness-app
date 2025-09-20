interface MuscleGroup {
  _id: string;
  name: string;
}
interface MusclesResponse {
  message: string;
  musclesGroup: MuscleGroup[];
}
