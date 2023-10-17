export default interface InvestmentTypeResponse {
	id: number;
	name: string;
	description?: string;
	slug: string;
	registrationDate: Date;
	state: boolean;
}
