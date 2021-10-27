import "antd/dist/antd.css";
import "../styles/antd.less";
import "../styles/style.scss"
import { Provider } from "react-redux";

import withReduxStore from "../common/withReduxStore";
import FetchInitData from "../component/other/FetchInitData";

const MyApp = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <FetchInitData>
        <Component {...pageProps} />
      </FetchInitData>
    </Provider>
  )
}

export default withReduxStore(MyApp)
