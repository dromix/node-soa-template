export function hash(password: string): Promise<string>;
export function compare(password: string, hash: string): Promise<boolean>;
export function random(length?: number): string;