export interface ReplicateResponse {
  id: string;
  model: string;
  version: string;
  urls: {
    get: string;
    cancel: string;
  };
  status: string;
  output: string[];
  error: string | null;
}

export interface GenerationError {
  message: string;
  status?: number;
  details?: string;
}