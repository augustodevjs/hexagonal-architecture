import { ParkedCarRepository } from "../contracts";

type Output = {
	plate: string,
	checkinDate: Date
}

export class GetParkedCars {
	constructor(readonly parkedCarRepository: ParkedCarRepository) {
	}

	async execute(): Promise<Output[]> {
		const parkedCars = await this.parkedCarRepository.list();
		return parkedCars;
	}
}