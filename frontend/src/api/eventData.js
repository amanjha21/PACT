import axios from axios;

const url = "";

export const fetchEventById = async (id) => {
    try {
      const data = await axios.get(`${url}/event/${id}`);
      console.log(data);

      return data; 
  } catch(err) {
        console.error(err);
    }
}

export const fetchEventByPincode = async (pincode) => {
    try {
        const data = await axios.get(`${url}/event/pincode/${pincode}`);
        console.log(data);
    
        return data;
    } catch(err) {
        console.error(err);
    }  
}

export const createEvent = async (eventData) => {
    try { 
        axios.post(`${url}/create`);
    } catch(err) {
        console.error(err);
    }   
}

