export interface Test {
    id: number;
    title: string;
    description: string | null;
    icon: string | null;
    rules: {
        maxTime: number | null;
        maxAttempt: number | null;
    };
};