import axios from 'axios';

const BASE = `maxcereceda.up.railway.app/api/v1`;

const apiEndpoint = `${BASE}/clients/send-mail`;

export const sendMail = async (data) => {
  try {
    const response = await axios.post(apiEndpoint, data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      // El servidor respondió con un estado diferente al 2xx
      const serverErrors = error.response.data.errors;
      throw {
        errors: serverErrors,
        message: 'Error en la solicitud del servidor',
      };
    } else if (error.request) {
      // La solicitud se hizo pero no se recibió respuesta
      console.error('No response received:', error.request);
      throw new Error('No se recibió respuesta del servidor');
    } else {
      // Algo sucedió al configurar la solicitud
      console.error('Error setting up request:', error.message);
      throw new Error('Error al configurar la solicitud');
    }
  }
};
