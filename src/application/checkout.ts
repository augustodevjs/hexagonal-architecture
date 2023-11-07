import { ParkedCarRepository } from "../contracts";

type Input = {
	plate: string,
	checkoutDate: string
}

type Output = {
	price?: number,
	period?: number
}

export class Checkout {
	constructor(readonly parkedCarRepository: ParkedCarRepository) {
	}

	async execute(input: Input): Promise<Output> {
		const parkedCar = await this.parkedCarRepository.get(input.plate);
		parkedCar.checkout(input.checkoutDate);
		await this.parkedCarRepository.update(parkedCar);
		return {
			price: parkedCar.price,
			period: parkedCar.diff
		};
	}
}