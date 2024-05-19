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
  AuthDriver,
  AuthDriverDriverVerifyPhonePost200,
  BaseDriver,
  ChangeDriverStatus,
  CreateDriver,
  DeleteDriverDriverDeleteDeleteParams,
  Driver,
  EditBalance,
  EditDriver,
  EditDriverConfirm,
  HTTPValidationError,
  Otp,
  OtpCode,
  TripInput,
  TripOutput
} from '.././model'
import { createInstance } from '.././http/index';
import type { BodyType } from '.././http/index';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * Authorize driver
 * @summary Auth Driver
 */
export const authDriverDriverAuthPost = (
    authDriver: BodyType<AuthDriver>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<OtpCode>(
      {url: `/driver/auth`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: authDriver
    },
      options);
    }
  


export const getAuthDriverDriverAuthPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authDriverDriverAuthPost>>, TError,{data: BodyType<AuthDriver>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof authDriverDriverAuthPost>>, TError,{data: BodyType<AuthDriver>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authDriverDriverAuthPost>>, {data: BodyType<AuthDriver>}> = (props) => {
          const {data} = props ?? {};

          return  authDriverDriverAuthPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthDriverDriverAuthPostMutationResult = NonNullable<Awaited<ReturnType<typeof authDriverDriverAuthPost>>>
    export type AuthDriverDriverAuthPostMutationBody = BodyType<AuthDriver>
    export type AuthDriverDriverAuthPostMutationError = HTTPValidationError

    /**
 * @summary Auth Driver
 */
export const useAuthDriverDriverAuthPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authDriverDriverAuthPost>>, TError,{data: BodyType<AuthDriver>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof authDriverDriverAuthPost>>,
        TError,
        {data: BodyType<AuthDriver>},
        TContext
      > => {

      const mutationOptions = getAuthDriverDriverAuthPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Authorize driver
 * @summary Auth Driver
 */
export const authDriverDriverVerifyPhonePost = (
    otp: BodyType<Otp>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<AuthDriverDriverVerifyPhonePost200>(
      {url: `/driver/verify-phone`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: otp
    },
      options);
    }
  


export const getAuthDriverDriverVerifyPhonePostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authDriverDriverVerifyPhonePost>>, TError,{data: BodyType<Otp>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof authDriverDriverVerifyPhonePost>>, TError,{data: BodyType<Otp>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authDriverDriverVerifyPhonePost>>, {data: BodyType<Otp>}> = (props) => {
          const {data} = props ?? {};

          return  authDriverDriverVerifyPhonePost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthDriverDriverVerifyPhonePostMutationResult = NonNullable<Awaited<ReturnType<typeof authDriverDriverVerifyPhonePost>>>
    export type AuthDriverDriverVerifyPhonePostMutationBody = BodyType<Otp>
    export type AuthDriverDriverVerifyPhonePostMutationError = HTTPValidationError

    /**
 * @summary Auth Driver
 */
export const useAuthDriverDriverVerifyPhonePost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authDriverDriverVerifyPhonePost>>, TError,{data: BodyType<Otp>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof authDriverDriverVerifyPhonePost>>,
        TError,
        {data: BodyType<Otp>},
        TContext
      > => {

      const mutationOptions = getAuthDriverDriverVerifyPhonePostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Register new driver
 * @summary Register Driver
 */
export const registerDriverDriverRegisterPost = (
    createDriver: BodyType<CreateDriver>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<BaseDriver>(
      {url: `/driver/register`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createDriver
    },
      options);
    }
  


export const getRegisterDriverDriverRegisterPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registerDriverDriverRegisterPost>>, TError,{data: BodyType<CreateDriver>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof registerDriverDriverRegisterPost>>, TError,{data: BodyType<CreateDriver>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof registerDriverDriverRegisterPost>>, {data: BodyType<CreateDriver>}> = (props) => {
          const {data} = props ?? {};

          return  registerDriverDriverRegisterPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RegisterDriverDriverRegisterPostMutationResult = NonNullable<Awaited<ReturnType<typeof registerDriverDriverRegisterPost>>>
    export type RegisterDriverDriverRegisterPostMutationBody = BodyType<CreateDriver>
    export type RegisterDriverDriverRegisterPostMutationError = HTTPValidationError

    /**
 * @summary Register Driver
 */
export const useRegisterDriverDriverRegisterPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registerDriverDriverRegisterPost>>, TError,{data: BodyType<CreateDriver>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof registerDriverDriverRegisterPost>>,
        TError,
        {data: BodyType<CreateDriver>},
        TContext
      > => {

      const mutationOptions = getRegisterDriverDriverRegisterPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Edit driver status
 * @summary Edit Driver Status
 */
export const editDriverStatusDriverEditStatusPut = (
    changeDriverStatus: BodyType<ChangeDriverStatus>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<BaseDriver>(
      {url: `/driver/edit-status`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: changeDriverStatus
    },
      options);
    }
  


export const getEditDriverStatusDriverEditStatusPutMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editDriverStatusDriverEditStatusPut>>, TError,{data: BodyType<ChangeDriverStatus>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof editDriverStatusDriverEditStatusPut>>, TError,{data: BodyType<ChangeDriverStatus>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof editDriverStatusDriverEditStatusPut>>, {data: BodyType<ChangeDriverStatus>}> = (props) => {
          const {data} = props ?? {};

          return  editDriverStatusDriverEditStatusPut(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EditDriverStatusDriverEditStatusPutMutationResult = NonNullable<Awaited<ReturnType<typeof editDriverStatusDriverEditStatusPut>>>
    export type EditDriverStatusDriverEditStatusPutMutationBody = BodyType<ChangeDriverStatus>
    export type EditDriverStatusDriverEditStatusPutMutationError = HTTPValidationError

    /**
 * @summary Edit Driver Status
 */
export const useEditDriverStatusDriverEditStatusPut = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editDriverStatusDriverEditStatusPut>>, TError,{data: BodyType<ChangeDriverStatus>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof editDriverStatusDriverEditStatusPut>>,
        TError,
        {data: BodyType<ChangeDriverStatus>},
        TContext
      > => {

      const mutationOptions = getEditDriverStatusDriverEditStatusPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Create new trip
 * @summary Create Trip
 */
export const createTripDriverCreateTripPost = (
    tripInput: BodyType<TripInput>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<TripOutput>(
      {url: `/driver/create-trip`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: tripInput
    },
      options);
    }
  


export const getCreateTripDriverCreateTripPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createTripDriverCreateTripPost>>, TError,{data: BodyType<TripInput>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createTripDriverCreateTripPost>>, TError,{data: BodyType<TripInput>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createTripDriverCreateTripPost>>, {data: BodyType<TripInput>}> = (props) => {
          const {data} = props ?? {};

          return  createTripDriverCreateTripPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateTripDriverCreateTripPostMutationResult = NonNullable<Awaited<ReturnType<typeof createTripDriverCreateTripPost>>>
    export type CreateTripDriverCreateTripPostMutationBody = BodyType<TripInput>
    export type CreateTripDriverCreateTripPostMutationError = HTTPValidationError

    /**
 * @summary Create Trip
 */
export const useCreateTripDriverCreateTripPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createTripDriverCreateTripPost>>, TError,{data: BodyType<TripInput>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof createTripDriverCreateTripPost>>,
        TError,
        {data: BodyType<TripInput>},
        TContext
      > => {

      const mutationOptions = getCreateTripDriverCreateTripPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Get driver trips
 * @summary Get Trips
 */
export const getTripsDriverMyTripsGet = (
    
 options?: SecondParameter<typeof createInstance>,signal?: AbortSignal
) => {
      
      
      return createInstance<TripOutput[]>(
      {url: `/driver/my-trips`, method: 'GET', signal
    },
      options);
    }
  

export const getGetTripsDriverMyTripsGetQueryKey = () => {
    return [`/driver/my-trips`] as const;
    }

    
export const getGetTripsDriverMyTripsGetQueryOptions = <TData = Awaited<ReturnType<typeof getTripsDriverMyTripsGet>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTripsDriverMyTripsGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTripsDriverMyTripsGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTripsDriverMyTripsGet>>> = ({ signal }) => getTripsDriverMyTripsGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getTripsDriverMyTripsGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetTripsDriverMyTripsGetQueryResult = NonNullable<Awaited<ReturnType<typeof getTripsDriverMyTripsGet>>>
export type GetTripsDriverMyTripsGetQueryError = unknown

/**
 * @summary Get Trips
 */
export const useGetTripsDriverMyTripsGet = <TData = Awaited<ReturnType<typeof getTripsDriverMyTripsGet>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTripsDriverMyTripsGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetTripsDriverMyTripsGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get driver active trip
 * @summary Get Active Trip
 */
export const getActiveTripDriverActiveTripGet = (
    
 options?: SecondParameter<typeof createInstance>,signal?: AbortSignal
) => {
      
      
      return createInstance<TripOutput>(
      {url: `/driver/active-trip`, method: 'GET', signal
    },
      options);
    }
  

export const getGetActiveTripDriverActiveTripGetQueryKey = () => {
    return [`/driver/active-trip`] as const;
    }

    
export const getGetActiveTripDriverActiveTripGetQueryOptions = <TData = Awaited<ReturnType<typeof getActiveTripDriverActiveTripGet>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getActiveTripDriverActiveTripGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetActiveTripDriverActiveTripGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getActiveTripDriverActiveTripGet>>> = ({ signal }) => getActiveTripDriverActiveTripGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getActiveTripDriverActiveTripGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetActiveTripDriverActiveTripGetQueryResult = NonNullable<Awaited<ReturnType<typeof getActiveTripDriverActiveTripGet>>>
export type GetActiveTripDriverActiveTripGetQueryError = unknown

/**
 * @summary Get Active Trip
 */
export const useGetActiveTripDriverActiveTripGet = <TData = Awaited<ReturnType<typeof getActiveTripDriverActiveTripGet>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getActiveTripDriverActiveTripGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetActiveTripDriverActiveTripGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get all drivers
 * @summary Get Drivers
 */
export const getDriversDriverAllGet = (
    
 options?: SecondParameter<typeof createInstance>,signal?: AbortSignal
) => {
      
      
      return createInstance<Driver[]>(
      {url: `/driver/all`, method: 'GET', signal
    },
      options);
    }
  

export const getGetDriversDriverAllGetQueryKey = () => {
    return [`/driver/all`] as const;
    }

    
export const getGetDriversDriverAllGetQueryOptions = <TData = Awaited<ReturnType<typeof getDriversDriverAllGet>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getDriversDriverAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetDriversDriverAllGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getDriversDriverAllGet>>> = ({ signal }) => getDriversDriverAllGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getDriversDriverAllGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetDriversDriverAllGetQueryResult = NonNullable<Awaited<ReturnType<typeof getDriversDriverAllGet>>>
export type GetDriversDriverAllGetQueryError = unknown

/**
 * @summary Get Drivers
 */
export const useGetDriversDriverAllGet = <TData = Awaited<ReturnType<typeof getDriversDriverAllGet>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getDriversDriverAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetDriversDriverAllGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Edit driver is active
 * @summary Driver Is Active
 */
export const driverIsActiveDriverActivePut = (
    editDriverConfirm: BodyType<EditDriverConfirm>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<BaseDriver>(
      {url: `/driver/active`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: editDriverConfirm
    },
      options);
    }
  


export const getDriverIsActiveDriverActivePutMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof driverIsActiveDriverActivePut>>, TError,{data: BodyType<EditDriverConfirm>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof driverIsActiveDriverActivePut>>, TError,{data: BodyType<EditDriverConfirm>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof driverIsActiveDriverActivePut>>, {data: BodyType<EditDriverConfirm>}> = (props) => {
          const {data} = props ?? {};

          return  driverIsActiveDriverActivePut(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DriverIsActiveDriverActivePutMutationResult = NonNullable<Awaited<ReturnType<typeof driverIsActiveDriverActivePut>>>
    export type DriverIsActiveDriverActivePutMutationBody = BodyType<EditDriverConfirm>
    export type DriverIsActiveDriverActivePutMutationError = HTTPValidationError

    /**
 * @summary Driver Is Active
 */
export const useDriverIsActiveDriverActivePut = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof driverIsActiveDriverActivePut>>, TError,{data: BodyType<EditDriverConfirm>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof driverIsActiveDriverActivePut>>,
        TError,
        {data: BodyType<EditDriverConfirm>},
        TContext
      > => {

      const mutationOptions = getDriverIsActiveDriverActivePutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Edit driver balance
 * @summary Edit Balance
 */
export const editBalanceDriverEditBalancePut = (
    editBalance: BodyType<EditBalance>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<BaseDriver>(
      {url: `/driver/edit-balance`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: editBalance
    },
      options);
    }
  


export const getEditBalanceDriverEditBalancePutMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editBalanceDriverEditBalancePut>>, TError,{data: BodyType<EditBalance>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof editBalanceDriverEditBalancePut>>, TError,{data: BodyType<EditBalance>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof editBalanceDriverEditBalancePut>>, {data: BodyType<EditBalance>}> = (props) => {
          const {data} = props ?? {};

          return  editBalanceDriverEditBalancePut(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EditBalanceDriverEditBalancePutMutationResult = NonNullable<Awaited<ReturnType<typeof editBalanceDriverEditBalancePut>>>
    export type EditBalanceDriverEditBalancePutMutationBody = BodyType<EditBalance>
    export type EditBalanceDriverEditBalancePutMutationError = HTTPValidationError

    /**
 * @summary Edit Balance
 */
export const useEditBalanceDriverEditBalancePut = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editBalanceDriverEditBalancePut>>, TError,{data: BodyType<EditBalance>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof editBalanceDriverEditBalancePut>>,
        TError,
        {data: BodyType<EditBalance>},
        TContext
      > => {

      const mutationOptions = getEditBalanceDriverEditBalancePutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Edit driver
 * @summary Edit Driver
 */
export const editDriverDriverEditPut = (
    editDriver: BodyType<EditDriver>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<BaseDriver>(
      {url: `/driver/edit`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: editDriver
    },
      options);
    }
  


export const getEditDriverDriverEditPutMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editDriverDriverEditPut>>, TError,{data: BodyType<EditDriver>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof editDriverDriverEditPut>>, TError,{data: BodyType<EditDriver>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof editDriverDriverEditPut>>, {data: BodyType<EditDriver>}> = (props) => {
          const {data} = props ?? {};

          return  editDriverDriverEditPut(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EditDriverDriverEditPutMutationResult = NonNullable<Awaited<ReturnType<typeof editDriverDriverEditPut>>>
    export type EditDriverDriverEditPutMutationBody = BodyType<EditDriver>
    export type EditDriverDriverEditPutMutationError = HTTPValidationError

    /**
 * @summary Edit Driver
 */
export const useEditDriverDriverEditPut = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editDriverDriverEditPut>>, TError,{data: BodyType<EditDriver>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof editDriverDriverEditPut>>,
        TError,
        {data: BodyType<EditDriver>},
        TContext
      > => {

      const mutationOptions = getEditDriverDriverEditPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Delete driver by ID
 * @summary Delete Driver
 */
export const deleteDriverDriverDeleteDelete = (
    params: DeleteDriverDriverDeleteDeleteParams,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/driver/delete`, method: 'DELETE',
        params
    },
      options);
    }
  


export const getDeleteDriverDriverDeleteDeleteMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteDriverDriverDeleteDelete>>, TError,{params: DeleteDriverDriverDeleteDeleteParams}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteDriverDriverDeleteDelete>>, TError,{params: DeleteDriverDriverDeleteDeleteParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteDriverDriverDeleteDelete>>, {params: DeleteDriverDriverDeleteDeleteParams}> = (props) => {
          const {params} = props ?? {};

          return  deleteDriverDriverDeleteDelete(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteDriverDriverDeleteDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof deleteDriverDriverDeleteDelete>>>
    
    export type DeleteDriverDriverDeleteDeleteMutationError = HTTPValidationError

    /**
 * @summary Delete Driver
 */
export const useDeleteDriverDriverDeleteDelete = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteDriverDriverDeleteDelete>>, TError,{params: DeleteDriverDriverDeleteDeleteParams}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteDriverDriverDeleteDelete>>,
        TError,
        {params: DeleteDriverDriverDeleteDeleteParams},
        TContext
      > => {

      const mutationOptions = getDeleteDriverDriverDeleteDeleteMutationOptions(options);

      return useMutation(mutationOptions);
    }
    