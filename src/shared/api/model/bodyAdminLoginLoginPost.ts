/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */
import type { BodyAdminLoginLoginPostClientId } from './bodyAdminLoginLoginPostClientId';
import type { BodyAdminLoginLoginPostClientSecret } from './bodyAdminLoginLoginPostClientSecret';
import type { BodyAdminLoginLoginPostGrantType } from './bodyAdminLoginLoginPostGrantType';

export interface BodyAdminLoginLoginPost {
  client_id?: BodyAdminLoginLoginPostClientId;
  client_secret?: BodyAdminLoginLoginPostClientSecret;
  grant_type?: BodyAdminLoginLoginPostGrantType;
  password: string;
  platform: string;
  scope?: string;
  username: string;
}
