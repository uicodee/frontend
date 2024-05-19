/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Taxopark API
 * Taxopark is a company that transports passengers between cities
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  GetAllSeatsSeatAllGetParams,
  HTTPValidationError,
  Seat
} from '.././model'
import { createInstance } from '.././http/index';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * Get all available seats by trip
 * @summary Get All Seats
 */
export const getAllSeatsSeatAllGet = (
    params: GetAllSeatsSeatAllGetParams,
 options?: SecondParameter<typeof createInstance>,signal?: AbortSignal
) => {
      
      
      return createInstance<Seat[]>(
      {url: `/seat/all`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetAllSeatsSeatAllGetQueryKey = (params: GetAllSeatsSeatAllGetParams,) => {
    return [`/seat/all`, ...(params ? [params]: [])] as const;
    }

    
export const getGetAllSeatsSeatAllGetQueryOptions = <TData = Awaited<ReturnType<typeof getAllSeatsSeatAllGet>>, TError = HTTPValidationError>(params: GetAllSeatsSeatAllGetParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllSeatsSeatAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAllSeatsSeatAllGetQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllSeatsSeatAllGet>>> = ({ signal }) => getAllSeatsSeatAllGet(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAllSeatsSeatAllGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetAllSeatsSeatAllGetQueryResult = NonNullable<Awaited<ReturnType<typeof getAllSeatsSeatAllGet>>>
export type GetAllSeatsSeatAllGetQueryError = HTTPValidationError

/**
 * @summary Get All Seats
 */
export const useGetAllSeatsSeatAllGet = <TData = Awaited<ReturnType<typeof getAllSeatsSeatAllGet>>, TError = HTTPValidationError>(
 params: GetAllSeatsSeatAllGetParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllSeatsSeatAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetAllSeatsSeatAllGetQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



