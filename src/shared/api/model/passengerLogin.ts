/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */

export interface PassengerLogin {
  /**
   * Driver's phone number
   * @minLength 13
   * @maxLength 13
   * @pattern ^\+998(90|91|93|94|33)\d{7}$
   */
  phoneNumber: string;
}
