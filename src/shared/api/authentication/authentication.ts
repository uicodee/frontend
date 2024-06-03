/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type {
  HTTPValidationError,
  LoginUser,
  Token
} from '.././model'
import { createInstance } from '.././http/index';
import type { BodyType } from '.././http/index';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * Administrator login
 * @summary Admin Login
 */
export const adminLoginLoginPost = (
    loginUser: BodyType<LoginUser>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<Token>(
      {url: `/login`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: loginUser
    },
      options);
    }
  


export const getAdminLoginLoginPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof adminLoginLoginPost>>, TError,{data: BodyType<LoginUser>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof adminLoginLoginPost>>, TError,{data: BodyType<LoginUser>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof adminLoginLoginPost>>, {data: BodyType<LoginUser>}> = (props) => {
          const {data} = props ?? {};

          return  adminLoginLoginPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AdminLoginLoginPostMutationResult = NonNullable<Awaited<ReturnType<typeof adminLoginLoginPost>>>
    export type AdminLoginLoginPostMutationBody = BodyType<LoginUser>
    export type AdminLoginLoginPostMutationError = HTTPValidationError

    /**
 * @summary Admin Login
 */
export const useAdminLoginLoginPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof adminLoginLoginPost>>, TError,{data: BodyType<LoginUser>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof adminLoginLoginPost>>,
        TError,
        {data: BodyType<LoginUser>},
        TContext
      > => {

      const mutationOptions = getAdminLoginLoginPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Refresh token
 * @summary Refresh Token
 */
export const refreshTokenRefreshTokenPost = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<Token>(
      {url: `/refresh-token`, method: 'POST'
    },
      options);
    }
  


export const getRefreshTokenRefreshTokenPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof refreshTokenRefreshTokenPost>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof refreshTokenRefreshTokenPost>>, TError,void, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof refreshTokenRefreshTokenPost>>, void> = () => {
          

          return  refreshTokenRefreshTokenPost(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RefreshTokenRefreshTokenPostMutationResult = NonNullable<Awaited<ReturnType<typeof refreshTokenRefreshTokenPost>>>
    
    export type RefreshTokenRefreshTokenPostMutationError = HTTPValidationError

    /**
 * @summary Refresh Token
 */
export const useRefreshTokenRefreshTokenPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof refreshTokenRefreshTokenPost>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof refreshTokenRefreshTokenPost>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getRefreshTokenRefreshTokenPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Logout from account
 * @summary Logout From Account
 */
export const logoutFromAccountLogoutPost = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/logout`, method: 'POST'
    },
      options);
    }
  


export const getLogoutFromAccountLogoutPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof logoutFromAccountLogoutPost>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof logoutFromAccountLogoutPost>>, TError,void, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof logoutFromAccountLogoutPost>>, void> = () => {
          

          return  logoutFromAccountLogoutPost(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type LogoutFromAccountLogoutPostMutationResult = NonNullable<Awaited<ReturnType<typeof logoutFromAccountLogoutPost>>>
    
    export type LogoutFromAccountLogoutPostMutationError = HTTPValidationError

    /**
 * @summary Logout From Account
 */
export const useLogoutFromAccountLogoutPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof logoutFromAccountLogoutPost>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof logoutFromAccountLogoutPost>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getLogoutFromAccountLogoutPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    