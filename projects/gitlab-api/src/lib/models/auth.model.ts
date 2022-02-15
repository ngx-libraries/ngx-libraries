import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum GitlabApiAuthType {
  O_AUTH_2,
  PERSONAL_ACCESS_TOKEN
}

export class GitlabApiAuth {
  public readonly authHeaders: HttpHeaders;

  public readonly type: GitlabApiAuthType;
  public readonly token: string;

  constructor(type: GitlabApiAuthType, token: string) {
    this.type = type;
    this.token = token;

    /* eslint-disable @typescript-eslint/naming-convention */
    switch (this.type) {
      case GitlabApiAuthType.O_AUTH_2:
        this.authHeaders = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
        break;
      case GitlabApiAuthType.PERSONAL_ACCESS_TOKEN:
        this.authHeaders = new HttpHeaders({ 'Private-Token': `${this.token}` });
        break;
      default:
        throw new Error('Gitlab Auth Token');
    }

    /* eslint-enable @typescript-eslint/naming-convention */
  }
}

export interface GitlabApiAuthorizationReader {
  readToken(): Observable<GitlabApiAuth>;
}

export interface GitlabApiAuthorizationWriter {
  writeToken(type: GitlabApiAuthType, token: string): Observable<GitlabApiAuth>;
}
