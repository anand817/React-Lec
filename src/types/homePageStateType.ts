import Animal from "../models/animalModel";

type HomePageState = {
    assetImage: boolean,
    loading: boolean,
    animalData? : Animal,
};

export type { HomePageState };