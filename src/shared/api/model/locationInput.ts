/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */
import type { LocationInputParentId } from './locationInputParentId';

export interface LocationInput {
  /** Location name */
  name: string;
  /** Parent location ID */
  parentId?: LocationInputParentId;
}
