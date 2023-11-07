import { ParkedCar } from "../application";

export interface ParkedCarRepository {
	list(): Promise<ParkedCar[]>;
	get(plate: string): Promise<ParkedCar>;
	save(parkedCar: ParkedCar): Promise<void>;
	update(parkedCar: ParkedCar): Promise<void>;
}
