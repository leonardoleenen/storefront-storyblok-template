export type PaymentType = {
	id: string;
	data: any;
};

export const PaymentSessionStatusType =
	'authorized' ||
	'captured' ||
	'cancelled' ||
	'failed' ||
	'pending' ||
	'refunded' ||
	'succeeded' ||
	'voided';

export type PaymentSessionType = {
	id: string;
	status: typeof PaymentSessionStatusType;
	data: any;
	payment?: PaymentType;
	created_at: Date;
};
