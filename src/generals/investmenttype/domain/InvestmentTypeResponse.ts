export default interface InvestmentTypeResponse {
	id: number;
	name: string;
	description?: string;
	slug: string;
	registrationdate: Date;
	state: boolean;
}
