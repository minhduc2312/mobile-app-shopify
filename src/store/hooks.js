import { useContext } from "react";
import Context from './Context'


export const useStore = () => {
    const [state, dispatch] = useContext(Context);
    const { products } = state
    return [state, dispatch]
}
