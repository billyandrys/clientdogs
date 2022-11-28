import TYPE from "./types";
import axios from 'axios'
import {
  servicesAllDogs,
  servicesAllTemperaments,
  servicesAllWeight,
  servicesSearch,
  servicesById,
  servicesCreateDog
} from "../services";

export const getAllDogs =  () => (dispatch) => {

 fetch(servicesAllDogs)
   .then((response) => response.json())
   .then((allDogs) => {
     dispatch({
       type: TYPE.GET_ALL_DOGS,
       payload: allDogs,
     });
   }).catch((error) => {
     console.log(error);
   });
    
 };

export const getAllTemperaments =() =>  async (dispatch) => {
  fetch(servicesAllTemperaments)
    .then((response) => response.json())
    .then((allTemperaments) => {
      dispatch({
        type: TYPE.GET_ALL_TEMPERAMENTS,
        payload: allTemperaments,
      });
    }).catch((error)=>{
      console.log(error)
  })
};

export const getAllWeight = () => (dispatch) => {
  fetch(servicesAllWeight)
    .then((response) => response.json())
    .then((weight) =>
      dispatch({
        type: TYPE.GET_ALL_WEIGHT,
        payload: weight,
      })
    ).catch((error)=>{
      console.log(error)
  })
};


export const filterByTemperaments = (payload) => (dispatch) => {

    dispatch({
        type:TYPE.FILTER_BY_TEMPERAMENT,
        payload: payload
    })
}

export const filterByWeight = (payload) => (dispatch) => {
    dispatch({
        type:TYPE.FILTER_BY_WEIGHT,
        payload:payload
    })
 }

export const orderByName =(payload)=>dispatch=>{
    dispatch({
        type: TYPE.ORDER_BY_NAME,
        payload: payload
    })
}

export const getOrderOrigenCreate = (payload)=>dispatch=>{

    dispatch({
      type:TYPE.ORDER_ORIGEN_CREATE,
      payload:payload
    })
}

export const filterAllDogs = ()=>dispatch=>{
  dispatch({
    type:TYPE.FILTER_ALL_DOGS,
    
  })
}

export const getSearch = (payload)=>dispatch=>{
  const word = payload[0].toUpperCase() + payload.substring(1)
  fetch(`${servicesSearch}${word}`)
    .then((response)=>response.json())
    .then((search)=>{
      dispatch({
        type: TYPE.SEARCH,
        payload : search,
      })
    }).catch((error)=>{
        console.log(error)
        dispatch({
          type: TYPE.CLOSED_ERROR,
          paylod:true
        })
    })
}


export const getDogById = (payload)=>dispatch=>{
  fetch(`${servicesById}${payload}`)
    .then((response)=>response.json())
    .then((search)=>{
      dispatch({
        type: TYPE.SEARC_ID,
        payload : search,
      })
    }).catch((error)=>{
      console.log(error)
  })
}


export const createDog =  (payload, setSend, setDuplicate)=>async (dispatch)=>{
   

  try{
    let name = payload.name[0].toUpperCase() + payload.name.substring(1)
        const test = { ...payload, name:name }
         await axios.post(servicesCreateDog, test)
          .then(res=>{
            dispatch(getAllDogs())
            dispatch({
              type:  TYPE.DUPLICATE_BREED,
              payload: false
            })
            setSend(true)
            setDuplicate(false)
          })
            .catch(err=>{
              dispatch({
                type:  TYPE.DUPLICATE_BREED,
                payload: true
              })
              setSend(false)
              setDuplicate(true)
            })

        
            //return response
  }catch(err){
      console.log(err)
  }
  
  }


export const closeErrors = ()=>dispatch=>{
  dispatch({
    type: TYPE.CLOSED_ERROR,
    paylod:false
  })
}