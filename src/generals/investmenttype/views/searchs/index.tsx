import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { InvestmentTypeRepository } from '../../infrastructure';
import { type InvestmentTypeResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Card } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';

const index = (): JSX.Element => {
	const [investmentTypes, investmentTypesSet] = useState<InvestmentTypeResponse[]>([]);

	useEffect(() => {
		void loadInvestmentTypes();
	}, []);

	const loadInvestmentTypes = async (): Promise<void> => {
		const response = await InvestmentTypeRepository.findAll();

		investmentTypesSet(response.data);
		console.log('response: ', response);
	};

	return (
		<>
			<Row className="pt-2">
				<Col xs={12}>
					<Card>
						<Card.Header>Listado de Investments</Card.Header>
						<Card.Body>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>Name</th>
										<th>Description</th>
										<th>Date</th>
										<th>State</th>
									</tr>
								</thead>
								<tbody>
									{investmentTypes.length > 0 &&
										investmentTypes.map(investmentType => (
											<tr key={investmentType.id}>
												<td>{investmentType.id}</td>
												<td>{investmentType.name}</td>
												<td>{investmentType.description}</td>
												<td>{format(parseISO(investmentType.registrationdate), 'dd/MM/yyyy')}</td>
												<td>
													<Badge pill bg={investmentType.state ? 'success' : 'danger'}>
														{investmentType.state ? 'Activo' : 'Elminado'}
													</Badge>
												</td>
											</tr>
										))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;
