import { IModelUnit } from "../../deps.ts";

export const loadUnit = async <T>(unit: IModelUnit) => await unit.load() as T;
export const loadUnits = <T>(units: IModelUnit[]) => units.map((unit) => loadUnit<T>(unit));
