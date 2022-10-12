import "./src/config/firebase";
import "react-native-gesture-handler";
import { StoreProvider } from "./src/store";
import App from "./src";

export default app = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};
