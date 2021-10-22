import { useRecoilState } from "recoil";
import { getConnectData } from "../libs/apis/getConnect";
import { connectState } from "./atoms/connect.atom";

const ConnectHooks = () => {

  const [connect, setConnect] = useRecoilState(connectState);

  const connectList = async () => {
    try {
      setConnect(await getConnectData());
    } catch (err) { }
  }

  return {
    connect,
    connectList,
  }
}

export default ConnectHooks;