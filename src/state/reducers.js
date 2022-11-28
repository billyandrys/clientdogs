import TYPE from "./types";

const initialState = {
  allDogs: [],
  copyAllDog: [],
  allTemperaments: [],
  allWeight: [],
  dogById :[],
  laoding:true,
  errors:false,
  duplicateBreed:false
};
const ORDER_ASC = "Asc"
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        copyAllDog: action.payload,
        laoding:false
      };
    case TYPE.GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };
    case TYPE.GET_ALL_WEIGHT:
      return {
        ...state,
        allWeight: action.payload,
      };
    case TYPE.FILTER_BY_TEMPERAMENT: {
      const allDogsfilter = [...state.copyAllDog];
      const searchWord = (dog, word) => {
        for (let i = 0; i < dog?.length; i += 1) {
          const dogString = dog.toString();
          if (dogString.slice(i, i + word.length) === word) {
            return dog;
          }
        }
      };

      const filterTemperaments = allDogsfilter.filter(({ temperament }) => {
        return searchWord(temperament, action.payload);
      });

      return {
        ...state,
        allDogs: filterTemperaments,
      };
    }
    case TYPE.FILTER_BY_WEIGHT: {
      const allDogsfilter = [...state.copyAllDog];
      const filter = allDogsfilter.filter(
        ({ weight }) => weight === action.payload
      );

      return {
        ...state,
        allDogs: filter,
      };
    }
    case TYPE.ORDER_BY_NAME: {
      const allDogsfilter = [...state.allDogs];
      let sotAsc =
        action.payload === ORDER_ASC
          ? allDogsfilter.sort((a, b) => {
              return a.name.localeCompare(b.name);
            })
          : allDogsfilter.sort((a, b) => {
              return b.name.localeCompare(a.name);
            });
      return {
        ...state,
        allDogs: sotAsc,
      };
    }

    case TYPE.ORDER_ORIGEN_CREATE:{
      const allDogsfilter = [...state.copyAllDog]
      let orderCreate = 
                          action.payload === 'DataBase'
                          ? allDogsfilter.filter(({createdAt})=>createdAt)
                          : allDogsfilter
      if(!orderCreate.length){
          
          return { 
            ...state,
            allDogs:allDogsfilter,
            errors:true
            
          }
      }else {
        return { 
          ...state,
          allDogs : orderCreate
        }

      }

      
     }

     case TYPE.FILTER_ALL_DOGS :{
      const filterAllDogs = [ ...state.copyAllDog]
      return {
        ...state,
        allDogs: filterAllDogs
      }
     } 

     case TYPE.SEARCH :
      if(action.payload.notfound){
        return {
          ...state,
          errors: true
        }
      }else { 
        return {
          ...state,
          allDogs: action.payload
        }
      }
        
        case TYPE.SEARC_ID :
        return {
          ...state,
          dogById: action.payload
        }
      
    case TYPE.CLOSED_ERROR:
      
        return{
          ...state,
          errors: action.payload
        }

    case TYPE.DUPLICATE_BREED :
      return {
        ...state,
        duplicateBreed:action.payload
      }
      

    default:
      return state;
  }
};

export default rootReducer;
