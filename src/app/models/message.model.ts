export interface Message {
    url: string
    message: string
    signature: string
    fontStyle: "Roboto" | "Helvetica Neue" | "sans-serif"
    position: {
        x: number
        y: number
    }
}