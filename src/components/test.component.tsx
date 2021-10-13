import React, { useEffect, useState } from "react";
import axios from 'axios';
import config from '../config/config.json';
import { GoogleApi } from "../libs/constants/googleAPi";

const TestComponent: React.FC = () => {

  const [adata, setData] = useState<any>('a');

  const testConnenct = async () => {
    try {
      const { data }: any = await axios.get(`${GoogleApi.SHEETS}${config.sheet_id}/values:batchGet?ranges=대구!A2:H16&ranges=대덕!A2:H16&ranges=광주!A2:H16&ranges=부산!A2:H16&key=${config.private_key}`);
      console.log(data);
      setData(data.spreadsheetId);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    testConnenct();
  }, [])

  return (
    <div>
      {adata}
    </div>
  )
}

export default TestComponent;