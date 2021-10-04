// Custom useService Hook

import { useEffect, useState } from "react";

const useService = () => {
  // state declare
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
