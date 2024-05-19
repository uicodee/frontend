/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */
import type { LocationOutput } from './locationOutput';
import type { BaseDriver } from './baseDriver';
import type { Seat } from './seat';
import type { TripsToDate } from './tripsToDate';

export interface Trips {
  /** Cost of trip */
  cost: number;
  /** Current object created at time */
  createdAt: string;
  departure: LocationOutput;
  destination: LocationOutput;
  driver: BaseDriver;
  /** The start date of the trip */
  fromDate: string;
  /**
   * Current object ID
   */
  id: number;
  /** Trip status */
  isActive: boolean;
  seats: Seat[];
  /** The end date of the trip */
  toDate?: TripsToDate;
  /** Current object updated at time */
  updatedAt: string;
}
