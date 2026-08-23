import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrasService {

  private apiUrl = 'https://putdown-spending-crib.ngrok-free.dev/perguntar';

  constructor(private http: HttpClient) {}

  perguntar(pergunta: string): Observable<any> {
    return this.http.post<any>(
      this.apiUrl,
      { pergunta: pergunta }
    );
  }
}