
export class ApiService {
    constructor(readonly host: string = "http://127.0.0.1:8001") {}

    protected async get<T>(path: string): Promise<T> {
        const res = await fetch(path, { credentials: "include" });
        return await res.json();
    }

    public async fetchGreeting(): Promise<string> {
        return this.get("/api/greeting");
    }
}
