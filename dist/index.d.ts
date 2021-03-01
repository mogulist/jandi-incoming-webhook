declare type Response = {
    status?: number;
    statusText?: string;
    errorCode?: string;
};
export default class Jandi {
    webHook: string;
    constructor(webHook: string);
    send(body: string, callback: any): void;
    sendAsync: (body: string) => Promise<Response>;
}
export {};
