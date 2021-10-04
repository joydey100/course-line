// Custom useService Hook

import { useEffect, useState } from "react";

const useService = () => {
  // state declare for Service or courses
  const [services, setServices] = useState([]);

  //   load Data
  useEffect(() => {
    fetch(`./services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useService;
