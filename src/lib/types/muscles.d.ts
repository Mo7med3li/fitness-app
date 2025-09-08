export interface Muscles {
  message: string
  musclesGroup: MusclesGroup[]
}

export interface MusclesGroup {
  _id: string
  name: string
}


export interface MuscleByGroup {
  message: string
  muscleGroup: MuscleGroup
  muscles: Muscle[]
}

export interface Muscle {
  _id: string
  name: string
  image: string
}
