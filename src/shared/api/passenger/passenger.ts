/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  BasePassenger,
  HTTPValidationError,
  Otp,
  Passenger,
  PassengerLogin
} from '.././model'
import { createInstance } from '.././http/index';
import type { BodyType } from '.././http/index';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Login
 */
export const loginPassengerAuthPost = (
    passengerLogin: BodyType<PassengerLogin>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/passenger/auth`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: passengerLogin
    },
      options);
    }
  


export const getLoginPassengerAuthPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof loginPassengerAuthPost>>, TError,{data: BodyType<PassengerLogin>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof loginPassengerAuthPost>>, TError,{data: BodyType<PassengerLogin>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof loginPassengerAuthPost>>, {data: BodyType<PassengerLogin>}> = (props) => {
          const {data} = props ?? {};

          return  loginPassengerAuthPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type LoginPassengerAuthPostMutationResult = NonNullable<Awaited<ReturnType<typeof loginPassengerAuthPost>>>
    export type LoginPassengerAuthPostMutationBody = BodyType<PassengerLogin>
    export type LoginPassengerAuthPostMutationError = HTTPValidationError

    /**
 * @summary Login
 */
export const useLoginPassengerAuthPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof loginPassengerAuthPost>>, TError,{data: BodyType<PassengerLogin>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof loginPassengerAuthPost>>,
        TError,
        {data: BodyType<PassengerLogin>},
        TContext
      > => {

      const mutationOptions = getLoginPassengerAuthPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Verify Otp
 */
export const verifyOtpPassengerVerifyPhonePost = (
    otp: BodyType<Otp>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/passenger/verify-phone`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: otp
    },
      options);
    }
  


export const getVerifyOtpPassengerVerifyPhonePostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof verifyOtpPassengerVerifyPhonePost>>, TError,{data: BodyType<Otp>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof verifyOtpPassengerVerifyPhonePost>>, TError,{data: BodyType<Otp>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof verifyOtpPassengerVerifyPhonePost>>, {data: BodyType<Otp>}> = (props) => {
          const {data} = props ?? {};

          return  verifyOtpPassengerVerifyPhonePost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type VerifyOtpPassengerVerifyPhonePostMutationResult = NonNullable<Awaited<ReturnType<typeof verifyOtpPassengerVerifyPhonePost>>>
    export type VerifyOtpPassengerVerifyPhonePostMutationBody = BodyType<Otp>
    export type VerifyOtpPassengerVerifyPhonePostMutationError = HTTPValidationError

    /**
 * @summary Verify Otp
 */
export const useVerifyOtpPassengerVerifyPhonePost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof verifyOtpPassengerVerifyPhonePost>>, TError,{data: BodyType<Otp>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof verifyOtpPassengerVerifyPhonePost>>,
        TError,
        {data: BodyType<Otp>},
        TContext
      > => {

      const mutationOptions = getVerifyOtpPassengerVerifyPhonePostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Register
 */
export const registerPassengerRegisterPost = (
    passenger: BodyType<Passenger>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/passenger/register`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: passenger
    },
      options);
    }
  


export const getRegisterPassengerRegisterPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registerPassengerRegisterPost>>, TError,{data: BodyType<Passenger>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof registerPassengerRegisterPost>>, TError,{data: BodyType<Passenger>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof registerPassengerRegisterPost>>, {data: BodyType<Passenger>}> = (props) => {
          const {data} = props ?? {};

          return  registerPassengerRegisterPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RegisterPassengerRegisterPostMutationResult = NonNullable<Awaited<ReturnType<typeof registerPassengerRegisterPost>>>
    export type RegisterPassengerRegisterPostMutationBody = BodyType<Passenger>
    export type RegisterPassengerRegisterPostMutationError = HTTPValidationError

    /**
 * @summary Register
 */
export const useRegisterPassengerRegisterPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registerPassengerRegisterPost>>, TError,{data: BodyType<Passenger>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof registerPassengerRegisterPost>>,
        TError,
        {data: BodyType<Passenger>},
        TContext
      > => {

      const mutationOptions = getRegisterPassengerRegisterPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Get all passengers
 * @summary Get Passengers
 */
export const getPassengersPassengerAllGet = (
    
 options?: SecondParameter<typeof createInstance>,signal?: AbortSignal
) => {
      
      
      return createInstance<BasePassenger[]>(
      {url: `/passenger/all`, method: 'GET', signal
    },
      options);
    }
  

export const getGetPassengersPassengerAllGetQueryKey = () => {
    return [`/passenger/all`] as const;
    }

    
export const getGetPassengersPassengerAllGetQueryOptions = <TData = Awaited<ReturnType<typeof getPassengersPassengerAllGet>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPassengersPassengerAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPassengersPassengerAllGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPassengersPassengerAllGet>>> = ({ signal }) => getPassengersPassengerAllGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPassengersPassengerAllGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetPassengersPassengerAllGetQueryResult = NonNullable<Awaited<ReturnType<typeof getPassengersPassengerAllGet>>>
export type GetPassengersPassengerAllGetQueryError = unknown

/**
 * @summary Get Passengers
 */
export const useGetPassengersPassengerAllGet = <TData = Awaited<ReturnType<typeof getPassengersPassengerAllGet>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPassengersPassengerAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetPassengersPassengerAllGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Edit Passenger
 */
export const editPassengerPassengerEditPut = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/passenger/edit`, method: 'PUT'
    },
      options);
    }
  


export const getEditPassengerPassengerEditPutMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editPassengerPassengerEditPut>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof editPassengerPassengerEditPut>>, TError,void, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof editPassengerPassengerEditPut>>, void> = () => {
          

          return  editPassengerPassengerEditPut(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EditPassengerPassengerEditPutMutationResult = NonNullable<Awaited<ReturnType<typeof editPassengerPassengerEditPut>>>
    
    export type EditPassengerPassengerEditPutMutationError = unknown

    /**
 * @summary Edit Passenger
 */
export const useEditPassengerPassengerEditPut = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editPassengerPassengerEditPut>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof editPassengerPassengerEditPut>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getEditPassengerPassengerEditPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Delete Passenger
 */
export const deletePassengerPassengerDeleteDelete = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/passenger/delete`, method: 'DELETE'
    },
      options);
    }
  


export const getDeletePassengerPassengerDeleteDeleteMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deletePassengerPassengerDeleteDelete>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deletePassengerPassengerDeleteDelete>>, TError,void, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deletePassengerPassengerDeleteDelete>>, void> = () => {
          

          return  deletePassengerPassengerDeleteDelete(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeletePassengerPassengerDeleteDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof deletePassengerPassengerDeleteDelete>>>
    
    export type DeletePassengerPassengerDeleteDeleteMutationError = unknown

    /**
 * @summary Delete Passenger
 */
export const useDeletePassengerPassengerDeleteDelete = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deletePassengerPassengerDeleteDelete>>, TError,void, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof deletePassengerPassengerDeleteDelete>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getDeletePassengerPassengerDeleteDeleteMutationOptions(options);

      return useMutation(mutationOptions);
    }
    