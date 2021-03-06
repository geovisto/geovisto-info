// Geovisto core
import {
    IMapToolConfig
} from "geovisto";

/**
 * This type provides specification of the info tool config model.
 * 
 * @author Jiri Hynek
 * @author Tomas Koscielniak
 */
type IInfoToolConfig = IMapToolConfig & {
    defaultFile: string
}
export default IInfoToolConfig;