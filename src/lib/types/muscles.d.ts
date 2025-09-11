
export interface MuscleGroup {
  _id: string;
  name: string;
}

export interface Muscle {
  _id: string;
  name: string;
  image: string;
}

// API Response interfaces
export interface MusclesByGroupResponse {
  muscleGroup: MuscleGroup;
  muscles: Muscle[];
}

// Custom interfaces for enhanced data
export interface MuscleGroupWithImage extends MuscleGroup {
  image: string | null;
}

