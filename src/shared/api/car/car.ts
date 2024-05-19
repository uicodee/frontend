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
  BodyCreateCarCarNewPost,
  Car,
  CreateCarCarNewPostParams,
  DeleteCarCarDeleteDeleteParams,
  EditCar,
  HTTPValidationError
} from '.././model'
import { createInstance } from '.././http/index';
import type { BodyType } from '.././http/index';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * Get all cars
 * @summary Get Cars
 */
export const getCarsCarAllGet = (
    
 options?: SecondParameter<typeof createInstance>,signal?: AbortSignal
) => {
      
      
      return createInstance<Car[]>(
      {url: `/car/all`, method: 'GET', signal
    },
      options);
    }
  

export const getGetCarsCarAllGetQueryKey = () => {
    return [`/car/all`] as const;
    }

    
export const getGetCarsCarAllGetQueryOptions = <TData = Awaited<ReturnType<typeof getCarsCarAllGet>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCarsCarAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCarsCarAllGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCarsCarAllGet>>> = ({ signal }) => getCarsCarAllGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCarsCarAllGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetCarsCarAllGetQueryResult = NonNullable<Awaited<ReturnType<typeof getCarsCarAllGet>>>
export type GetCarsCarAllGetQueryError = unknown

/**
 * @summary Get Cars
 */
export const useGetCarsCarAllGet = <TData = Awaited<ReturnType<typeof getCarsCarAllGet>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCarsCarAllGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetCarsCarAllGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get single car by ID
 * @summary Get Car
 */
export const getCarCarCarIdGet = (
    carId: number,
 options?: SecondParameter<typeof createInstance>,signal?: AbortSignal
) => {
      
      
      return createInstance<Car>(
      {url: `/car/${carId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetCarCarCarIdGetQueryKey = (carId: number,) => {
    return [`/car/${carId}`] as const;
    }

    
export const getGetCarCarCarIdGetQueryOptions = <TData = Awaited<ReturnType<typeof getCarCarCarIdGet>>, TError = HTTPValidationError>(carId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCarCarCarIdGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCarCarCarIdGetQueryKey(carId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCarCarCarIdGet>>> = ({ signal }) => getCarCarCarIdGet(carId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(carId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCarCarCarIdGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetCarCarCarIdGetQueryResult = NonNullable<Awaited<ReturnType<typeof getCarCarCarIdGet>>>
export type GetCarCarCarIdGetQueryError = HTTPValidationError

/**
 * @summary Get Car
 */
export const useGetCarCarCarIdGet = <TData = Awaited<ReturnType<typeof getCarCarCarIdGet>>, TError = HTTPValidationError>(
 carId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCarCarCarIdGet>>, TError, TData>>, request?: SecondParameter<typeof createInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetCarCarCarIdGetQueryOptions(carId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Create new car
 * @summary Create Car
 */
export const createCarCarNewPost = (
    bodyCreateCarCarNewPost: BodyType<BodyCreateCarCarNewPost>,
    params: CreateCarCarNewPostParams,
 options?: SecondParameter<typeof createInstance>,) => {
      
      const formData = new FormData();
formData.append('photo', bodyCreateCarCarNewPost.photo)

      return createInstance<Car>(
      {url: `/car/new`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData,
        params
    },
      options);
    }
  


export const getCreateCarCarNewPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCarCarNewPost>>, TError,{data: BodyType<BodyCreateCarCarNewPost>;params: CreateCarCarNewPostParams}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof createCarCarNewPost>>, TError,{data: BodyType<BodyCreateCarCarNewPost>;params: CreateCarCarNewPostParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createCarCarNewPost>>, {data: BodyType<BodyCreateCarCarNewPost>;params: CreateCarCarNewPostParams}> = (props) => {
          const {data,params} = props ?? {};

          return  createCarCarNewPost(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateCarCarNewPostMutationResult = NonNullable<Awaited<ReturnType<typeof createCarCarNewPost>>>
    export type CreateCarCarNewPostMutationBody = BodyType<BodyCreateCarCarNewPost>
    export type CreateCarCarNewPostMutationError = HTTPValidationError

    /**
 * @summary Create Car
 */
export const useCreateCarCarNewPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCarCarNewPost>>, TError,{data: BodyType<BodyCreateCarCarNewPost>;params: CreateCarCarNewPostParams}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof createCarCarNewPost>>,
        TError,
        {data: BodyType<BodyCreateCarCarNewPost>;params: CreateCarCarNewPostParams},
        TContext
      > => {

      const mutationOptions = getCreateCarCarNewPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Edit car by ID
 * @summary Edit Car
 */
export const editCarCarEditPut = (
    editCar: BodyType<EditCar>,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<Car>(
      {url: `/car/edit`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: editCar
    },
      options);
    }
  


export const getEditCarCarEditPutMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editCarCarEditPut>>, TError,{data: BodyType<EditCar>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof editCarCarEditPut>>, TError,{data: BodyType<EditCar>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof editCarCarEditPut>>, {data: BodyType<EditCar>}> = (props) => {
          const {data} = props ?? {};

          return  editCarCarEditPut(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EditCarCarEditPutMutationResult = NonNullable<Awaited<ReturnType<typeof editCarCarEditPut>>>
    export type EditCarCarEditPutMutationBody = BodyType<EditCar>
    export type EditCarCarEditPutMutationError = HTTPValidationError

    /**
 * @summary Edit Car
 */
export const useEditCarCarEditPut = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editCarCarEditPut>>, TError,{data: BodyType<EditCar>}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof editCarCarEditPut>>,
        TError,
        {data: BodyType<EditCar>},
        TContext
      > => {

      const mutationOptions = getEditCarCarEditPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Delete car by ID
 * @summary Delete Car
 */
export const deleteCarCarDeleteDelete = (
    params: DeleteCarCarDeleteDeleteParams,
 options?: SecondParameter<typeof createInstance>,) => {
      
      
      return createInstance<unknown>(
      {url: `/car/delete`, method: 'DELETE',
        params
    },
      options);
    }
  


export const getDeleteCarCarDeleteDeleteMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteCarCarDeleteDelete>>, TError,{params: DeleteCarCarDeleteDeleteParams}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof deleteCarCarDeleteDelete>>, TError,{params: DeleteCarCarDeleteDeleteParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteCarCarDeleteDelete>>, {params: DeleteCarCarDeleteDeleteParams}> = (props) => {
          const {params} = props ?? {};

          return  deleteCarCarDeleteDelete(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteCarCarDeleteDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCarCarDeleteDelete>>>
    
    export type DeleteCarCarDeleteDeleteMutationError = HTTPValidationError

    /**
 * @summary Delete Car
 */
export const useDeleteCarCarDeleteDelete = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteCarCarDeleteDelete>>, TError,{params: DeleteCarCarDeleteDeleteParams}, TContext>, request?: SecondParameter<typeof createInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteCarCarDeleteDelete>>,
        TError,
        {params: DeleteCarCarDeleteDeleteParams},
        TContext
      > => {

      const mutationOptions = getDeleteCarCarDeleteDeleteMutationOptions(options);

      return useMutation(mutationOptions);
    }
    