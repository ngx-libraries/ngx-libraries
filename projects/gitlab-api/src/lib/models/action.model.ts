import { CommitAction } from './commit-action.model';

export interface Action {
  action: CommitAction;
  file_path: string;
  previous_path?: string;
  content?: string;
  encoding?: 'text' | 'base64';
  last_commit_id?: string;
  execute_filemode?: string;
}
