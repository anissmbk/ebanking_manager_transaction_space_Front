import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ApiService} from '../services/api.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerTransactionService {

  constructor(private apiService: ApiService, private authService: AuthService) {
  }
  // meryem
  getBadTransactions() {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');
      if (token !== null) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.substring(1, token.length - 1)
        });
        this.apiService.get('/badTransactions', {headers: headers}).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      } else {
        this.authService.authenticationState.next(false);
      }
    });
  }

  getTransactionDetails(id: any) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');
      if (token !== null) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.substring(1, token.length - 1)
        });
        this.apiService.get('/transaction_details?id=' + id, {headers: headers}).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      } else {
        this.authService.authenticationState.next(false);
      }
    });
  }

  validateTransaction(id: any) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');
      if (token !== null) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.substring(1, token.length - 1)
        });
        this.apiService.post('/transaction_manager/valide_transaction', id, {headers: headers}).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      } else {
        this.authService.authenticationState.next(false);
      }
    });
  }

  removeTransaction(id: any) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('token');
      if (token !== null) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.substring(1, token.length - 1)
        });
        this.apiService.post('/transaction_manager/remove_transaction', id, {headers: headers}).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      } else {
        this.authService.authenticationState.next(false);
      }
    });
  }
}
