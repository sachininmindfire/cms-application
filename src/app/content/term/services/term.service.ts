import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Term } from '../term';

@Injectable({
  providedIn: 'root'
})
export class TermService {
  private apiUrl = 'http://localhost:3000/terms';

  constructor(private http: HttpClient) {}

  getTerms(): Observable<Term[]> {
    return this.http.get<Term[]>(this.apiUrl);
  }

  getTerm(id: number): Observable<Term> {
    return this.http.get<Term>(`${this.apiUrl}/${id}`);
  }

  createTerm(term: Term): Observable<Term> {
    return this.http.post<Term>(this.apiUrl, term);
  }

  updateTerm(id: number, term: Term): Observable<Term> {
    return this.http.put<Term>(`${this.apiUrl}/${id}`, term);
  }

  deleteTerm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}