export class FormDataImpl implements FormData{
    append(name: string, value: string | Blob): void;
    append(name: string, value: string): void;
    append(name: string, blobValue: Blob, filename?: string | undefined): void;
    append(name: unknown, blobValue: unknown, filename?: unknown): void {
        throw new Error("Method not implemented.");
    }
    delete(name: string): void {
        throw new Error("Method not implemented.");
    }
    get(name: string): FormDataEntryValue | null {
        throw new Error("Method not implemented.");
    }
    getAll(name: string): FormDataEntryValue[] {
        throw new Error("Method not implemented.");
    }
    has(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    set(name: string, value: string | Blob): void;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string | undefined): void;
    set(name: unknown, blobValue: unknown, filename?: unknown): void {
        throw new Error("Method not implemented.");
    }
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void {
        throw new Error("Method not implemented.");
    }

}
