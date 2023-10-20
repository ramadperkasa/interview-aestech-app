export interface BranchData {
    id: number;
    name: string;
    email: string;
    address: string;
}

export interface BranchState {
    loading: boolean;
    data: BranchData[];
}

export interface State {
    branch: BranchState;
}