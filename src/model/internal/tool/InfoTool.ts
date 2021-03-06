// Geovisto core
import {
    IMapForm,
    IMapFormControl,
    IMapToolInitProps,
    MapTool
} from "geovisto";

import IInfoTool from "../../types/tool/IInfoTool";
import IInfoToolConfig from "../../types/tool/IInfoToolConfig";
import IInfoToolDefaults from "../../types/tool/IInfoToolDefaults";
import IInfoToolProps from "../../types/tool/IInfoToolProps";
import IInfoToolState from "../../types/tool/IInfoToolState";
import InfoToolDefaults from "./InfoToolDefaults";
import InfoToolState from "./InfoToolState";
import InfoToolMapForm from "../form/InfoToolMapForm";

// styles
import "../../../styles/style.scss";

/**
 * This class implements Info Tool
 * 
 * @author Jiri Hynek
 *     IMap,
 */
class InfoTool extends MapTool implements IInfoTool, IMapFormControl {

    private mapForm!: IMapForm;

    /**
     * It creates a new tool with respect to the props.
     * 
     * @param props
     */
    public constructor(props?: IInfoToolProps) {
        super(props);
    }

    /**
     * It creates a copy of the uninitialized tool.
     */
    public copy(): IInfoTool {
        return new InfoTool(this.getProps());
    }

    /**
     * It returns the props given by the programmer.
     */
    public getProps(): IInfoToolProps {
        return <IInfoToolProps> super.getProps();
    }
    
    /**
     * It returns default values of the filters tool.
     */
    public getDefaults(): IInfoToolDefaults {
        return <IInfoToolDefaults> super.getDefaults();
    }

    /**
     * It creates new defaults of the tool.
     */
    public createDefaults(): IInfoToolDefaults {
        return new InfoToolDefaults();
    }

    /**
     * It returns the filters tool state.
     */
    public getState(): IInfoToolState {
        return <IInfoToolState> super.getState();
    }

    /**
     * It returns default tool state.
     */
    public createState(): IInfoToolState {
        return new InfoToolState(this);
    }

    /**
     * Overrides the super method.
     * 
     * @param initProps
     */
    public initialize(initProps: IMapToolInitProps<IInfoToolConfig>): this {
        return super.initialize(initProps);
    }

    /**
     * It creates new filter tool.
     */
    public create(): this {
        this.getInfo();
        return this;
    }

    /**
     * It returns a map form.
     */
    public getMapForm(): IMapForm {
        if(this.mapForm == undefined) {
            this.mapForm = this.createMapForm();
        }
        return this.mapForm;
    }

    /**
     * It creates new map form.
     */
    protected createMapForm(): IMapForm {
        return new InfoToolMapForm(this);
    }

    /**
     * It creates a new map form.
     * 
     */
    public getInfo(): void {
        this.createMapForm();
    }
}
export default InfoTool;