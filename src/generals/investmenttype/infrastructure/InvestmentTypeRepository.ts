import axios, { type AxiosResponse } from 'axios';
import { type InvestmentTypeResponse } from '../domain';
import { API_BASE_URL } from '../../../core/constants/env';


export const findAll = async (): Promise<InvestmentTypeResponse[]> => {
	console.log("API ", API_BASE_URL)
	const response: AxiosResponse<InvestmentTypeResponse []> = await axios.get<InvestmentTypeResponse[]>(

		'https://localhost:7021/api/Invesmenttype'

	);
	return response.data
}
	
// export const findAll = async (): Promise<AxiosResponse<InvestmentTypeResponse[]>> =>
// await axios.get<InvestmentTypeResponse[]>('https://localhost:7021/api/Invesmenttype');

//`${API_BASE_URL}/api/Investmenttype`,