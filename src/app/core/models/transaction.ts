import { CategoryCode, TransactionType } from '../enums/transaction';

export interface Transaction {
  amount: number;
  categoryCode: CategoryCode;
  merchant: string;
  merchantLogo: any; // base64 image
  transactionDate: number;
  transactionType: TransactionType;
}

export interface Merchant {
  merchant: string;
  merchantLogo: any;
  categoryCode: string;
}

export interface TransactionData {
  data: Transaction[];
}
