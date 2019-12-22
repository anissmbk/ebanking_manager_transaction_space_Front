import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ManagerTransactionService} from '../manager_transaction_service/manager.transaction.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bad-transaction-details',
  templateUrl: './bad-transaction-details.component.html',
  styleUrls: ['./bad-transaction-details.component.scss']
})
export class BadTransactionDetailsComponent implements OnInit {

  private transaction;
  transactionId: number;

  constructor(private router: Router, private managerTransactionService: ManagerTransactionService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.transactionId = this.route.snapshot.params.id;

    this.managerTransactionService.getTransactionDetails(this.transactionId).then(resp => {
      console.log(resp);
      this.transaction = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  validerTransaction() {
    this.managerTransactionService.validateTransaction(this.transactionId).then(resp => {
      Swal.fire({
        icon: 'success',
        title: 'success changes',
        text: 'success validation',
      });
      location.reload();
    }).catch(err => {
      console.log(err);
      $('.preloader').fadeOut();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'error serveur',
      });
    });
  }

  removeTransaction() {
    this.managerTransactionService.removeTransaction(this.transactionId).then(resp => {
      Swal.fire({
        icon: 'success',
        title: 'success remove',
        text: 'success remove',
      });
      location.reload();
    }).catch(err => {
      console.log(err);
      $('.preloader').fadeOut();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'error serveur',
      });
    });
  }
}
