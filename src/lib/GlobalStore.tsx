// store/ergonomicStore.ts
import { create } from "zustand";

// This is the core data processed by the application
type ErgonomicData = {
  person_id: number;
  rula: RulaData;
  reba: RebaData;
  final_score_rula:string;
  final_score_reba:string;
  final_risk_level: string;
};

// Sub component for RULA data
type RulaData = {
  right: {
    "shoulder_angle": number,
    "shoulder_score": number,
    "elbow_angle": number,
    "elbow_score": number,
    "wrist_angle": number,
    "wrist_score": number
  };
  left: {
    "shoulder_angle": number,
    "shoulder_score": number,
    "elbow_angle": number,
    "elbow_score": number,
    "wrist_angle": number,
    "wrist_score": number
  };
  body: {
    "neck_angle": number,
    "neck_score": number,
    "trunk_angle": number,
    "trunk_score": number
  };
};

// Sub component for REBA data
type RebaData = {
    right: {
        "shoulder_angle": number,
        "shoulder_score": number,
        "elbow_angle": number,
        "elbow_score": number,
        "wrist_angle": number,
        "wrist_score": number
    };
    left: {
        "shoulder_angle": number,
        "shoulder_score": number,
        "elbow_angle": number,
        "elbow_score": number,
        "wrist_angle": number,
        "wrist_score": number
    };
    body: {
        "neck_angle": number,
        "neck_score": number,
        "trunk_angle": number,
        "trunk_score": number
    };
};

// Store for global access to the Ergonomic data.
type Store = {
  data: ErgonomicData | null;
  setData: (data: ErgonomicData) => void;
};

// global store
export const useErgonomicStore = create<Store>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));

export type { ErgonomicData };
