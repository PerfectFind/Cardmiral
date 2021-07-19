import { Position } from "./position.model";

export interface Message {
    url: string
    message: string
    signature: string
    enabled?: boolean
    fontStyle: "Roboto" | "Helvetica Neue" | "sans-serif"
    position: Position
}