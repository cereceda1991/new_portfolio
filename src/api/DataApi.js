// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLanguageData } from '../store/languageSlice';
// import { useEffect } from 'react';

// export const DataApi = () => {
//   const languageData = useSelector((state) => state.language);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!languageData) {
//       const url =
//         'https://raw.githubusercontent.com/cereceda1991/new_portfolio/main/src/languages/data_es.json';
//       axios
//         .get(url)
//         .then((response) => {
//           const languageData = response.data;
//           dispatch(setLanguageData(languageData));
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [languageData, dispatch]);

//   return languageData;
// };
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageData } from '../store/languageSlice';
import { useEffect } from 'react';
import localData from '../languages/data_es.json'; // Ruta local al archivo JSON

export const DataApi = () => {
  const languageData = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!languageData) {
      dispatch(setLanguageData(localData));
    }
  }, [languageData, dispatch]);

  return languageData;
};
