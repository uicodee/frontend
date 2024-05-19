/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */

export interface LoginUser {
  /**
   * User email
   * @minLength 5
   * @maxLength 200
   */
  email: string;
  /**
   * User password
   * @minLength 6
   * @maxLength 50
   */
  password: string;
}