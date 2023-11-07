import { ParkedCar } from "../application";
import { ParkedCarRepository } from "../contracts";

type Input = {
	plate: string,
	checkinDate: string
}

export class Checkin {
	constructor(readonly parkedCarRepository: ParkedCarRepository) {
	}

	async execute(input: Input): Promise<void> {
		await this.parkedCarRepository.save(new ParkedCar(input.plate, new Date(input.checkinDate)));
	}
}