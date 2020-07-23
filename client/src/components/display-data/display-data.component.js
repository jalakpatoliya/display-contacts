import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import COLUMNSCONFIG from "./columns.config";

const DisplayData = () => {
  const [organizations, setOrganizations] = useState([]);

  const columns = COLUMNSCONFIG;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: {
            data: { organizations: data },
          },
        } = await Axios.get(`/api/data`);
        await setOrganizations([...organizations, ...data]);
        console.log(data);
      };
      fetchData();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div>
      {organizations.length > 0 ? (
        <ReactTable data={organizations} columns={columns} />
      ) : null}
    </div>
  );
};

export default DisplayData;
