/* eslint-disable no-undefined */
/* eslint-disable indent */
import LibLogger from "@/logger";
import { Registry } from "./Registry";
import { Coordinate } from "./Coordinate";

const logger = LibLogger.get("Instance");

/**
 * The Instance interface represents a data model instance that provides access to both its structure
 * and operations. It serves as the main interface for interacting with data models in the system.
 *
 * The interface consists of two main components:
 * 1. definition: Defines the structure, keys, and relationships of the data model
 * 2. operations: Provides methods for interacting with the data model (get, find, all, etc.)
 * 3. registry: Manages the registration and lookup of Library instances
 *
 * The Instance interface is generic and supports up to 5 levels of location hierarchy (L1-L5)
 * for contained instances, allowing for complex nested data structures.
 *
 * @template V - The type of the data model item, extending Item
 * @template S - The string literal type representing the model's key type
 * @template L1-L5 - Optional string literal types for location hierarchy levels
 */
export interface Instance<
  S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> {
  coordinate: Coordinate<S, L1, L2, L3, L4, L5>;

  /** The registry object that manages the registration and lookup of model instances */
  registry: Registry;
}

export const createInstance = <
  S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
>(
  registry: Registry,
  coordinate: Coordinate<S, L1, L2, L3, L4, L5>,
): Instance<S, L1, L2, L3, L4, L5> => {
  logger.debug("createInstance", { coordinate, registry });
  return { coordinate, registry };
}

export const isInstance = (instance: any): instance is Instance<any, any, any, any, any, any> => {
  return instance !== null &&
    instance !== undefined &&
    instance.coordinate !== undefined &&
    instance.registry !== undefined;
}