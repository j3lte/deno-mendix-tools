import { IModelUnit } from "../../deps.ts";

export const loadUnit = async <T>(unit: IModelUnit): Promise<T> => await unit.load() as T;
export const loadUnits = <T>(units: IModelUnit[]): Array<Promise<T>> =>
  units.map((unit) => loadUnit<T>(unit));
