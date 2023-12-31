import { useMemo } from "react";
import { Input, Form } from "antd";
import { debounce } from "lodash";
import axios from "axios";
import apis from "../store/api.json";

const DoggoSearch = (props) => {
  const fetchDogs = (searchTerm) => {
    props.setLoading(true);
    axios({
      method: "GET",
      url: `${apis.getBreeds}q=${searchTerm}`,
      headers: {
        "x-api-key": import.meta.env.VITE_DOGAPI_KEY,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data) {
          props.setDogs(response.data);
          props.setLoading(false);
        }
        throw new Error('no data');
      })
      .catch((err) => {
        console.log("fetch doggos err: ", err);
        props.setError(true);
        props.setLoading(false);
      });
  };

  const debounced = useMemo(() => debounce(fetchDogs, 1000), []);

  return (
    <Form.Item name="breed-search" label="Breed Name" field="breed-search">
      <Input
        allowClear={true}
        placeholder="input search text"
        onChange={(e) => {
          debounced(e.target.value);
        }}
      />
    </Form.Item>
  );
};

export default DoggoSearch;
