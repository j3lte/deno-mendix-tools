import { IStructure, projects } from "../../deps.ts";

export const getModule = (element: IStructure): projects.Module | null => {
  let current = element.unit;
  while (current) {
    if (current instanceof projects.Module) {
      return current;
    }
    current = current.container;
  }
  return null;
};
