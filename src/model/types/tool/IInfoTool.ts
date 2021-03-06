// Geovisto core
import {
    IMapTool,
    IMapToolInitProps
} from "geovisto";

import IInfoToolConfig from "./IInfoToolConfig";
import IInfoToolDefaults from "./IInfoToolDefaults";
import IInfoToolProps from "./IInfoToolProps";
import IInfoToolState from "./IInfoToolState";

/**
 * This interface declares the  info tool.
 * It provides methods for Info management.
 * 
 * @author Jiri Hynek
 * @author Tomas Koscielniak
 */
interface IInfoTool<
    TProps extends IInfoToolProps = IInfoToolProps,
    TDefaults extends IInfoToolDefaults = IInfoToolDefaults,
    TState extends IInfoToolState = IInfoToolState,
    TConfig extends IInfoToolConfig = IInfoToolConfig,
    TInitProps extends IMapToolInitProps<TConfig> = IMapToolInitProps<TConfig>
> extends IMapTool<TProps, TDefaults, TState, TConfig, TInitProps>  {

    /**
     * It creates a copy of the uninitialized tool.
     */
    copy(): IInfoTool;
}
export default IInfoTool;