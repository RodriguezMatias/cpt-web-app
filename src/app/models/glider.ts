import { Manual } from "./manual";

export interface Glider {
    model: string,
    designator: string,
    description: string,
    image: string,
    manualList: Manual[],
}
