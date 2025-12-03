export type Category = {
    id: string | number;
    name: string;
    is_system: boolean;
    description: string;
    created_at: string;
    updated_at: string;
}

export type CategoryRequest = {
    name?: string;
    description?: string;
}