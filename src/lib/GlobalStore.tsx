// store/ergonomicStore.ts
import { create } from "zustand";

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
//   summary: {
//     "final_score": string;
//   };
};

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
    // summary: {
    //     "final_score": string;
    // };
};

type ErgonomicData = {
  person_id: number;
  rula: RulaData;
  reba: RebaData;
  final_score_rula:string;
  final_score_reba:string;
  final_risk_level: string;
};

type Store = {
  data: ErgonomicData | null;
  setData: (data: ErgonomicData) => void;
};

export const useErgonomicStore = create<Store>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));

export type { ErgonomicData };