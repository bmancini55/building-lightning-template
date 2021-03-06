import { Lnd } from "./v0.12.1-beta/Types";
export interface ILndRpcClient {
    getInfo(): Promise<Lnd.Info>;
    addInvoice(options: Lnd.AddInvoiceInput): Promise<Lnd.AddInvoiceResult>;
    listInvoices(options: Partial<Lnd.ListInvoicesRequest>): Promise<Lnd.ListInvoiceResponse>;
    subscribeInvoices(
        cb: (invoice: Lnd.Invoice) => void,
        options: Partial<Lnd.SubscribeInvoicesOptions>,
    );
}
